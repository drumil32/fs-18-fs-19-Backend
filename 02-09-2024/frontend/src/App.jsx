import axios from 'axios';
import React, { useState } from 'react'

const App = () => {
  const [url, setUrl] = useState('');
  const [shortedUrl, setShortedUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/url-shortener', { url });
      console.log(response.data);
      alert(response.data.message);
      setShortedUrl(response.data.link);
    }catch(error){
      alert(error.response.data.message);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name='url'
          type='text'
          placeholder='Please give Url'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <input type="submit" value="Get Shorted Url" />
      </form>
      {shortedUrl && <p>Your shortened URL is: {shortedUrl}</p>}
    </>
  )
}

export default App