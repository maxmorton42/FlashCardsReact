import React from "react";
import JokeForm from "./JokeForm"
import {Button, Card, } from "semantic-ui-react";


// class Joke extends React.Component { 
// state = {show: false}

// toggleShow = () => {
//   this.setState({show: !this.state.show})
// }

// render() {
// return (
//     <Table.Row>
//       <Table.Cell>{this.props.front}</Table.Cell>
//       <Table.Cell>
//         <Button color="green" onClick={() => this.toggleShow()}>
//           FLIP
//         </Button>
//       </Table.Cell>
//       <Table.Cell>{this.state.show ?  ( this.props.back ) : null }</Table.Cell>
//       <Table.Cell>
//         <Button color="red" onClick={() => this.props.remove(this.props.id)}>Delete </Button>
//         </Table.Cell>
//     </Table.Row>
// )
// }
// }


class Joke extends React.Component { 
  state = {show: false, editing: false};
  
  toggleShow = () => {
    this.setState({show: !this.state.show})
  }

  toggleEdit = () => this.setState({ editing: !this.state.editing,});
  
  render() {
    const { id, front, back, editJoke, removeJoke} = this.props
    const content = this.state.show ?  ( back ) : null
  return (
      <Card>
       { 
        this.state.editing ? 
        <JokeForm front={front} back={back} id={id} editJoke={editJoke} />
        :
        <>
          <br />
          <Card.Content header={front} />
          <br/>
          <Card.Content description={content} />
          <br />
        </>
    }
    <Card.Content extra>
    <Button color="red" onClick={() => removeJoke(id)}>Delete </Button>
      <Button color="blue" onClick={this.toggleEdit}>
        Edit
      </Button>
      <Button color="green" onClick={() => this.toggleShow()}>
            FLIP
          </Button>
    </Card.Content>
  </Card>

        // { }
         
       
  )
  }
}

export default Joke;

// class Contact extends React.Component {
//   state = { editing: false, };

//   toggleEdit = () => this.setState({ editing: !this.state.editing, });

//   render() {
//     const { id, firstName, phone, removeContact, } = this.props;
//     return( 
//       <Card>
//         { 
//           this.state.editing ? 
//             <ContactForm firstName={firstName} phone={phone} id={id} editContact={this.props.editContact} />
//           :
//             <>
//               <Card.Content header={firstName} />
//               <Card.Content description={phone} />
//             </>
//         }
//         <Card.Content extra>
//           <Button color="red" onClick={() => removeContact(id)}>
//             Delete
//           </Button>
//           <Button color="blue" onClick={this.toggleEdit}>
//             Edit
//           </Button>
//         </Card.Content>
//       </Card>
//     );
//   };
// };