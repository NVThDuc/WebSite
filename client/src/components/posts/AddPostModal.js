import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext, useState } from 'react'
import { PostContext } from '../../contexts/PostContext'

const AddPostModal = () => {
	// Contexts
	const {
		showAddPostModal,
		setShowAddPostModal,
		addPost,
		setShowToast
	} = useContext(PostContext)

	// State
	const [newPost, setNewPost] = useState({
		title: '',
		description: '',
		url: '',
		status: 'TO LEARN'
	})

	const { title, description, url } = newPost

	const onChangeNewPostForm = event =>
		setNewPost({ ...newPost, [event.target.name]: event.target.value })

	const closeDialog = () => {
		resetAddPostData()
	}

	const onSubmit = async event => {
		event.preventDefault()
		const { success, message } = await addPost(newPost)
		resetAddPostData()
		setShowToast({ show: true, message, type: success ? 'success' : 'danger' })
	}

	const resetAddPostData = () => {
		setNewPost({ title: '', description: '', url: '', status: 'TO LEARN' })
		setShowAddPostModal(false)
	}

	return (
		<Modal show={showAddPostModal} onHide={closeDialog}>
			<Modal.Header closeButton>
				<Modal.Title>Thêm Vào Danh Mục Bạn Muốn Học </Modal.Title>
			</Modal.Header>
			<Form onSubmit={onSubmit}>
				<Modal.Body>
					<Form.Group>
						<Form.Control
							type='text'
							placeholder='Chủ Đề'
							name='title'
							
							aria-describedby='title-help'
							value={title}
							onChange={onChangeNewPostForm}
						/>
						<Form.Text id='title-help' muted>
							
						</Form.Text>
					</Form.Group>
					<Form.Group>
						<Form.Control
							as='textarea'
							rows={3}
							placeholder='Mô Tả'
							name='description'
							value={description}
							onChange={onChangeNewPostForm}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Control
							type='text'
							placeholder='Đường dẫn bạn học'
							name='url'
							value={url}
							onChange={onChangeNewPostForm}
						/>
					</Form.Group>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={closeDialog} style = {{background:'black'}}>
						Cancel
					</Button>
					<Button variant='primary' type='submit' style = {{background:'purple'}}>
						Ok!
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	)
}

export default AddPostModal
