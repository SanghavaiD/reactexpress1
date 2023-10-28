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

  const insertUsers = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/insert', { userid: userid, emailid: email, password: password })
      .then((res) => {console.log(res);
        fetchData();
      });
 
  };
  
  const updateUsers = () => {
    axios.put(`http://localhost:3000/update`, { uid: userid,emailid: email ,password: password})
      .then((res) => {
        console.log(res);
        fetchData();
      });
  };
  const deleteUsers = () => {
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
        <form onSubmit={insertUsers}>
          <b>User ID</b>
          <input type="text" value={userid} onChange={updateUserId} /><br />
          <b>Email ID</b>
          <input type="email" value={email} onChange={updateEmail} /><br />
          <b>Password</b>
          <input type="password" value={password} onChange={updatePassword} /><br />

          <input type="submit" value="Add" onSubmit={insertUsers}/>&nbsp;&nbsp;
          <input type="reset" value="Reset" />&nbsp;&nbsp;
          <input type="button" value="Update" onClick={updateUsers} />&nbsp;&nbsp;
          <input type="button" value="Delete" onClick={deleteUsers} />&nbsp;&nbsp;
        </form>
      </center>
      <ul>
        {data.map((item) => (
          <li key={item.userid}>
            {item.userid}&nbsp;,{item.emailid}&nbsp;, {item.password}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;