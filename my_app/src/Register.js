import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
// import fetch from 'node-fetch'
// import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmitRegister(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
        email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (response.status === 200) {
      alert("registeration  successful");
    } else {
      alert("registeration failed");
    }
  }

  return (
    <div className="container-fluid text-start green logincontainer">
      <h1 className="d4d4 fw-bold about-title text-center mt-5 py-5 display-5 ">
        {"< Register />"}
      </h1>
      <div className="container" style={{ maxWidth: "500px" }}>
        <Form onSubmit={handleSubmitRegister} style={{ maxWidth: "100%" }}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label className="green fw-bold">Your Name</Form.Label>
            <Form.Control
              name="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="rounded-0 name"
              style={{ background: "#d4d4d4" }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label className="green fw-bold">Your Email</Form.Label>
            <Form.Control
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="rounded-0 name"
              style={{ background: "#d4d4d4" }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label className="green fw-bold">Password</Form.Label>
            <Form.Control
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="rounded-0 name"
              style={{ background: "#d4d4d4" }}
            />
          </Form.Group>

          <Button type="submit" id="contactbtn" className="py-2 px-5">
            Login
          </Button>
          <p className="mt-5 text-center">
            Have already an account?
            <Link
              to="/Login"
              className="d4d4 register_link ms-2 fw-bold text-decoration-none"
            >
              Login here
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
}
