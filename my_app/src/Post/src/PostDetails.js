import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Loading from "./Loading";
import CloseIcon from "@mui/icons-material/Close";
import Crop75Icon from "@mui/icons-material/Crop75";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import DeleteIcon from "@mui/icons-material/Delete";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const PostDetails = () => {
  const { id } = useParams();
  const {
    data: post,
    error,
    isPending,
  } = useFetch("http://localhost:8000/posts/" + id);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch("http://localhost:8000/posts/" + post.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/post");
    });
  };

  return (
    <div
      className="container-fluid  d4d4 text-center pt-5 mt-2 pb-5"
      style={{ maxWidth: "1000px" }}
    >
      {isPending && (
        <div>
          <Loading />
        </div>
      )}
      {error && <div>{error}</div>}
      {post && (
        <>
          <article className="container">
            <h2 className="fw-bold mb-3">{post.title} </h2>
            <p className="green mb-5">Asked {post.currentDate}</p>
            <div
              className=" text-center position-relative py-1"
              style={{
                border: "#04b616 dashed 2px",
                color: "#04b616",
              }}
            >
              <p className="m-0">
                {"< Written by"}{" "}
                <span className="d4d4 fw-bold">{post.author}</span>
                {" /> "}
                <OverlayTrigger
                  key="right"
                  placement="right"
                  overlay={<Tooltip id="right">Delete Post</Tooltip>}
                >
                  <span className="green bin" onClick={handleClick}>
                    <DeleteIcon />
                  </span>
                </OverlayTrigger>
                <span className="position-absolute end-0 pe-3 d-none d-sm-inline">
                  <HorizontalRuleIcon /> <Crop75Icon /> <CloseIcon />
                </span>
              </p>
            </div>
            <div className="blogcontainer">
              <div className="text-start p-4 postbody">{post.body}</div>
              <p className="text-center"> -END-</p>
            </div>
          </article>
          <div className="container d4d4 mt-5">
            <h2 className="mb-3">Comments</h2>
            <div
              className=" row"
              style={{
                border: "#04b616 solid 3px",
              }}
            >
              <div
                className="col-3 d-none d-md-block"
                style={{
                  borderRight: "#04b616 solid 2px",
                  color: "#04b616",
                }}
              >
                <img alt="icon here" />
              </div>
              <div
                className="col-12 col-md-9 py-2 pb-0 text-start commentbody"
                style={{
                  background: "#d4d4d4",
                  color: "#000",
                  minHeight: "250px",
                }}
              >
                <div className="row h-100 ">
                  <div className="col-12 p-3" style={{ height: "80%" }}>
                    I understand that the property needs to be applied before
                    the element changes. But my doubt is if it needs to be
                    applied also while it is changing.
                  </div>
                  <div
                    className="col-12 ps-4 p-2"
                    style={{
                      color: "#04b616",
                      height: "20%",
                      background: "#000",
                      borderTop: "#04b616 solid 3px",
                    }}
                  >
                    By <span className="d4d4 fw-bold">Joanna</span> 27/02/2022
                  </div>
                </div>
              </div>
            </div>
            <Form>
              <Form.Group className="mb-3 mt-5 pt-5" controlId="comments">
                <Form.Label className=" green">
                  Do you have any opinion?
                </Form.Label>
                <FloatingLabel
                  className="green fw-bold"
                  label="You can leave your comment here:"
                  style={{ color: "#333" }}
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    className="rounded-0 name"
                    style={{
                      background: "#d4d4d4",
                      height: "150px",
                    }}
                  />
                </FloatingLabel>
              </Form.Group>
              <Button type="submit" id="contactbtn" className="py-2 px-5">
                Done
              </Button>
            </Form>
          </div>
        </>
      )}
    </div>
  );
};

export default PostDetails;
