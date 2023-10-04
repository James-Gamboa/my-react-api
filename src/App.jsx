/* eslint-disable jsx-a11y/alt-text */
// @ts-nocheck
import React, { useState, useEffect } from "react";
import "./App.css";

const API_URL = "https://reqres.in/api/users?page=1&per_page=15";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setUsers(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <h1>React API</h1>
      <div className="flex">
        {users.length &&
          users.map((user) => {
            return (
              <div key={user.id}>
                <p>
                  <strong>{user.first_name}</strong>
                </p>
                <p>{user.email}</p>
                <img key={user.avatar} src={user.avatar} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default App;
