import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import Post from './Post/src/PostMinLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Post/src/Post.css';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      'http://localhost:4000/createpost',
    ).then(response =>
      response.json().then(posts => {
        console.log(posts);

        setPosts(posts);
      }),
    );
  }, []); // will updated everytime there is a new post and
  //will gather All the post data

  return (
    <div
      className="container-fluid text-center"
      style={{
        marginBottom: '100px',
        background: '#000',
      }}>
      <h1 className="d4d4 fw-bold about-title mt-4 py-5 display-5 ">
        {`< Posts />`}
      </h1>
      {/*Header Nmae*/}
      <div className="row mb-3">
        <div className="col-12">
          <Link
            to="/createpost"
            className="d4d4 text-decoration-none creatpost-link">
            Create Post
          </Link>
        </div>
      </div>
      {/*Div with Create Post Button Nmae*/}

      <Table
        className="table table-borderless"
        style={{
          borderTop: ' #04b616 dashed  1px',
          borderBottom: ' #04b616 dashed  1px',
        }}>
        <tbody className="d-none d-md-block text-center d-flex flex-column justify-content-center container my-5">
          {posts.length > 0 &&
            posts.map(posts => (
              <Post {...posts} /> // Post Component form PostMinLayout.js   {....post}
            ))}
        </tbody>
        <tbody className="d-md-none text-center d-flex flex-column justify-content-center container my-4">
          {posts.length > 0 &&
            posts.map(posts => (
              <Post {...posts} /> // Post Component form PostMinLayout.js   {....post}
            ))}
        </tbody>
      </Table>
    </div>
  );
}
