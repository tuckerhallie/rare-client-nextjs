import Link from 'next/link';
import { Button } from 'react-bootstrap';

function Home() {
  return (
    <Link href="/posts/new" passHref>
      <Button style={{ backgroundColor: '#023e8a', marginBottom: '30px', marginTop: '20px' }}>Create Post</Button>
    </Link>
  );
}

export default Home;
