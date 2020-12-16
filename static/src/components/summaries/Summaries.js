import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import fifth_mountain from './data/fifth_mountain.json';
import subtle_art_of_not_giving_a_fuck from './data/subtle_art_of_not_giving_a_fuck.json';
import when_science_of_perfect_timing from './data/when_science_of_perfect_timing.json';
import colorless_tsukuru from './data/colorless_tsukuru.json';
import four_agreements from './data/four_agreements.json';

let books = [
  four_agreements, colorless_tsukuru, when_science_of_perfect_timing, 
  subtle_art_of_not_giving_a_fuck, fifth_mountain
];

export default class Summaries extends Component {
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
    books = books.map(book => this.json_to_book_object(book))
    return (
      <Row className="justify-content-center mb-5 pb-5">
        {books.map((book, index) => (
          <Col key={index} className="my-5 px-5" lg="7">
            <h2>{book.title}</h2>
            <p><small><a href={book.href} target="_blank" rel="noopener noreferrer">Goodreads</a></small></p>
            <p><em>{book.rating.value}/5: {book.rating.reason}</em></p>
            {book.bullets}
          </Col>
        ))}
      </Row>
    )
  }
}
