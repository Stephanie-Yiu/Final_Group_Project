import {
  useEffect,
  useState,
  useContext,
} from 'react';
import { useParams } from 'react-router-dom';
import { formatISO9075 } from 'date-fns';
import Container from 'react-bootstrap/Container';
import './Postbox.css';

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  //   const {userInfo}=useContext()
  const { id } = useParams();
  //    catch data
  useEffect(() => {
    fetch(
      `http://localhost:4000/post/${id}`,
    ).then(response => {
      response.json().then(postInfo => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  if (!postInfo) return '';

  return (
    <Container className="post-page ">
      <h1 className=" text-light ">
        {postInfo.title}
      </h1>

      <div className="text-light ">
        by {postInfo.author.username}{' '}
        {formatISO9075(
          new Date(postInfo.createdAt),
        )}
      </div>

      <div className="post-page-cover">
        <img
          src={`http://localhost:4000/${postInfo.cover}`}
        />
      </div>
      <div
        style={{ objectFit: 'scale-down' }}
        className="text-light  post-page-content"
        dangerouslySetInnerHTML={{
          __html: postInfo.content,
        }}
      />
    </Container>
  );
}
