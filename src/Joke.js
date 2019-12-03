import React from "react";
import Jokes from "./Jokes"
import {Button, Table, } from "semantic-ui-react";


const Joke = ({front, back, flipDat}) => (

    <Table.Row>
      <Table.Cell>{front}</Table.Cell>
      <Table.Cell>{back}</Table.Cell>
      <Table.Cell>
        <Button color="green" onClick={() => flipDat()}>
          FLIP
        </Button>
      </Table.Cell>
    </Table.Row>

);

export default Joke;