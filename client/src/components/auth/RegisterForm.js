import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import AlertMessage from '../layout/AlertMessage'

const RegisterForm = () => {
	// Context
	const { registerUser } = useContext(AuthContext)

	// Local state
	const [registerForm, setRegisterForm] = useState({
		username: '',
		password: '',
		confirmPassword: ''
	})

	const [alert, setAlert] = useState(null)

	const { username, password, confirmPassword } = registerForm

	const onChangeRegisterForm = event =>
		setRegisterForm({
			...registerForm,
			[event.target.name]: event.target.value
		})

	const register = async event => {
		event.preventDefault()

		if (password !== confirmPassword) {
			setAlert({ type: 'danger', message: 'Mật khẩu không trùng khớp ' })
			setTimeout(() => setAlert(null), 5000)
			return
		}

		try {
			const registerData = await registerUser(registerForm)
			if (!registerData.success) {
				setAlert({ type: 'danger', message: registerData.message })
				setTimeout(() => setAlert(null), 5000)
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			<Form className='my-4' onSubmit={register}>
				<AlertMessage info={alert} />

				<Form.Group>
					<Form.Control
						type='text'
						placeholder='Tên Đăng Nhập'
						name='username'
						required
						value={username}
						onChange={onChangeRegisterForm}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Control
						type='password'
						placeholder='Mật Khẩu '
						name='password'
						required
						value={password}
						onChange={onChangeRegisterForm}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Control
						type='password'
						placeholder='Nhập Lại Mật Khẩu'
						name='confirmPassword'
						required
						value={confirmPassword}
						onChange={onChangeRegisterForm}
					/>
				</Form.Group>
				<Button variant='success' type='submit'>
					Đăng Ký 
				</Button>
			</Form>
			<p>
				Bạn đã có tài khoản ?
				<Link to='/login'>
					<Button variant='info' size='sm' className='ml-2'>
						Đăng Nhập
					</Button>
				</Link>
			</p>
		</>
	)
}

export default RegisterForm
