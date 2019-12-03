import React from 'react';
import Jokes from './Jokes';
import JokeForm from "./JokeForm";
import { Container, Header, } from "semantic-ui-react"; 

class App extends React.Component {

  state = {
    jokes: [
      { id: 1, front: "A", back: "B", boolean: "true", },
      { id: 1, front: "A", back: "B", boolean: "true", },
      { id: 1, front: "A", back: "B", boolean: "true", },
    ],
    
  };

  getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  };
  
  addJoke = ({ front, back, }) => {
    let joke = { id: this.getId() , front, back, boolean: "true", }
    this.setState({ jokes: [ ...this.state.jokes, joke], });
  };

  flipDat = () => this.setState({ boolean: !this.state.showForm,});


  render() {
    return (
      <Container style={{ paddingTop: "25px" }}>
        <Header>Flash That Card Girl</Header>
        <br />
        <JokeForm add={ this.addJoke}/>
        <br />
        <Jokes jokes={this.state.jokes} flipDat={this.flipDat} />
      </Container>
      
    );
  };
};


export default App;
