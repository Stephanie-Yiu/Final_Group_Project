import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CommentForm() {


  const [comment, setComment] = useState('');
  const postId = useParams();
  const [currentPost, setCurrentPost] =
    useState('');

  async function handleSubmit(ev) {
    const formdata = new FormData();
    formdata.set('comment', comment);
    formdata.set(' postId', postId.id);
    const data = Object.fromEntries(formdata);
    setCurrentPost(postId.id);
    ev.preventDefault();
    await fetch(
      `http://localhost:4000/post/${currentPost}/comment`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );

    // console.log(JSON.stringify(data));
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h3 style={{ Color: 'white' }}>
          Comment
        </h3>
        <textarea
          type="comment"
          value={comment}
          onChange={e =>
            setComment(e.target.value)
          }></textarea>
        <button type="sumbit">Sumbit</button>
      </form>
    </Container>
  );
}
