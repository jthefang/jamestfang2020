import React, { Component } from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, Col
} from 'reactstrap';

export default class ProjectCard extends Component {
  render() {
    const { title, bullets, links, src } = this.props.card;
    const bulletPoints = bullets.map((text, index) => <p key={index}>{text}</p>);
    const linkButtons = links.map((link, index) =>
        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer"
          className="btn btn-primary mr-3 py-2 px-4">{link.text}</a>
    );

    return (
      <Col xs="12" md="6" xl="4" className="mb-4">
        <Card>
          <CardImg top width="100%" src={src} alt={title} />
          <hr className="my-0"/>
          <CardBody>
            <CardTitle><h4>{title}</h4></CardTitle>
            <div>{bulletPoints}</div>
            <div className="text-center">{linkButtons}</div>
          </CardBody>
        </Card>
      </Col>
    )
  }
}
