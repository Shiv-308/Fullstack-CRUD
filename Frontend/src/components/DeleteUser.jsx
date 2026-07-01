import React, { useState } from 'react'
import axios from 'axios'
const DeleteUser = () => {
    const [email, setEmail] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.delete(`http://localhost:5000/users/delete/${email}`);
            console.log('User deleted:', response.data);
            alert('User deleted successfully!');
            setEmail('');
        } catch (error) {
            console.error('Error deleting user:', error);
            alert('Error deleting user. Please check if the email exists.');
        }
    }
  return (
    <div className="container" style={{ display: 'flex' }}>
        <h1>Delete User : </h1>
        <form onSubmit = { handleSubmit}>
            <input type="text" placeholder="Enter User E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit">Delete User</button>
        </form>
    </div>
  )
}

export default DeleteUser