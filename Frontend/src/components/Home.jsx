import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <h1>Home</h1>

      <ul>
        <li><Link to="/addUser">Add User</Link></li>
        <li><Link to="/editUser">Edit User</Link></li>
        <li><Link to="/getUser">View User</Link></li>
        <li><Link to="/getAll">View All Users</Link></li>
        <li><Link to="/deleteUser">Delete User</Link></li>
      </ul>
    </div>
  );
};

export default Home;