import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import "./Contact.css";

function Contact() {
  return (
    <div
      className="container-fluid text-center w-100 contact"
      style={{ height: "650px", marginTop: "100px" }}
    >
      <h4 className="d4d4 fs-4 fw-bold my-5 pt-5">{`< Contact Us />`}</h4>
      <div className="container" style={{ maxWidth: "600px" }}>
        <div className="row">
          <div className="col-12">
            <Form style={{ maxWidth: "100%" }}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="green fw-bold">
                  Email address{" "}
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  className="rounded-0 email"
                  style={{ background: "#d4d4d4" }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="green fw-bold">Message </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={10}
                  className="rounded-0 msg"
                  style={{ background: "#d4d4d4" }}
                />
              </Form.Group>
              <Button type="submit" id="contactbtn">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
