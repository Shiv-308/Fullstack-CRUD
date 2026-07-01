import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from './components/Home'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
import GetAll from './components/GetAll'
import DeleteUser from './components/DeleteUser'
import GetUser from './components/GetUser'

const App = () => {
  return (
    <Router>
      <Home />
      <Routes>
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/editUser" element={<EditUser />} />
        <Route path="/getAll" element={<GetAll />} />
        <Route path="/deleteUser" element={<DeleteUser />} />
        <Route path="/getUser" element={<GetUser />} />
      </Routes>
    </Router>
  )
}

export default App