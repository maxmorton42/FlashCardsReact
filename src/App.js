import React from 'react';
import Jokes from './Jokes';
import JokeForm from "./JokeForm";
import { Container, Header, Button} from "semantic-ui-react"; 

class App extends React.Component {

  state = {
    jokes: [
      { id: 1, front: "Why does the little mermaid wear sea-shells?", back: "Because she couldn't fit D shells",  },
      { id: 2, front: "Whats the difference between windows OS and a bucket of poop?", back: "The bucket",  },
      { id: 3, front: "What did the little mermaid wear to math class?", back: "An algebra",  },
    ],
    
  };

  getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  };
  
  addJoke = ({ front, back, }) => {
    let joke = { id: this.getId(), front, back, boolean: true, }
    this.setState({ jokes: [ ...this.state.jokes, joke], });
  };

  removeJoke = (id) => {
    const jokes = this.state.jokes.filter( joke => {
      if (joke.id !== id)
      return joke;

    });
    this.setState({ jokes, });
  };

  editJoke = (newJoke) => {
    const jokes = this.state.jokes.map( originalJoke => {
      if (originalJoke.id === newJoke.id)
      return newJoke;
    return originalJoke;
    })
    this.setState({ jokes })
  }


  render() {
    return (
      <Container style={{ paddingTop: "25px" }}>
        <Header>Flash That Card Girl</Header>
        <br />
        <JokeForm add={ this.addJoke} />
        <br />
        <Jokes jokes={this.state.jokes} removeJoke={this.removeJoke} editJoke={this.editJoke} />
      </Container>
      
    );
  };
};

export default App;
