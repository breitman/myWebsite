import React, {Component} from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import img from '../../../public/linked-in-profile.jpg'

class AboutMePage extends Component {
  render() {
     return (
      <Container id="aboutme">
        <Row>
          <Col>
            <p className="about">
              Ben Reitman was born and raised in Palm Beach Gardens, Florida.
              During his Sophomore year of High School, Ben became extremely
              interested in programming after enrolling in his first Computer
              Science class. He has recently graduated from the University of
              Wisconsin-Madison with a BS degree in Computer Science and a
              Certificate in Entrepreneurship. Ben is also a graduate of the
              Fullstack Academy of Code.
            </p>
          </Col>
          <Col>
            <img className="about-image" src={img} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default AboutMePage
