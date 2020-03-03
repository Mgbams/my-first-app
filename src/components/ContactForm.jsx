import React, { Component} from 'react';
import { Form, Button } from 'react-bootstrap';

class ContactForm extends Component {
  state = {
    email: '',
    message: '',
  };

  handleEmailChange = (e) => {
   const email = e.target.value;
   this.setState({
    // email: email ------ Another syntax
    email
   }) ;    
  }

  // function generator that helps to curb writting many functions for almost same action
  handleChange = (propName) => (event) => {
    const newValue = event.target.value;
    this.setState({[propName]: newValue})
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  handleMessageChange = (e) => {
    const message = e.target.value;
    this.setState({
     // message: message ---- Another syntax
     message
    }) ;    
   }

  render = () => {
    const {email , message } = this.state; // Destructuring an object
    return (
      <Form onSubmit={this.handleFormSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={this.handleChange('email')}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
  
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows="3" onChange={this.handleChange('message')} value={message}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    );
  }
}

export default ContactForm;
