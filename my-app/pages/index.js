/*********************************************************************************
*  WEB422 – Assignment 4
*
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
* 
*  Name: ___Frank Fu___________________ Student ID: ____126609197____________ Date: ________July 5 2024____________
*
********************************************************************************/ 

import Image from 'react-bootstrap/Image';
import { Row, Col } from 'react-bootstrap';


const Home = () => (
  <>
    <Image src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg" fluid rounded />
    <Row>
      <Col md={6}>
        <p>The Metropolitan Museum of Art of New York City, colloquially "the Met", is the largest art museum in the United States. With 6,479,548 visitors to its three locations in 2019, it was the fourth most visited art museum in the world.</p>
      </Col>
      <Col md={6}>
        <p>Its permanent collection contains over two million works, divided among seventeen curatorial departments. The main building at 1000 Fifth Avenue, along the Museum Mile on the eastern edge of Central Park on Manhattan's Upper East Side, is by area one of the world's largest art museums.</p>
        <a href="https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art" target="_blank" rel="noreferrer">Learn more</a>
      </Col>
    </Row>
  </>
);

export default Home;