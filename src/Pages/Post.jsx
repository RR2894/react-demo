import React, { useState } from 'react';
import postsData from '../assets/db.json';

function Post({ post, onUpdate }) {
  const handleTogglePublish = () => {
    onUpdate(post.id, !post.published);
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Published: {post.published ? 'Yes' : 'No'}</p>
      <button onClick={handleTogglePublish}>
        {post.published ? 'Unpublish' : 'Publish'}
      </button>
    </div>
  );
}

function App() {
  const [posts, setPosts] = useState(postsData.posts);

  const handleUpdatePost = (postId, newPublishedStatus) => {
    const updatedPosts = posts.map(post =>
      post.id === postId ? { ...post, published: newPublishedStatus } : post
    );
    setPosts(updatedPosts);
  };

  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => (
        <Post key={post.id} post={post} onUpdate={handleUpdatePost} />
      ))}
    </div>
  );
}

export default App;