import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import axios from 'axios'; 
import './App.css';
import AddUser from './component/AddUser/AddUser';

function App() {
  let userData: any= [];
  const [users, setUsers] = useState([])

const getAllUserAxios = () => {
  axios.get('http://localhost:3001/users').then(
    (res) => {
      const {allUsers} = res.data
      console.log('allUsers from axios', allUsers )
      userData = allUsers
      setUsers(allUsers)
    }
  ).catch(
    (err) => {
      console.log('err from axios', err.massage)
  }
  )
}

  useEffect(() => {
    getAllUserAxios();
     
    
},[])
  console.log('userData', userData)
  console.log('users', users)
const allUsersHTML = users.map((user:any, index) => {
  return (
    <p key={user.id}>
      User-{index} :- {user.email}
    </p>
  )
})

console.log('users', users)
  return (
        <div>
          <p> HTTP</p>
         {allUsersHTML}
         
         <AddUser getAllUserAxios = {getAllUserAxios}/>
        </div>
  );
}

export default App;
