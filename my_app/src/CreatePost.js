import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Editor from "./Editor";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(ev) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);

    ev.preventDefault();
    const response = await
    fetch("http://localhost:4000/createpost", {
      method: "POST",
      // mode: "no-cors",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/post"} />;
  }
  return (
    <div className="container-fluid text-center w-100 mt-4">
      <h4 className="d4d4 fs-4 fw-bold py-3">{`< Create Post />`}</h4>
      <div className="container" style={{ maxWidth: "600px" }}>
        <div className="row">
          <div className="col-12">
            <Form onSubmit={createNewPost}>
              <Form.Group className="mb-3 text-start" controlId="title">
                <Form.Label className="green fw-bold ">Title:</Form.Label>
                <Form.Control
                  type="text"
                  className="rounded-0"
                  style={{
                    background: "#d4d4d4",
                  }}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  maxLength="200"
                />
              </Form.Group>
              <Form.Group className="mb-3 text-start" controlId="title">
                <Form.Label className="green fw-bold ">Summary:</Form.Label>
                <Form.Control
                  type="text"
                  className="rounded-0"
                  style={{
                    background: "#d4d4d4",
                  }}
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  maxLength="500"
                />
              </Form.Group>
              {/*    //////////////////////////////////////
              //////////////////////////////////////
              /////////////////////////////////////*/}

              <input
                type="file"
                size="lg"
                onChange={(e) => setFiles(e.target.files)}
                className="green fw-bold mb-3 text-start"
              />

              {/*    //////////////////////////////////////
              //////////////////////////////////////
              /////////////////////////////////////*/}
              <Form.Group className="mb-3 text-start" controlId="body">
                <Form.Label className="green fw-bold">Content:</Form.Label>
                <Editor
                  onChange={setContent}
                  value={content}
                  style={{
                    background: "#d4d4d4",
                    minHeight: "240px",
                  }}
                />
              </Form.Group>
              <Button
                id="postbtn"
                type="submit"
                className="text-align-center submit"
              >
                Create Post
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
