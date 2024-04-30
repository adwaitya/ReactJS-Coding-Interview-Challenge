# Top Most ReactJS Coding Interview Challenges For 2024

This article aims to provide an insightful exploration of coding challenges, and essential best practices for acing ReactJS interviews. By delving into the core concepts and practical scenarios, readers will gain a comprehensive understanding of what to expect in ReactJS coding interviews.

### Task-1: Fetch the users list and display

Write code to fetch the user's details from the open source rest endpoint and display the user's details in the table with proper style and in the center.

```javascript
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
      <h2>User Details</h2>
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
```

### Task-2: Implement Search Functionality

Fetch the user details and display user names. Also, implement a search bar functionality on the username.

```javascript
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
```

### Task-3: Optimized Search Using debounce and cancelable technique

Improve the search functionality using debounce and cancelable request and display filtered user details only.

```javascript
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

```

### Task-4: Implement Sort By Username functionality

Write code to fetch the user’s details and display the usernames. There should be two buttons to sort usernames in ascending order and descending order.

```javascript
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

```

### Task-5: Create Signup Form Controlled Component

Create a user registration form with fields for username, email, and password. Validate inputs and display appropriate error messages. (Create a controlled form component with a state to manage input values.)

```javascript
import React, { useState } from "react";
import "./user-resgistration-form.css";
import * as Yup from "yup"; // Import Yup for form validation

const UserRegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const schema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const handleChange = async (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    await validateField(name, value);
  };

  const validateField = async (name, value) => {
    try {
      await schema.validateAt(name, { [name]: value });
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    } catch (error) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: error.message }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await schema.validate(formData, { abortEarly: false });
      // Simulate API call with a delay
      setTimeout(() => {
        setLoading(false);
        setSuccessMessage("Registration successful!");
      }, 2000);
    } catch (error) {
      const validationErrors = {};
      error.inner.forEach((fieldError) => {
        validationErrors[fieldError.path] = fieldError.message;
      });
      setErrors(validationErrors);
      setLoading(false);
    }
  };
  return (
    <div id="user-registration">
      <h3>User Registration Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <span className="error-message">{errors.firstName}</span>
          )}
        </div>
        <div className="input-container">
          <input
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && (
            <span className="error-message">{errors.lastName}</span>
          )}
        </div>
        <div className="input-container">
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>
        <div className="input-container">
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <span className="error-message">{errors.password}</span>
          )}
        </div>
        <div className="btn-section">
          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
    </div>
  );
};

export default UserRegistrationForm;

```

### Task-6: Dark and Light Mode

Implement the logic to change the app display mode using context API.

### Task-7: Task ToDO List

Create a simple to-do list application where you can add, and remove tasks from the list.

### Task-8: Shopping Cart Component

Prepare JSON data for shopping items and implement a shopping cart app where users can add items, update the number of items, remove items, and display the final amount for the total order.

### Task-9: Pagination Component

Build a pagination component that fetches and displays data from an API, showing a fixed number of items per page

### Task-10: Infinite Scroll Gallery with Lazy Loading

Build an image gallery that loads more images as the user scrolls down the page. Implement lazy loading for improved performance.
