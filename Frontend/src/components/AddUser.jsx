import React, { useState } from 'react'
import axios from 'axios'
const AddUser = () => {
    const [users, setUsers] = useState([]);
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/users/create', data)
        console.log(data);
        setUsers([...users, data]);
        setData({
            name: '',
            email: '',
            password: ''
        });
    }
    
    return (
    <div className="container">
      
      <div className="row">
        <div className="col-md-8">
            <h1>Add User Details : </h1>
          <form onSubmit = { handleSubmit }>
            <div className="row">
              <div className="col">
                <input type="text" placeholder="Name" value={data.name} 
                onChange={(e) => setData({...data, name: e.target.value})} />
                <input type="email" placeholder="Email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
                <input type="password" placeholder="Password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
              </div>
            </div>
            <button type="submit" className="btn btn-success">Add User</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddUser