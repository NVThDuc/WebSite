import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const About = () => {
	return (
		<div className = 'text-center' >
			<Row className='mt-5' style={{ marginRight: 0 }}>
			<Col >
			<i class="bi bi-facebook"></i>
				<Button style = {{background:'purple'}}
					variant='primary'
					href='https://www.facebook.com/profile.php?id=100031891651861'
					size='lg'
				>
					About : Nguyễn Văn Thành Đức 
					<br>
					</br>


					
				</Button>

				<Button style = {{background:'black'}}
					variant='primary'
					href='https://github.com/NVThDuc'
					size='lg'
				>
					Github
					<br>
					</br>
					

					
				</Button>



				
				


				

				
			</Col>
			
		</Row>
		<div class="center"  >
		<img
					src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/248692108_557165725356478_9146958894773117749_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=30gy3GrTN3sAX8gS7F9&_nc_ht=scontent.fsgn2-6.fna&oh=4728f29b61e0ffa7adbd8f640b47c1a6&oe=61ACD771"
					alt='learnItLogo'
					width='200'
					height='200'
					className='mr-2'
				/>

		
		

	</div>

<Row className='mt-5' style={{ marginRight: 0 }}>
<Col >
	

	

	<Button style = {{background:'purple'}}
		variant='primary'
		href='https://www.facebook.com/eroi555'
		size='lg'
	>

		About : Đặng Quốc An
	</Button>
	<div class="center"  >

	<img
					src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-6/241513385_2979204989017268_7563732155970097982_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TpQ8VB4kphEAX8ixNd6&_nc_ht=scontent.fsgn2-2.fna&oh=249702b0f4a55c08730fb420fbd1e657&oe=61AB54D3"
					alt='learnItLogo'
					width='200'
					height='200'
					className='mr-2'
				/>
		

	</div>

	
</Col>
</Row>
		</div>
		
	)
}

export default About
