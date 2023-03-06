import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import "./Post/src/Post.css";
import { UserContext } from "./UserContext";
import CommentForm from "./CommentForm";
import Comment from "./Post/src/commetMinilayout";
import CloseIcon from "@mui/icons-material/Close";
import Crop75Icon from "@mui/icons-material/Crop75";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Container from "react-bootstrap/Container";

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();

  const [comments, setComments] = useState([]); //set all the comments by useParmas()

  //    catch data
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
        // console.log(postInfo._id);
      });
    });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}/comment`).then((response) => {
      response.json().then((comments) => {
        setComments(comments);
      });
    });
  }, []);

  if (!postInfo) return "";

  return (
    <Container className="post-page ">
      <div
        className="container-fluid  d4d4 text-center pt-5 mt-2 pb-5"
        style={{ maxWidth: "1000px" }}
      >
        <article className="artcontent">
          <h2 className="fw-bold mb-3">{postInfo.title}</h2>
          <p className="green mb-5">
            Asked {formatISO9075(new Date(postInfo.createdAt))}
            <br />
            {userInfo.id === postInfo.author._id && (
              <OverlayTrigger
                key="right"
                placement="right"
                overlay={<Tooltip id="right">Edit This Post</Tooltip>}
              >
                <span className="edit">
                  <Link
                    to={`/edit/${postInfo._id}`}
                    style={{ color: "rgb(199, 199, 0)" }}
                    className="fw-bold text-decoration-none edittext"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 px-1 "
                      style={{ height: "20px", color: "rgb(199, 199, 0)" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                    Edit
                  </Link>
                </span>
              </OverlayTrigger>
            )}
          </p>
          <div
            className=" text-center position-relative py-1"
            style={{
              border: "#04b616 dashed 2px",
              color: "#04b616",
            }}
          >
            <p className="m-0">
              {"< Written by"}{" "}
              <span className="d4d4 fw-bold">{postInfo.author.username}</span>
              {" /> "}
              <span className="position-absolute end-0 pe-3 d-none d-sm-inline">
                <HorizontalRuleIcon /> <Crop75Icon /> <CloseIcon />
              </span>
            </p>
          </div>
          <div className="blogcontainer">
            <div
              className="text-start p-4 postbody"
              dangerouslySetInnerHTML={{
                __html: postInfo.content,
              }}
            ></div>
            <p className="text-center"> -END-</p>
          </div>
        </article>
        <h4 style={{ Color: "white" }} className="mt-5 pt-5 mb-3">
          Comment
        </h4>
        <div>
          {comments.length > 0 &&
            comments
              .filter((comment) => comment.postId === id)
              .map((comments) => (
                <Comment {...comments} /> // map out the comments
              ))}
        </div>
        <CommentForm />
      </div>
    </Container>
  );
}
