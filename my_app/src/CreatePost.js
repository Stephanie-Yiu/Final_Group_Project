import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};
const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  /////////////////////////////////////////

  async function createNewPost(e) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);

    e.preventDefault();

    const response = await fetch("http://localhost:4000/createpost", {
      method: "POST",
      body: data,
    });
    console.log(await response.json());
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
                />
              </Form.Group>

              <Form.Group className="mb-3 text-start" controlId="formFile">
                <Form.Label className="green fw-bold">
                  Default file :
                </Form.Label>
                <input
                  type="file"
                  onChange={(e) => setFiles(e.target.value)}
                  style={{
                    background: "#d4d4d4",
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3 text-start" controlId="body">
                <Form.Label className="green fw-bold">Content:</Form.Label>
                <ReactQuill
                  value={content}
                  onChange={(newValue) => setContent(newValue)}
                  modules={modules}
                  formats={formats}
                  style={{
                    background: "#d4d4d4",
                    minHeight: "240px",
                  }}
                />
              </Form.Group>

              <Button id="postbtn" type="submit" className="text-align-center">
                Create Post
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
