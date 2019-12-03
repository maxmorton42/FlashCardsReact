import React from "react";
import { Table, Button,  } from "semantic-ui-react";
import Joke from "./Joke"

const Jokes = ({ jokes, flipDat }) => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Front</Table.HeaderCell>
        <Table.HeaderCell>Back</Table.HeaderCell>
        <Table.HeaderCell>FlipDat</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
    {
      jokes.map( joke => (
        <Joke key={joke.id}{...joke} flipDat={flipDat}/>
      ))
    }
    </Table.Body>
  </Table>
)


export default Jokes;