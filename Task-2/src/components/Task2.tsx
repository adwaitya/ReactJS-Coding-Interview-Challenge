import React, { useEffect, useState } from "react";
import "./task2.css";

/**
 *Task-2: Implement Search Functionality
 *  Fetch the user details and display user names. Also, implement a search bar functionality on the username.
 */
const Task2 = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) =>
        response.json().then((data) => {
          console.log("data", data);
          setUsers(data);
        })
      )
      .catch((e) => console.error("Unable to fetch data", { e }));
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>User Details</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by Name"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>name</th>
              <th>email</th>
              <th>website</th>
              <th>phone</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Task2;
