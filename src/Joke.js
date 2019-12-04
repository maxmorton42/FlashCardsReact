import React from "react";
import {Button, Table, } from "semantic-ui-react";


class Joke extends React.Component {
state = {show: false}

toggleShow = () => {
  this.setState({show: !this.state.show})
}

render() {
return (
    <Table.Row>
      <Table.Cell>{this.props.front}</Table.Cell>
      <Table.Cell>
        <Button color="green" onClick={() => this.toggleShow()}>
          FLIP
        </Button>
      </Table.Cell>
      <Table.Cell>{this.state.show ?  ( this.props.back ) : null }</Table.Cell>
    </Table.Row>
)
}
}

export default Joke;