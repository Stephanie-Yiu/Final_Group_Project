import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import About from "./About";
import Games from "./Game";
import Login from "./Login";
import Register from "./Register";
import PostList from "./PostList";

import CreatePost from "./CreatePost";

import NavHeader from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserContextProvider } from "./UserContext";
import PostPage from "./PostPage";
import EditPage from "./EditPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<NavHeader />}>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/games" element={<Games />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            {/* post */}
            <Route path="/post" element={<PostList />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/edit/:id" element={<EditPage />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// {/* <Route
//             path="/create"
//             element={<Create />}
//           /> */}
//           {/* <Route
//             path="/posts/:id"
//             element={<PostDetails />}
//           /> */}
