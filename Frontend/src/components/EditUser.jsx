import React, {useState} from 'react'
import axios from 'axios'
const EditUser = () => {
  const [newName, setNewName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/users/update/${email}`, {
        name: newName
      });
      console.log("Updated User:", response.data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-8'>
          <h1>Edit User : </h1>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter User Email.." value={email} onChange={(e) => setEmail(e.target.value)}/>
             <input 
              type="text" 
              placeholder="Enter New Name" 
              value={newName} 
              onChange={(e) => setNewName(e.target.value)}
              style={{margin: '10px', padding: '10px', width: '300px'}}
            />
            <br />
            <button type="submit" className="btn btn-primary" style={{margin: '10px', padding: '10px', width: '100px'}}>Update</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default EditUser