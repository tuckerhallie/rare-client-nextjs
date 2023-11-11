import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import PostCard from '../components/postCard';
import { getAllPosts } from '../api/postData';

export default function Home() {
  const [posts, setPosts] = useState([]);

  const getAllThePosts = () => {
    getAllPosts().then(setPosts);
  };

  useEffect(() => {
    getAllThePosts();
  }, []);

  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <div className="text-center my-4">
        <div id="home-cards" className="d-flex flex-wrap">
          {posts.map((post) => (
            <PostCard key={post.id} postObj={post} onUpdate={getAllThePosts} />
          ))}
        </div>
      </div>
    </>
  );
}
