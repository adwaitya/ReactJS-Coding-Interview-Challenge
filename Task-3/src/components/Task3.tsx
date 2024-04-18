import React, { useEffect, useState } from "react";
import "./task3.css";

/**
 *Task-3: Optimized Search Using debounce and cancelable technique

 *  Improve the search functionality using debounce and cancelable request and display filtered user details only.
 */
const Task3 = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUser, setFilteredUser] = useState({});

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

  useEffect(() => {
    const abortController = new AbortController();
    const timer = setTimeout(() => {
      try {
        fetch(
          `https://jsonplaceholder.typicode.com/users?username=${searchTerm}`,
          {
            signal: abortController.signal, // Pass the AbortController's signal to the fetch request
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log("FilteredUser ", data);
            setFilteredUser(data[0]);
          });
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Request was aborted");
        } else {
          console.error("Error fetching user data:", error);
        }
      }
    }, 300)
    return () => {
      abortController.abort();
      clearTimeout(timer);
    }
  }, [searchTerm])


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
      <div>
        <h4>Search Result</h4>
        {filteredUser && filteredUser.name}
      </div>
    </div>
  );
};

export default Task3;
