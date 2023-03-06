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
          style={{ minHeight: "80px", whiteSpace: "break-spaces" }}
          dangerouslySetInnerHTML={{
            __html: comment,
          }}
        ></div>
        <div
          className="col-12 bg-black green py-1"
          style={{ minHeight: "20px", borderTop: "3px solid #04b6168d" }}
        >
          BY <span className="d4d4 fw-bold">{author} </span>
          {formatISO9075(new Date(createdAt))}
        </div>
      </div>
    </>
  );
}

// <tr
// className=" row w-100 align-items-center d-none d-md-flex"
// style={{
//   borderBottom: ' #04b6163b solid 1px',
// }}>
// <td className="text-start col-md-8 px-3 px-sm-5 py-3 smallborder">
//   <div
//     style={{ objectFit: 'scale-down' }}
//     className="text-light  post-page-content"
//     dangerouslySetInnerHTML={{
//       __html: comment,
//     }}
//   />

//   <p className="fw-light d4d4">
//     {author}
//   </p>
// </td>

// <td className="col-2 p-md-3 text-start ">
//   <p className="fw-light d4d4">
//     {formatISO9075(new Date(createdAt))}
//   </p>
// </td>
// </tr>
// {/**-------------------------------------------------------------------------------- */}
// <tr
// className="row w-100 align-items-center d-md-none "
// style={{
//   borderBottom: ' #04b6163b solid 1px',
//   minWidth: '0',
// }}>
// <td className="col-12 py-4 px-2 d-block">
//   <div
//     style={{ objectFit: 'scale-down' }}
//     className="text-light  post-page-content"
//     dangerouslySetInnerHTML={{
//       __html: comment,
//     }}
//   />
//   <p className="fw-light d4d4 m-0">
//     {author}
//   </p>
//   <p className="fw-light d4d4">
//     {formatISO9075(new Date(createdAt))}
//   </p>
// </td>
// </tr>
