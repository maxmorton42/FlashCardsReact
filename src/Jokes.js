import React from "react";
import { Table, Button,  } from "semantic-ui-react";
import Joke from "./Joke"

const Jokes = ({ jokes, remove }) => {
  const renderJokes = () => {
    return (
      jokes.map( joke => (
        <Joke key={joke.id} {...joke} remove={remove} />
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
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {renderJokes()}
    </Table.Body>
  </Table>
  )
}


export default Jokes;