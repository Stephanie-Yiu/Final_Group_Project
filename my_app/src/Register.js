import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
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
    <div className="container-fluid text-start green logincontainer w-50 py-5">
      <h2 className="d-flex justify-content-center p-3 fw-bold">
        Create an account
      </h2>

      <form onSubmit={handleSubmitRegister}>
        <div className="form-outline mb-4">
          <input
            name="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="form3Example1cg"
            className="form-control form-control-lg"
          />
          <label className="form-lable fw-bold" htmlFor="form3Example1cg">
            Your Name
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="form3Example3cg"
            className="form-control form-control-lg"
          />
          <label className="form-lable fw-bold" htmlFor="form3Example3cg">
            Your Email
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="form3Example4cg"
            className="form-control form-control-lg"
          />
          <label className="form-lable fw-bold" htmlFor="form3Example4cg">
            Password
          </label>
        </div>

        <div>
          <Button className="bg-dark green fw-bold p-1 border border-info rounded">
            Register
          </Button>
        </div>

        <div className=" d-flex">
          <p>Have already an account?</p>
          <Link
            to="/Login"
            className="d4d4 register_link ms-2 fw-bold text-decoration-none"
          >
            Login here
          </Link>
        </div>
      </form>
    </div>
  );
}
