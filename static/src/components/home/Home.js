import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import PropicCarousel from './PropicCarousel';
import Social from './Social';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron mb-5">
          <Row className="align-items-center">
            <Col xs="12" md="4" xl="3" className="mb-3">
              <PropicCarousel />
            </Col>
            <Col className="px-4">
              <p className="lead">Hi. I'm James.</p>
              <p className="lead">I'm a software engineer at SpaceX in Hawthorne, California.</p>
              <p className="lead">Basketball, video games and going to Mars pretty much fill most of my conscious thought.</p>
              <Social />
            </Col>
          </Row>
        </div>
        <Container fluid>
          <Row className="text-center">
            <Col xs="12">
              <h1 className="display-4">What you'll find on this website</h1>
            </Col>
            <hr className="my-4 w-75 border border-top border-secondary" />
            <Col xs="12" className="px-5 pb-5">
              <p className="lead">I post some of my projects here. I write short book summaries. I keep notes on classes I've found interesting at Berkeley.</p>
              {/* <p className="lead">I'm also currently looking for a full-time full stack position in the Bay. Check out my resume!</p> */}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
