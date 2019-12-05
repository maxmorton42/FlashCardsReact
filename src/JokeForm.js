import React from "react";
import {Form,} from "semantic-ui-react";

class JokeForm extends React.Component {
  state = {front: "", back: "", editing: true, };
  
    componentDidMount() {
      if (this.props.id)
        this.setState({ front: this.props.front,  back: this.props.back, });
    };



  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id)
    this.props.editJoke({ id: this.props.id, front: this.state.front, back: this.state.back});
    else
    
      this.props.add(this.state);

      this.setState({ front: "", back: "", });
    // this.props.add(this.state)
    // this.setState({ front: "", back: "",})
  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value });
  };



    render() {
      return (
        <Form onSubmit={this.handleSubmit}>
        <Form.Group widths ="equal">
            <Form.TextArea
            fluid
            required
            label="front"
            placeholder="Joke"
            name="front"
            value={this.state.front}
            onChange={this.handleChange}
        />
   <br />
        <Form.TextArea
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