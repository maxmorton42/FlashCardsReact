import React from "react";
import {Form,} from "semantic-ui-react";

class JokeForm extends React.Component {
  state = {front: "", back: "", };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state)
    this.setState({ front: "", back: "",})
  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value });
  };


  
    render() {
      return (
        <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
            <Form.Input
            fluid
            required
            label="front"
            placeholder="Joke"
            name="front"
            value={this.state.front}
            onChange={this.handleChange}
        />
        <Form.Input
            fluid
            required
            label="back"
            placeholder="Answer"
            name="back"
            value={this.state.back}
            onChange={this.handleChange}
        />
          </Form.Group>
               <Form.Button>Submit</Form.Button>
        </Form>
      );
    };
};


export default JokeForm;