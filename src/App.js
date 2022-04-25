import React from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Navbar from './components/navabar/Navbar'
import EditPost from './components/posts/EditPost'
import Posts from './components/posts/Posts'
import CreatePost from './components/posts/CreatePost';
import DeletePost from './components/posts/DeletePost';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/edit-post/:id" element={<EditPost />} />
        <Route path="/delete-post/:id" element={<DeletePost />} />
      </Routes>
    </Router>
  );
}

export default App
