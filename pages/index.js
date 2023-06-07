import { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '@/components/Post';
import TopBar from '@/components/TopBar';


export default function Home() {
  const [posts, setPosts] = useState([]);

  const handleFormSubmit = () => {
    fetchPosts();
  };
  
  const handleDeletePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    refreshPosts();
  };

  const fetchPosts = async () => {
    try {
      const { data } = await axios.get('/api/posts');
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const refreshPosts = async () => {
    try {
      const { data } = await axios.get('/api/posts');
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    refreshPosts();
  }, []);


  return (
    <main className = 'cork pb-14'>
      <TopBar onFormSubmit = {handleFormSubmit}/>
      <div className = "scrollable flex flex-wrap py-10 justify-center items-start h-full mx-auto">
        {posts.map((post) => (
          <Post post = {post} 
            onDelete = {handleDeletePost}
            key = {post.id}/>
          ))}
      </div>
    </main>
  );
}
