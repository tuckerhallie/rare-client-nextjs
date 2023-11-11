import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
// import { useRouter } from 'next/router';

function PostCard({ postObj }) {
  // const { user } = useAuth();
  // const router = useRouter();

  return (
    <Card className="post-card" style={{ width: '18rem', margin: '10px' }}>
      <Card.Body className="post-content" style={{ height: '250px' }}>
        {postObj.title} {postObj.publication_date} {postObj.content} {postObj.username}
      </Card.Body>
    </Card>

  );
}

PostCard.propTypes = {
  postObj: PropTypes.shape({
    title: PropTypes.string,
    publication_date: PropTypes.string,
    content: PropTypes.string,
    username: PropTypes.string,
  }).isRequired,
};

export default PostCard;
