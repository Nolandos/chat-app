import React from 'react';
import styled from 'styled-components';

const List = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 75vw;   
`;

const Content = styled.div`
  padding: 15px;
  background-color: #16a085;
  margin: 10px;
  display: inline;
`;

const Message = props => (
    <Content>
      <strong>{props.from} : </strong>
      <span>{props.text}</span>
    </Content>
  );

const MessageList = props => ( 
    <List>
    {console.log(props.messages)}
      {
        props.messages.map((message, i) => {
          return (
            <Message
              key={i}
              from={message.from}
              text={message.text}
            />
          );
        })
      }
    </List>
  );

  export default MessageList;