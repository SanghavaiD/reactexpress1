/*
import './App.css';
import {useState} from 'react';
import axios from 'axios';
function App() {

    const [data , setUserData] = useState([]);
    const[userid , setUserId] =useState('');
    const[email , setEmail] =useState('');
    const[password , setPassword] =useState('');

    const updateUserId =(event)=>
    {
      setUserId(event.target.value);
    }

    const updateEmail = (event) =>
    {
      setEmail(event.target.value);
    }

    const updatePassword = (event) =>
    {
      setPassword(event.target.value);
    }

    const insertUsers =(event)=>
    {
      event.preventDefault();
      axios.post('http://localhost:8307/insert' , 
      {uid:userid , emailid:email,password:password})
      .then(res => console.log(res));
    }
    
    const updateUsers =(event)=>
    {
      event.preventDefault();
      axios.post('http://localhost:8307/update' , 
      {uid:userid , emailid:email,password:password})
      .then(res => console.log(res));
      console.log("user updated");
      fetchdata();
    }

    const deleteUsers = () => {
      axios.delete('http://localhost:8307/delete',{uid:userid})
        .then(res => console.log(res)).console.log("user deleted");
          fetchdata();
        
    };


    function fetchdata(){
      fetch("http://localhost:8307/getAll")
      .then(response => response.json())
      .then(data => setUserData(data))
      .then(data => console.log(data))
    }      
     
  return (
    <div className="App">
      <form onSubmit={insertUsers}>
        <b>User ID</b><input type="text" value={userid} onChange={updateUserId} /><br/>
        <b>Email ID</b><input type="text" value={email} onChange={updateEmail}/><br/>
        <b>Password</b><input type="text" value={password} onChange={updatePassword}/><br/>
        <input type="submit" value="Add" />&nbsp;&nbsp;
        <input type="reset" value ="Reset" />

      </form>
      <button value="Update" onClick={updateUsers}>Update</button>&nbsp;&nbsp;
      <button value="Delete" onClick={deleteUsers}>Delete</button>&nbsp;&nbsp;
      <button value="show" onClick={fetchdata}>Show</button>
      <center>
      <ul>
        {
          data.map((item)=>(
            <li key={item.userid}>ID: {item.userid}, email: {item.emailid}</li>
          ))
        }
      </ul>
      </center>
    
    </div>
  );
}
export default App;
/*
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setUserData] = useState([]);
  const [userid, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const updateUserId = (event) => {
    setUserId(event.target.value);
  };

  const updateEmail = (event) => {
    setEmail(event.target.value);
  };

  const updatePassword = (event) => {
    setPassword(event.target.value);
  };

  const insertUsers = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8305/insert', { uid: userid, emailid: email, password: password })
      .then((res) => {
        console.log(res);
        fetchdata();
      });
  };

  const updateUsers = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8306/update', { uid: userid, emailid: email, password: password })
      .then((res) => {
        console.log("User updated");
        fetchdata();
      });
  };

  const deleteUsers = () => {
    axios.delete(`http://localhost:8306/delete?uid=${userid}`)
      .then((res) => {
        console.log(res);
        fetchdata();
      });
  };

  function fetchdata() {
    fetch("http://localhost:8306/getAll")
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .then((data) => console.log(data));
  }

  return (
    <div className="App">
      <form onSubmit={insertUsers}>
        <b>User ID</b><input type="text" value={userid} onChange={updateUserId} /><br />
        <b>Email ID</b><input type="text" value={email} onChange={updateEmail} /><br />
        <b>Password</b><input type="text" value={password} onChange={updatePassword} /><br />
        <button type="submit">Add</button>&nbsp;&nbsp;
        <input type="reset" value="Reset" />
      </form>
      <button onClick={updateUsers}>Update</button>&nbsp;&nbsp;
      <button onClick={deleteUsers}>Delete</button>&nbsp;&nbsp;
      <button onClick={fetchdata}>Show</button>
      <center>
        <ul>
          {
            data.map((item) => (
              <li key={item.userid}>ID: {item.userid}, email: {item.emailid}</li>
            ))
          }
        </ul>
      </center>
    </div>
  );
}

export default App;*/

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [userid, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const updateUserId = (event) => 
  {
    setUserId(event.target.value);
  };

  const updatePassword = (event) => 
  {
    setPassword(event.target.value);
  };

  const updateEmail = (event) => 
  {
    setEmail(event.target.value);
  };

  const insertUser = (event) =>
   {
    event.preventDefault();
    axios.post('http://localhost:3000/insert', { uid: userid, password: password, emailid: email })
      .then((res) => {
        console.log(res);
        fetchData();
      });
  };
  
  const updateuser = () => {
    axios.put(`http://localhost:3000/update`, { uid: userid, password: password, emailid: email })
      .then((res) => {
        console.log(res);
        fetchData();
      });
  };
  const deleteuser = () => {
    axios.delete(`http://localhost:3000/delete?uid=${userid}`)
      .then((res) => {
        console.log(res);
        fetchData();
      });
  };
  const fetchData = () => {
    fetch('http://localhost:3000/getAll')
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <center>
        <form onSubmit={insertUser}>
          <b>User ID</b>
          <input type="text" value={userid} onChange={updateUserId} /><br />
          <b>Password</b>
          <input type="password" value={password} onChange={updatePassword} /><br />
          <b>Email ID</b>
          <input type="email" value={email} onChange={updateEmail} /><br />
          <input type="submit" value="Add" />&nbsp;&nbsp;
          <input type="reset" value="Reset" />&nbsp;&nbsp;
          <input type="button" value="Update" onClick={updateuser} />&nbsp;&nbsp;
          <input type="button" value="Delete" onClick={deleteuser} />&nbsp;&nbsp;
        </form>
      </center>
      <ul>
        {data.map((item) => (
          <li key={item.userid}>
            {item.userid}, {item.password}, {item.emailID}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;