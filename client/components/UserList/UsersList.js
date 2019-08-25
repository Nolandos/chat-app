import React from 'react';
import styled from 'styled-components';

const Users = styled.div`
  display: flex;
  flex: 1;
  width: 25vw;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #2c3e50;
`;

const UsersOnline = styled.div`
  padding: 20px;
  text-align: center;
  background: #2c3e50;
  color: #27ae60;
`;

const List = styled.div`
  margin: 0;
  padding: 0;
`;

const UserItem = styled.div`
  list-style: none;
  border-bottom: 1px solid #ccc;
  color: #fff;
  padding: 20px;
  margin: 0 0 0 20px;
`; 

const UsersList = props => (
  <Users>
    <UsersOnline>
      {props.users.length} people online
    </UsersOnline>
    <List>
      {
        props.users.map((user) => {
          return (
            <UserItem key={user.id}>
              {user.name}
            </UserItem>
          );
        })
      }
    </List>
  </Users>
);

export default UsersList;