import Home from "./Home";
import "./Post.css";
import { Route } from "react-router-dom";

const Postpage = () => {
  return (
    <div className="Postpage">
      <div className="content">
        <Route>
        <Home />
        </Route>
      </div>
    </div>
  );
};

export default Postpage;
