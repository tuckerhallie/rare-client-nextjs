import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
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
      <div className="center-container">
        <Link href="/posts/new" passHref>
          <Button style={{ backgroundColor: '#023e8a', marginBottom: '30px', marginTop: '20px' }}>Create Post</Button>
        </Link>
      </div>
      <div className="homepage-posts">
        <div id="home-cards" className="d-flex flex-wrap">
          {posts.map((post) => (
            <div className="post-container" key={post.id}>
              <PostCard postObj={post} onUpdate={getAllThePosts} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
