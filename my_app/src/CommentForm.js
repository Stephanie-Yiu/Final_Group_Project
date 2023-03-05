import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Editor from './Editor';

export default function CommentForm() {
  const [comment, setComment] = useState('');
  const [redirect, setRedirect] = useState(false);

  const { id } = useParams();

  async function handleSubmit(ev) {
    const data = new FormData();
    data.set('comment', comment);

    // const data = Object.fromEntries(formdata);

    ev.preventDefault();
    const response = await fetch(
      `http://localhost:4000/post/${id}/comment`,
      {
        method: 'POST',
        credentials: 'include',
        body: data,
        // body: JSON.stringify(data),
      },

    )
      //  
    if (response.ok) {
 
      setRedirect(true);
    }
    if (redirect) {
      return <Navigate to={'/post/:id'} />;
    }

    // console.log(JSON.stringify(data));
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h3 style={{ Color: 'white' }}>
          Comment
        </h3>
        <Editor
          onChange={setComment}
          value={comment}
          style={{
            background: '#d4d4d4',
            minHeight: '240px',
          }}
        />

        <button type="sumbit">Sumbit</button>
      </form>
    </Container>
  );
}
