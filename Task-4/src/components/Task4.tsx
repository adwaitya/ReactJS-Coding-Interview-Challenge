import React, { useEffect, useState } from "react";
import "./task4.css";

/**
 *Task-3: Optimized Search Using debounce and cancelable technique

 *  Improve the search functionality using debounce and cancelable request and display filtered user details only.
 */
const Task4 = () => {
  const [users, setUsers] = useState([]);

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

  const handleAscendingSort = () => {
    const usersData = [...users].sort((a, b) =>
        a.username.localeCompare(b.username)
      );
      setUsers(() => usersData);
  };
  const handleDescendingSort = () => {
    const usersData = [...users].sort((a, b) =>
      b.username.localeCompare(a.username)
    );
    setUsers(() => usersData);
  };

  return (
    <div>
      <h2>User Details</h2>
      <h5>Example of short by username</h5>
      <div style={{ marginBottom: "1rem" }}>
        <button
          onClick={() => handleAscendingSort()}
          style={{ marginRight: "10px" }}
        >
          Short by Ascending
        </button>
        <button onClick={() => handleDescendingSort()}>
          Short by Descending
        </button>
      </div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>email</th>
              <th>username</th>
              <th>phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Task4;
