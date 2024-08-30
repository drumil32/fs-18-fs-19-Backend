import axios from 'axios';
import './App.css';
import Form from './Form';

function App() {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/users');
      console.log(response.data);
      console.log(response.data[0]._id);
      // const deleteUserResponse = await axios.delete(`http://localhost:4000/deleteUser/${response.data[0]._id}`);
      // console.log(deleteUserResponse.data);
      // const response1 = await axios.post('http://localhost:4000/newUser', { name: "drumil", age: 23, city: "abd" }); // {formData} => {formData:value of formData}
    } catch (error) {
      console.error(error);
    }
  }
  fetchData();
  return (
    <>
      <Form />
    </>
  );
}

export default App;
