import { useContext, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";
import { UserContext } from "./UserContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  async function handleLogin(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert("wrong credentials");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="container-fluid text-start green logincontainer">
      <h1 className="d4d4 fw-bold about-title text-center mt-5 py-5 display-5 ">
        {"< LogIn />"}
      </h1>
      <div className="container" style={{ maxWidth: "500px" }}>
        <Form onSubmit={handleLogin} style={{ maxWidth: "100%" }}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label className="green fw-bold">Your Email </Form.Label>
            <Form.Control
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="rounded-0 name"
              style={{ background: "#d4d4d4" }}
              required
            />
          </Form.Group>

          <Form.Group className="my-5" controlId="password">
            <Form.Label className="green fw-bold">Password </Form.Label>
            <Form.Control
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="rounded-0 name"
              style={{ background: "#d4d4d4" }}
              required
            />
          </Form.Group>

          <Button type="submit" id="contactbtn" className="py-2 px-5">
            Login
          </Button>
          <p className="mt-5 text-center">
            No account?{" "}
            <Link
              to="/Register"
              className="d4d4 register_link ms-2 fw-bold text-decoration-none"
            >
              Register here
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
}

export default Login;
