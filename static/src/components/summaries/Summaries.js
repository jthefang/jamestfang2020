import React, { Component } from 'react';
import { Row, Col, Collapse, CardBody, Card, CardHeader } from 'reactstrap';

import exhalation from './data/exhalation.json';
import four_agreements from './data/four_agreements.json';
import colorless_tsukuru from './data/colorless_tsukuru.json';
import when_science_of_perfect_timing from './data/when_science_of_perfect_timing.json';
import subtle_art_of_not_giving_a_fuck from './data/subtle_art_of_not_giving_a_fuck.json';
import fifth_mountain from './data/fifth_mountain.json';

let books = [
  exhalation, four_agreements, colorless_tsukuru, 
  when_science_of_perfect_timing, subtle_art_of_not_giving_a_fuck, fifth_mountain
];

export default class Summaries extends Component {
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

  bullets_to_ul(json_bullet_obj, idx_str=0) {
    /** 
     * Returns an unordered list of bullets (<ul> / <li> elements) from a json list object.
     * 
     * Example input:
     *  json_bullet_obj = [
     *    "bullet 1",
     *    "bullet 2",
     *    [
     *      "sub bullet 2-1",
     *      [
     *        "sub bullet 2-1-1",
     *        "sub bullet 2-1-2"
     *      ],
     *      "sub bullet 2-2"
     *    ],
     *    "bullet 3",
     *    ...
     *  ]
    */
    if (typeof json_bullet_obj == "string") {
      return <li key={idx_str}>{json_bullet_obj}</li>;
    }
    return <ul key={idx_str}>{json_bullet_obj.map((el, idx) => this.bullets_to_ul(el, `${idx_str}-${idx}`))}</ul>
  }

  json_to_book_object(json_obj) {
    return {
      ...json_obj,
      bullets: this.bullets_to_ul(json_obj["bullets"])
    }
  }

  render() {
    const { currIdx } = this.state;
    let book_objects = books.map(book => this.json_to_book_object(book));
    return (
      <Row className="my-5 pb-5 px-1 justify-content-center">
        <Col xs="12" md="8">
          {book_objects.map((book, index) => (
            <Card key={index} className="mb-3">
              <CardHeader className="btn" onClick={this.toggle} data-event={index}>{book.title}</CardHeader>
              <Collapse isOpen={currIdx === index}>
                <CardBody>
                <h2>{book.title}</h2>
                <p><small><a href={book.href} target="_blank" rel="noopener noreferrer">Goodreads</a></small></p>
                <p><em>{book.rating.value}/5: {book.rating.reason}</em></p>
                {book.bullets}
                </CardBody>
              </Collapse>
            </Card>
          ))}
        </Col>
      </Row>
    );
  }
}
