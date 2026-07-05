import React, { useState } from 'react'
import axios from 'axios'

const GetUser = () => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  const handleClick = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/users/get/${email}`);
      console.log(response.data);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='container'>
      <h1>GetUser</h1>
      <input type="text" placeholder="Enter User Email.." value={email} onChange={(e) => setEmail(e.target.value)} />
      <button className="btn btn-primary" type="button" onClick={(handleClick)} style={{ margin: "10px" }}>
        Get User
      </button>
      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  )
}

export default GetUser