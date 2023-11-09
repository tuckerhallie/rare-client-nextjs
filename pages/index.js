import { getAllPosts } from '../api/postData';

function Home() {
  console.warn(getAllPosts());
  return 'Loading...';
}

export default Home;
