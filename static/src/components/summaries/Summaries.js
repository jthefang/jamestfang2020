import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

const books = [
  {
    title: 'The Fifth Mountain',
    href: 'https://www.goodreads.com/book/show/1429.The_Fifth_Mountain',
    date_finished: "4-27-20, coronavirus quarantine",
    bullets: [
      "Elijah the prophet, from god fearing, old testament Israel is chosen by god to oust the Phoenician Princess from the throne, because she wants everybody in the kingdom to worship Phoenician gods and not the one and almighty Yahweh. He goes on a whole journey of exile from his land, starves through the desert, finds love in a new city, only to have that city burn to the ground along with the woman he loved. Ends up the point is: the whole time he was just trying to do what god told him. But the important thing in life is to struggle. To wrestle with it and impose your own path. Don’t unquestioningly accept your fate. Question it and shape it. It’s no fun for god otherwise and he will fuck with you to get you to do it anyways.",
      "The religion of today is capitalism. We believe if we go to school, get a degree, start a business, make it big, that's success. But this mission was never ours. It was one pushed onto us by the media (i.e. our Yahweh). Blindly following this path and expecting God (the economy) to take care of you will (probably) lead to sore disappointments, and the whole time you'll be feeling shitty because you haven't achieved it yet. Whereas, if you struggle for something that YOU decide is meaningful, the whole time you're secretly happy from your own freedom and autonomy. The certainty that this mission is yours and these values come from you, that's it. You going after that. That's fulfillment."
    ],
    rating: {
      value: 3.5,
      reason: "I like the message, but it felt like a rushed read. Perhaps I've read too much long-winded academic fluff for my own good, and this just contrasts too much. I get that religion in the book is used as a metaphor for our almost religious belief in our systems today, but it still kind of bothered me how biblical and outdated this book read."
    }
  }
]

export default class Summaries extends Component {
  render() {
    return (
      <Row className="justify-content-center">
        {books.map((book, index) => (
          <Col key={index} className="my-5 px-5" lg="7">
            <h2>{book.title}</h2>
            <p><small><a href={book.href} target="_blank" rel="noopener noreferrer">Goodreads</a></small></p>
            <p><em>{book.rating.value}/5: {book.rating.reason}</em></p>
            <p>{book.bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}</p>
          </Col>
        ))}
      </Row>
    )
  }
}
