import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './About';
import Games from './Game';
import Login from './Login';
import Register from './Register';

import CreatePost from './Components/CreatePost';

import NavHeader from './Nav';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Post from './Post/src/Post';
import Create from './Post/src/Create';
import PostDetails from './Post/src/PostDetails';
import { UserContextProvider } from './UserContext';

const root = ReactDOM.createRoot(
  document.getElementById('root'),
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route
            path="/"
            element={<NavHeader />}>
            <Route
              path="/"
              element={<App />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/games"
              element={<Games />}
            />
            <Route
              path="/Login"
              element={<Login />}
            />
            <Route
              path="/Register"
              element={<Register />}
            />
            {/* post */}
            <Route
              path="/post"
              element={<Post />}
            />
            <Route
              path="/create"
              element={<Create />}
            />
            <Route
              path="/posts/:id"
              element={<PostDetails />}
            />
            <Route
              path="/createpost"
              element={<CreatePost />}
            />
          </Route>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
