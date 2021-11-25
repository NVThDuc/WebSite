import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const About = () => {
	return (
		<div className = 'text-center'>
			<Row className='mt-5' style={{ marginRight: 0 }}>
			<Col >
			<i class="bi bi-facebook"></i>
				<Button
					variant='primary'
					href='https://www.facebook.com/profile.php?id=100031891651861'
					size='lg'
				>
					About : Nguyễn Văn Thành Đức 
				</Button>
				


				

				
			</Col>
		</Row>

<Row className='mt-5' style={{ marginRight: 0 }}>
<Col >
	

	

	<Button
		variant='primary'
		href='https://www.facebook.com/yung5152'
		size='lg'
	>
		About : Phạm Duy Hưng
	</Button>
</Col>
</Row>
		</div>
		
	)
}

export default About
