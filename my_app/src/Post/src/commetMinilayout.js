import "bootstrap/dist/css/bootstrap.min.css";
import { formatISO9075 } from "date-fns";
import "./Post.css";
export default function Comment({ comment, createdAt, author }) {
  // const [commentInfo, setCommentInfo] =useState(null);

  return (
    <>
      <div
        className="row m-0 p-0 my-5 text-start"
        style={{
          minHeight: "100px",
          background: "#d4d4d4",
        }}
      >
        <div
          className="col-12 text-black p-3 commentcontent "
          style={{ height: "80px", whiteSpace: "break-spaces" }}
          dangerouslySetInnerHTML={{
            __html: comment,
          }}
        ></div>
        <div
          className="col-12 bg-black green py-1"
          style={{ height: "20px", borderTop: "3px solid #04b6168d" }}
        >
          BY <span className="d4d4 fw-bold">{author} </span>
          {formatISO9075(new Date(createdAt))}
        </div>
      </div>
    </>
  );
}
