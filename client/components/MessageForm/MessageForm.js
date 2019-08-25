import React, {Component} from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  flex: 1;
  padding: 20px;
  border: 0;
  border-top: 1px solid #ccc;
`;

class MessageForm extends Component {
  state = {text: ''};

  handleSubmit(e) {
    e.preventDefault();
    const message = {
      from : this.props.name,
      text : this.state.text
    };
    this.props.onMessageSubmit(message);
    this.setState({ text: '' });
  }

  changeHandler(e) {
    this.setState({ text : e.target.value });
  }

  render() {
    return(
      <Form onSubmit={e => this.handleSubmit(e)}>
        <Input
          onChange={e => this.changeHandler(e)}
          value={this.state.text}
          placeholder='Message'
        />
      </Form>
    );
  }
}

export default MessageForm;