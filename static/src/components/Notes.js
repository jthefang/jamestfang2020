import React, { Component } from 'react';
import { 
  Col, Row, 
  Collapse, CardBody, Card, CardHeader 
} from 'reactstrap';
import { folders } from './notes/NotesData';

export default class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currIdx: -1,
      cards: [1, 2, 3, 4, 5]
    };
  }

  toggle = (e) => {
    let cardIdx = e.target.dataset.event;
    this.setState({
      currIdx: this.state.currIdx === Number(cardIdx) ? -1 : Number(cardIdx)
    });
  }

  render() {
    const { currIdx } = this.state;
    return (
      <Row className="mt-5 px-3 justify-content-center">
        <Col md="10" xl="6">
          <h1 className="display-5 mb-3">Notes</h1>
          {folders.map((folder, index) => (
            <Card key={index} className="mb-3">
              <CardHeader onClick={this.toggle} data-event={index}>{folder.title}</CardHeader>
              <Collapse isOpen={currIdx === index}>
                <CardBody>
                  {folder.notes.map((note, index) => (
                    <li key={index}>
                      <a href={note.link} target="_blank" rel="noopener noreferrer">{note.title}</a>
                    </li>
                  ))}
                </CardBody>
              </Collapse>
            </Card>
          ))}
        </Col>
      </Row>
    );
  }
}
