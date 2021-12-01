import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import learnItLogo from '../../assets/logo.svg'
import logoutIcon from '../../assets/logout.svg'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from 'react'

const NavbarMenu = () => {
	const {
		authState: {
			user: { username }
		},
		logoutUser
	} = useContext(AuthContext)

	const logout = () => logoutUser()

	return (
		<Navbar style = {{background:'black'}} >
			<Navbar.Brand className='font-weight-bolder text-white ' style = {{background:'black'}} >
				<img
					src="https://thumbs.dreamstime.com/b/note-linear-icon-modern-outline-logo-concept-white-back-background-user-interface-web-navigation-collection-suitable-133526830.jpg"
					alt='learnItLogo'
					width='32'
					height='32'
					className='mr-2'
				/>
				NoteApp
			</Navbar.Brand>

			<Navbar.Toggle aria-controls='basic-navbar-nav' />

			<Navbar.Collapse id='basic-navbar-nav' style = {{background:'black'}} >
				<Nav className='mr-auto' >
					<Nav.Link
						className='font-weight-bolder text-white'
						to='/dashboard'
						as={Link}
					>
						Noted
					</Nav.Link>
					<Nav.Link
						className='font-weight-bolder text-white'
						to='/about'
						as={Link}
					>
						About Us
					</Nav.Link>
				</Nav>

				<Nav>
					<Nav.Link className='font-weight-bolder text-white' disabled>
						Welcome {username}
					</Nav.Link>
					<Button style = {{background:'purple'}}
						variant='secondary'
						className='font-weight-bolder text-white'
						onClick={logout}
					>
						<img
							src={logoutIcon}
							alt='logoutIcon'
							width='32'
							height='32'
							className='mr-2'
						/>
						Đăng Xuất 
					</Button>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default NavbarMenu
