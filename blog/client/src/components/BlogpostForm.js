import React, { Component } from 'react';
import {
  Container, Row, Col,
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import axios from 'axios';

export default class BlogpostForm extends Component {
  constructor(props) {
    super(props);
    this.bodyInput = React.createRef();

    this.state = {
      post: {
        body: "",
      },
    };
  }
  
  componentDidMount() {
    this.bodyInput.current.focus();
  }

  resetPost = () => {
    this.setState({
      ...this.state,
      post: {
        body: "", 
      }
    });
  }

  onChange = (e) => {
    this.setState({ 
      ...this.state,
      post: {
        ...this.state.post,
        body: e.target.value,
      }
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    axios.post(`/api/blogposts/`, this.state.post)
      .then(res => { 
        console.log("Blogpost posted.");
        this.resetPost();
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container>
        <Row className="my-5 justify-content-center">
          <Col xs="8" className="text-left">
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="post-body">Just one paragraph a day:</Label>
                <Input type="textarea" name="body" id="post-body" innerRef={this.bodyInput}
                  rows="8" value={this.state.post.body} onChange={this.onChange} />
              </FormGroup>
              <Button type="submit" color="primary" className="mb-2">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}
