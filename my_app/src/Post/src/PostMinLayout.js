import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { formatISO9075 } from 'date-fns';

export default function Post({
  _id,
  title,
  cover,
  summary,

  createdAt,
  author,
}) {
  return (
    <>
      <div
        className="container-fluid text-center text-wrap"
        style={{
          marginBottom: '100px',
          background: '#000',
        }}>
        <tr
          className=" row w-100  align-items-center"
          style={{
            borderBottom: ' #04b6163b solid 1px',
          }}>
          <td className="col-2 p-md-3
           d-none d-md-block smallborder">
            <Link to={`/post/${_id}`}>
              <img
                src={`http://localhost:4000/${cover}`}
                className="icon"
              />
            </Link>
          </td>
          <td className="text-start col-md-8 px-3 px-sm-5 smallborder">
            <Link
              to={`/post/${_id}`}
              className="text-decoration-none">
              <h3
                className="green 
              fs-2 m-0 title d-inline-block "
                style={{
                  wordBreak: 'break-word',
                }}>
                {title}
              </h3>
            </Link>
            <p
              className="fw-light d4d4 m-0"
              style={{
                color: '#257d4b',
                wordBreak: 'break-word',
              }}>
              {summary}
            </p>
            <p
              className="fw-light d4d4 m-0"
              style={{
                color: '#9300fe',
              }}>
              setPost.({author.username})
            </p>
          </td>
          <td
            className="col-2 p-md-3 text-start 
          d-none d-md-block">
            <p className="fw-light d4d4 m-0">
              Comments: 2k
            </p>
            <p
              className="fw-light d4d4"
              style={{
                color: '#f5ec8c',
              }}>
              {formatISO9075(new Date(createdAt))}
            </p>
          </td>
        </tr>
      </div>
    </>
  );
}
