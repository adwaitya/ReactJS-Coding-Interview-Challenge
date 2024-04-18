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

### Task-4: Implement Sort By Username functionality

Write code to fetch the user’s details and display the usernames. There should be two buttons to sort usernames in ascending order and descending order.

### Task-5: Create Signup Form Controlled Component

Create a user registration form with fields for username, email, and password. Validate inputs and display appropriate error messages. (Create a controlled form component with a state to manage input values.)

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
