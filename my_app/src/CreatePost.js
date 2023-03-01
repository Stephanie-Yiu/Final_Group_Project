import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CreatePost() {
con




















  return (
    <div className="container-fluid text-center w-100 mt-4">
      <h4 className="d4d4 fs-4 fw-bold py-3">{`< Create Post />`}</h4>
      <div
        className="container"
        style={{ maxWidth: '600px' }}>
        <div className="row">
          <div className="col-12">
            <Form>
              {/*onSubmit={handleSubmit}*/}
              <Form.Group
                className="mb-3 text-start"
                controlId="title">
                <Form.Label className="green fw-bold ">
                  Title:
                </Form.Label>
                <Form.Control
                  type="text"
                  className="rounded-0"
                  style={{
                    background: '#d4d4d4',
                  }}
                />
              </Form.Group>

              <Form.Group
                className="mb-3 text-start"
                controlId="formFile">
                <Form.Label className="green fw-bold">
                  Default Image file :
                </Form.Label>
                <Form.Control type="file" />
              </Form.Group>

              <Form.Group
                className="mb-3 text-start"
                controlId="body">
                <Form.Label className="green fw-bold">
                  body:{' '}
                </Form.Label>

                <ReactQuill
                  theme="snow"
                  style={{
                    background: '#d4d4d4',
                  }}
                  type="body"
                />
              </Form.Group>

              <Button
                id="postbtn"
                type="submit"
                className="text-align-center">
                Create Post
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
