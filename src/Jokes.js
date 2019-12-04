import React from "react";
import { Table, Button,  } from "semantic-ui-react";
import Joke from "./Joke"

const Jokes = ({ jokes, flipDat }) => {
  const renderJokes = () => {
    return (
      jokes.map( joke => (
        <Joke key={joke.id} {...joke} flipDat={flipDat}/>
      ))
    )
  }

  return (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Joke</Table.HeaderCell>
        <Table.HeaderCell>Flip It Good</Table.HeaderCell>
        <Table.HeaderCell>Answer</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {renderJokes()}
    </Table.Body>
  </Table>
  )
}


export default Jokes;