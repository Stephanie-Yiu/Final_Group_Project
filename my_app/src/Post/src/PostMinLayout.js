import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';

export default function Post({
  title,
  summary,
  cover,
  content,
}) {
  return (
    <>
      <div
        className="container-fluid text-center"
        style={{
          marginBottom: '100px',
          background: '#000',
        }}>
        <Table
          className="table table-borderless"
          style={{
            borderTop: ' #04B616 dashed  1px',
            borderBottom: ' #04B616 dashed  1px',
          }}>
          <tbody className="d-none d-md-block text-center d-flex flex-column justify-content-center container my-1 posttbody">
            <tr
              className=" row w-100  align-items-center"
              style={{
                borderBottom:
                  ' #04b6163b solid 1px',
              }}
              key={post.id}>
              <td className="col-2 p-md-3 d-none d-md-block smallborder">
                <Link>
                  <img
                    alt=""
                    className="icon"
                  />
                </Link>
              </td>
              <td className="text-start col-md-8 px-3 px-sm-5 smallborder">
                <Link
                  className="text-decoration-none"
                  to={`/posts/${post.id}`}>
                  <p className="green fs-5 m-0 title d-inline-block">
                    {post.title}
                  </p>
                </Link>
                <p className="fw-light d4d4 m-0">
                  - {post.author}
                </p>
              </td>
              <td className="col-2 p-md-3 text-start d-none d-md-block">
                <p className="fw-light d4d4 m-0">Comments: </p>
                <p className="fw-light d4d4">{post.currentDate}</p>
            </td> comment Box
            </tr>
          </tbody>
         
         
         
         
         
         
          {/**---------------------------------mobile--------------------------------------------------- */}
          <tbody className="d-block d-md-none text-center d-flex flex-column justify-content-center container my-2 posttbody">
            <tr
              className=" row w-100 align-items-center "
              style={{
                borderBottom:
                  ' #04b6163b solid 1px',
              }}
              key={post.id}>
              <td className="col-md-12 py-4 px-sm-5 ">
                <Link
                  className="text-decoration-none"
                  to={`/posts/${post.id}`}>
                  <p className="green fs-5 m-0 title d-inline-block">
                    {post.title}
                  </p>
                </Link>
                <p className="fw-light d4d4 m-0">
                  - {post.author}{' '}
                  {post.currentDate}
                </p>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}
