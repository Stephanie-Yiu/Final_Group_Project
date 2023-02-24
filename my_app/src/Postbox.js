import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Postbox.css";

function Postbox() {
  return (
    <div className="postbox">
      <h1>&lt; Popular Posts /&gt; 🔥</h1>

      <Table striped bordered hover size="sm" bg="success">
        <thead>
          <tr>
            <th scope="col">icon</th>
            <th scope="col">post</th>
            <th scope="col">date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Any item</td>
            <td>Add long content to see variable width cell</td>
            <td>Active</td>
          </tr>
          <tr>
            <td>Any item 2</td>
            <td>Add long content to see variable width cell</td>
            <td>Disable</td>
          </tr>
          <tr>
            <td>Any item 3</td>
            <td>Add long content to see variable width cell</td>
            <td>Active</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Postbox;
