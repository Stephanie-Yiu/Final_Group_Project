import { useState } from 'react';
import { Navigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function handleLogin(ev) {
    ev.preventDefault();
    const response = await fetch(
      'http://localhost:4000/login',
      {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          'content-type': 'application/json',
        },
        credentials: 'include',
      },
    );

    if (response.ok) {
      setRedirect(true);
    } else {
      alert('Wrong Email or password');
    }
  }

  if (redirect) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-outline mb-4">
          <input
            name="email"
            value={email}
            onChange={e =>
              setEmail(e.target.value)
            }
            type="email"
            id="form3Example3cg"
            className="form-control form-control-lg"
          />
          <label
            className="form-lable"
            htmlFor="form3Example3cg">
            Your Email
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            name="password"
            value={password}
            onChange={e =>
              setPassword(e.target.value)
            }
            type="password"
            id="form3Example4cg"
            className="form-control form-control-lg"
          />
          <label
            className="form-lable"
            htmlFor="form3Example4cg">
            Password
          </label>
        </div>

        <div>
          <button type="submit">Login</button>
        </div>

        <p>No account?</p>
        <a href="/Register">
          <u>Register here</u>
        </a>
      </form>
    </div>
  );
}

export default Login;
