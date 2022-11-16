import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Calendar3, Gift} from 'react-bootstrap-icons';
import Col from 'react-bootstrap/Col';

function Carosal() {
  return (
  <Container fluid>
    <Carousel >
      <Carousel.Item >
        <img 
       
                    src="./rect.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
   
          src="./rect.png"

          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
      
          src="./rect.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Container className="mt-3">
     <Row>
        <Col xs={6}>
            <h4>Features</h4>

            <Row>
                <Col>
                <p>GiftDetail <span className="ml-5"><Gift/></span></p>
                <p>TransactionDetail<span className="ml-5"><Calendar3 /></span></p>
                </Col>
            </Row>
        </Col>
        <Col xs={6}>
        <h4>Your Points</h4>

<Row>
    <Col>
    <p>PointDetail <span className="m-10">5000</span></p>
    <p>RedeemPoint<span className="ml-5">10000</span></p>
    <p>TotalPoints<span className="ml-5">110000</span></p>
    </Col>
</Row>
        
        </Col>
      </Row>
    </Container>
    </Container>
  );
}

export default Carosal