import React, { useEffect, useState } from "react";

/**
 *
 *  Write code to fetch the user's details from the open source rest endpoint and display the user's details in the table with proper style and in the center.
 */
const Task1 = () => {
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

  return (
    <div>
      <h5>Task-1: Fetch the users list and display</h5>
      <p>
        Write code to fetch the user's details from the open source rest
        endpoint and display the user's details in the table with proper style
        and in the center.
      </p>
      <table className="table">
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>website</th>
            <th>phone</th>
            <th>Company Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <td>{user.phone}</td>
              <td>{user.company?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Task1;
