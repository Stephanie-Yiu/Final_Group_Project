import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { formatISO9075 } from "date-fns";
import { useState } from "react";
import "./Post.css";
import defaultimg from "./default.jpg";
export default function Post({
  _id,
  title,
  cover,
  summary,

  createdAt,
  author,
}) {
  const [imgSrc, setImgSrc] = useState(`http://localhost:4000/${cover}`);
  return (
    <>
      <tr
        className=" row w-100 align-items-center d-none d-md-flex"
        style={{
          borderBottom: " #04b6163b solid 1px",
        }}
      >
        <td
          className="col-2 p-md-3
           d-none d-md-block"
        >
          <Link to={`/post/${_id}`}>
            <img
              src={imgSrc}
              onError={() => setImgSrc(defaultimg)}
              className="icon"
              alt="cover"
            />
          </Link>
        </td>
        <td className="text-start col-md-8 px-3 px-sm-5 py-3 smallborder">
          <Link to={`/post/${_id}`} className="text-decoration-none">
            <p className="green fs-5 m-0 title d-inline-block">{title}</p>
          </Link>
          <p
            className="fw-light m-0 "
            style={{
              color: "#257d4b",
              maxWidth: "100%",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {summary}
          </p>
          <p className="fw-light d4d4 m-0">- {author.username}</p>
        </td>

        <td className="col-2 p-md-3 text-start ">
          <p className="fw-light d4d4 m-0">Comments: 2k</p>
          <p className="fw-light d4d4">{formatISO9075(new Date(createdAt))}</p>
        </td>
      </tr>
      {/**-------------------------------------------------------------------------------- */}
      <tr
        className="row w-100 align-items-center d-md-none "
        style={{
          borderBottom: " #04b6163b solid 1px",
          minWidth: "0",
        }}
      >
        <td className="col-12 py-4 px-2 d-block">
          <Link to={`/post/${_id}`} className="text-decoration-none">
            <p className="green fs-5 m-0 title d-inline-block">{title}</p>
          </Link>
          <p className="fw-light d4d4 m-0">- {author.username} </p>
          <p className="fw-light d4d4">{formatISO9075(new Date(createdAt))}</p>
        </td>
      </tr>
    </>
  );
}
