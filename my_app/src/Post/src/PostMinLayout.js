import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

export default function Post({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
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
          <tbody
            className="
          text-center d-flex flex-column justify-content-center container my-1 posttbody">
            <tr
              className=" row w-100  align-items-center"
              style={{
                borderBottom:
                  ' #04b6163b solid 1px',
              }}>
              <td className="col-2 p-md-3 d-none d-md-block smallborder">
                <Link>
                  <img
                    alt=""
                    className="icon"
                  />
                </Link>
              </td>
              <td className="text-start col-md-8 px-3 px-sm-5 smallborder">
                <Link className="text-decoration-none">
                  <p className="green fs-5 m-0 title d-inline-block">
                    {title}
                  </p>
                </Link>
                <p className="fw-light d4d4 m-0">
                  post.author
                </p>
              </td>
              <td className="col-2 p-md-3 text-start d-none d-md-block">
                <p className="fw-light d4d4 m-0">
                  {summary}
                </p>
                <time className="fw-light d4d4">
                  {createdAt}
                </time>
              </td>
              comment Box
            </tr>
          </tbody>

          {/**---------------------------------mobile--------------------------------------------------- */}
          <tbody
            className="d-block d-md-none text-
           d-flex flex-column justify-content-center 
           container my-2 posttbody">
            <tr
              className=" row w-100 align-items-center "
              style={{
                borderBottom:
                  ' #04b6163b solid 1px',
              }}
              //   key={post.id}
            >
              <td className="col-md-12 py-4 px-sm-5 ">
                <Link
                  className="text-decoration-none"
                  //   to={`/posts/${post.id}`}
                >
                  <p className="green fs-5 m-0 title d-inline-block">
                    post.title mobile
                  </p>
                </Link>
                <p className="fw-light d4d4 m-0">
                  post.author post.currentDate
                  Mobile
                </p>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}
