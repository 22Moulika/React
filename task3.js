import React, { useContext } from 'react';
import UserContext from './UserContext';

const Task3 = () => {
  const { selectedUser, clearSelectedUser } = useContext(UserContext);

  if (!selectedUser) {
    // Handle case where no user is selected
    return <div>No user selected</div>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <div>
        <h3>Name: {selectedUser.name}</h3>
        <p>ID: {selectedUser.id}</p>
        <p>Avatar: {selectedUser.avatar}</p>
        <p>Title: {selectedUser.title}</p>
      </div>
      <button onClick={clearSelectedUser}>Clear Selection</button>
    </div>
  );
};

export default Task3;
