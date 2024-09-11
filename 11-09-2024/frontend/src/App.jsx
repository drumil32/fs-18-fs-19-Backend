import React, { useState } from 'react'
import axios from 'axios';

const App = () => {
  const [userName, setUserName] = useState('');
  const [profilePic, setProfilePic] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('userName', userName);
    data.append('profilePic', profilePic);
    try {
      const response = await axios.post('http://localhost:3000/user', data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
        <input type="text" name="userName" value={userName} onChange={(e) => setUserName(e.target.value)} />
        <input type="file" name="profilePic" onChange={(e) => setProfilePic(e.target.files[0])} />
        <input type="submit" value="Submit" />
      </form>
      <img src="http://localhost:3000/profile-picture/drumilLTHOZ.png" alt="" />
    </>
  )
}

export default App