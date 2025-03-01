import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/v1/post/')
      .then(response => setPosts(response.data))
      .catch(err => {
        console.error("Error fetching posts:", err);
        setError("Failed to fetch posts. Please try again.");
      });
  }, []);

  return (
    <div className="App">
      <h2>Posts</h2>
      {error && <p className="error-message">{error}</p>}
      {posts.length > 0 ? (
        posts.map((obj, index) => (
          <div key={index} className="post-container">
            <h3>{obj.title}</h3>
            <p>{obj.content}</p>
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
  
}

export default App;

