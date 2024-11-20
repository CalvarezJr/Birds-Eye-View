import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Home() {
    return (
       
        <Container>
        <Row>
          <Col>
          <Image
            className="bg-img"
            src="./img/bev-homepage.jpg"
            alt="Birds Eye View Homepage"
        />
          </Col>
        </Row>
      </Container>
    )  
}

export default Home;