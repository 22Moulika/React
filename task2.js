import React, { useState, useEffect } from 'react';

function Task2() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetching users data from the API
    // ...

  }, []);

  const handleCardClick = (user) => {
    // Handle card click navigation
  };

  return (
    <div className="grid">
      {users.map((user) => (
        <div key={user.id} className="card" onClick={() => handleCardClick(user)}>
          <img src={user.avatar} alt={user.name} />
          <h3>{user.name}</h3>
          <p>ID: {user.id}</p>
          <p>Title: {user.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Task2;
