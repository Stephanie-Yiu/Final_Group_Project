import { useState } from "react";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Editor from "./Editor";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function CommentForm() {
  const [comment, setComment] = useState("");
  const [redirect, setRedirect] = useState(false);

  const { id } = useParams();

  async function handleSubmit(ev) {
    const data = new FormData();
    data.set("comment", comment);

    // const data = Object.fromEntries(formdata);

    ev.preventDefault();
    const response = await fetch(`http://localhost:4000/post/${id}/comment`, {
      method: "POST",
      credentials: "include",
      body: data,
      // body: JSON.stringify(data),
    });
    //
    if (response.ok) {
      setRedirect(true);
    }
    if (redirect) {
      return <Navigate to={"/post/:id"} />;
    }

    // console.log(JSON.stringify(data));
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <p style={{ Color: "white" }} className="my5 pt-5">
          You can leave comment here:
        </p>
        <Editor
          onChange={setComment}
          value={comment}
          style={{
            background: "#d4d4d4",
            minHeight: "240px",
          }}
        />

        <Button
          type="sumbit "
          id="contactbtn"
          className="mt-3 m-auto text-align-center text-black"
        >
          Sumbit
        </Button>
      </form>
    </Container>
  );
}
