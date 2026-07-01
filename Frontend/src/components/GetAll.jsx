import React from 'react'
import axios from 'axios'
const GetAll = () => {
    const [users, setUsers] = React.useState([]);
  const handleClick = async () => {
    try {
      const response = await axios.get('http://localhost:5000/users/getAll');
      console.log(response.data);
      setUsers(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Get All Users : </h1>
      <button className="btn btn-primary" type="button" onClick={handleClick} style={{ margin: "10px" }}>
        Get All Users
      </button>
      <div className="row">
        {users.map((user) => (
          <div key={user._id} className="col-md-4">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GetAll