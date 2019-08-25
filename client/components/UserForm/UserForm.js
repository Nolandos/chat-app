import React, {Component} from 'react';
import styled from 'styled-components';

//import { FaRocketchat } from "react-icons/fa";

const Title = styled.h1`
  font-size: 3em;
  font-family: 'Lexend Peta', sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightblue;
  width: 100vw;
  height: 100vh;
`;

const Input = styled.input`
  padding: 20px;
  font-size: 1.5em;
  text-align: center;
  border: 0;
  border-bottom: 1px solid #ccc;
  width: 510px;
  outline: none;

  &.error {
    border: 1px solid red;
  }
`;

class UserForm extends Component {
  state = {name: ''};

  handleSubmit = e => {
    e.preventDefault();
    if(this.state.name === '') {
      document.querySelector('input').classList.add('error'); 
    } else {
      this.props.onUserSubmit(this.state.name);
    }
  }

  handleChange = e => {
    this.setState({ name : e.target.value });
  }

  render() {
    return(
      <Form onSubmit={e => this.handleSubmit(e)}>
      <Title>Chat online</Title>
        <Input
          placeholder='Write your nickname and press enter'
          onChange={e => this.handleChange(e)}
          value={this.state.name}
        />
      </Form>
    );
  }
}

export default UserForm;