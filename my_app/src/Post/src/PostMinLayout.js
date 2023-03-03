import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Post({
  _id,
  title,
  cover,
  content,
  createdAt,
  author,
}) {
  return (
    <>
      <div
        className="container-fluid text-center text-wrap"
        style={{
          marginBottom: "100px",
          background: "#000",
        }}
      >
        <tr
          className=" row w-100  align-items-center"
          style={{
            borderBottom: " #04b6163b solid 1px",
          }}
        >
          <td className="col-2 p-md-3 d-none d-md-block smallborder">
            <Link to={`/post/${_id}`}>
              <img alt="" className="icon" />
            </Link>
          </td>
          <td className="text-start col-md-8 px-3 px-sm-5 smallborder">
            <Link to={`/post/${_id}`} className="text-decoration-none">
              <p
                className="green 
              fs-5 m-0 title d-inline-block"
                style={{
                  wordBreak: "break-word",
                }}
              >
                {title}
              </p>
            </Link>
            <p className="fw-light d4d4 m-0">- by ...</p>
          </td>
          <td
            className="col-2 p-md-3 text-start 
          d-none d-md-block"
          >
            <p className="fw-light d4d4 m-0">Comments: 2k</p>
            <p className="fw-light d4d4">{createdAt}</p>
          </td>
        </tr>
      </div>
    </>
  );
}
