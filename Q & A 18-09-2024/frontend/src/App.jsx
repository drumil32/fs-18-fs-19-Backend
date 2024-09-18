import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cookies from 'js-cookie'
import axios from 'axios';

function App() {

  const fetchData = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email: 'test@gmail.com'
      });
      console.log(response.data);
      Cookies.set('token', response.data.token);
    } catch (error) {
      console.error(error)
    }
  }
  // fetchData();

  const getProfile = async () => {
    try {
      const response = await axios.get('http://localhost:3000/profile', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      });
      // axios.post('http://localhost:3000/update-profile', {
      //   email, password
      // }, {
      //   headers: {
      //     Authorization: `Bearer ${Cookies.get('token')}`
      //   }
      // })
      console.log(response.data);
    } catch (error) {
      console.error(error)
    }
  }
  const [email, setEmail] = useState('');
  const login = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', { email });
      Cookies.set('token', response.data.token);
    } catch (error) {
      console.error(error.response.data.message)
    }
  }

  const addMarks = async () => {
    try {
      const response = await axios.post('http://localhost:3000/add-marks', {}, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data.message)
    }
  }

  const getMarks = async () => {
    try {
      const response = await axios.get('http://localhost:3000/get-marks', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data.message)
    }
  }

  const [count, setCount] = useState(0)

  return (
    <>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={getMarks}>
        get Marks
      </button>
      <button onClick={addMarks}>
        Add marks
      </button>
      <button onClick={login}>
        Login
      </button>
    </>
  )
}

export default App
