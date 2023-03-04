import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Postbox.css";
import { Link } from "react-router-dom";
// import { useRef } from "react";

function Postbox() {
  // const icon01 = useRef(null);
  // const icon02 = useRef(null);
  // const icon03 = useRef(null);
  // const icon04 = useRef(null);
  // const icon05 = useRef(null);
  // const title01 = useRef("");
  // const title02 = useRef("");
  // const title03 = useRef("");
  // const title04 = useRef("");
  // const title05 = useRef("");
  // const author01 = useRef("");
  // const author02 = useRef("");
  // const author03 = useRef("");
  // const author04 = useRef("");
  // const author05 = useRef("");
  // const comment01num = useRef(null);
  // const comment02num = useRef(null);
  // const comment03num = useRef(null);
  // const comment04num = useRef(null);
  // const comment05num = useRef(null);
  // const date01 = useRef(null);
  // const date02 = useRef(null);
  // const date03 = useRef(null);
  // const date04 = useRef(null);
  // const date05 = useRef(null);

  return (
    <div
      className="container-fluid text-center"
      style={{ marginBottom: "100px", background: "#000", marginTop: "100px" }}
    >
      <h4 className="d4d4 fs-4 fw-bold my-5 pt-5">{`< Popular Posts />`}🔥</h4>
      <Table
        className="table table-borderless"
        style={{
          borderTop: " #04b616 dashed  1px",
          borderBottom: " #04b616 dashed  1px",
        }}
      >
        <tbody className="d-none d-md-block text-center d-flex flex-column justify-content-center container my-5">
          <tr
            className=" row w-100  align-items-center"
            style={{
              borderBottom: " #04b6163b solid 1px",
            }}
          >
            <td className="col-2 p-md-3 d-none d-md-block ">
              <Link>
                <img alt="" className="icon" />
              </Link>
            </td>
            <td className="text-start col-md-8 px-3 px-sm-5 smallborder">
              <Link className="text-decoration-none">
                <p className="green fs-5 m-0 title d-inline-block">
                  5 Best Coding Programs for Aspiring Programmers
                </p>
              </Link>
              <p className="fw-light d4d4 m-0">- Joanna</p>
            </td>
            <td className="col-2 p-md-3 text-start d-none d-md-block">
              <p className="fw-light d4d4 m-0">Comments: 2k</p>
              <p className="fw-light d4d4">18-02-2023</p>
            </td>
          </tr>
          <tr
            className=" row w-100  align-items-center "
            style={{
              borderBottom: " #04b6163b solid 1px",
            }}
          >
            <td className="col-2 p-md-3 d-none d-md-block ">
              <Link>
                <img alt="" className="icon" />
              </Link>
            </td>
            <td className="text-start col-md-8 px-3 px-sm-5 smallborder">
              <Link className="text-decoration-none">
                <p className="green fs-5 m-0 title d-inline-block">
                  How do hackers pick their targets?
                </p>
              </Link>
              <p className="fw-light d4d4 m-0">- Joanna</p>
            </td>
            <td className="col-2 p-md-3 text-start d-none d-md-block">
              <p className="fw-light d4d4 m-0">Comments: 2k</p>
              <p className="fw-light d4d4">18-02-2023</p>
            </td>
          </tr>
          <tr
            className=" row w-100  align-items-center "
            style={{
              borderBottom: " #04b6163b solid 1px",
            }}
          >
            <td className="col-2 p-md-3 d-none d-md-block ">
              <Link>
                <img alt="" className="icon" />
              </Link>
            </td>
            <td className="text-start col-md-8 px-3 px-sm-5 smallborder">
              <Link className="text-decoration-none">
                <p className="green fs-5 m-0 title d-inline-block">
                  What does a hacker look like?
                </p>
              </Link>
              <p className="fw-light d4d4 m-0">- Joanna</p>
            </td>
            <td className="col-2 p-md-3 text-start d-none d-md-block">
              <p className="fw-light d4d4 m-0">Comments: 2k</p>
              <p className="fw-light d4d4">18-02-2023</p>
            </td>
          </tr>
          <tr
            className=" row w-100  align-items-center "
            style={{
              borderBottom: " #04b6163b solid 1px",
            }}
          >
            <td className="col-2 p-md-3 d-none d-md-block ">
              <Link>
                <img alt="" className="icon" />
              </Link>
            </td>
            <td className="text-start col-md-8 px-3 px-sm-5 smallborder">
              <Link className="text-decoration-none">
                <p className="green fs-5 m-0 title d-inline-block">
                  Empowering Web-Development
                </p>
              </Link>
              <p className="fw-light d4d4 m-0">- Joanna</p>
            </td>
            <td className="col-2 p-md-3 text-start d-none d-md-block">
              <p className="fw-light d4d4 m-0">Comments: 2k</p>
              <p className="fw-light d4d4">18-02-2023</p>
            </td>
          </tr>
          <tr className=" row w-100  align-items-center">
            <td className="col-2 p-md-3 d-none d-md-block ">
              <Link>
                <img alt="" className="icon" />
              </Link>
            </td>
            <td className="text-start col-md-8 px-3 px-sm-5 smallborder">
              <Link className="text-decoration-none">
                <p className="green fs-5 m-0 title d-inline-block">
                  5 Tutorial - An Ultimate Guide for Beginners
                </p>
              </Link>
              <p className="fw-light d4d4 m-0">- Joanna</p>
            </td>
            <td className="col-2 p-md-3 text-start d-none d-md-block">
              <p className="fw-light d4d4 m-0">Comments: 2k</p>
              <p className="fw-light d4d4">18-02-2023</p>
            </td>
          </tr>
        </tbody>
        {/**-------------------------------------------------------------------------------------- */}
        <tbody className="d-block d-md-none text-center d-flex flex-column justify-content-center container my-4">
          <tr
            className=" row w-100 align-items-center "
            style={{
              borderBottom: " #04b6163b solid 1px",
            }}
          >
            <td className="col-md-12 py-4 px-sm-5 ">
              <Link className="text-decoration-none">
                <p className="green fs-5 m-0 title d-inline-block">
                  5 Best Coding Programs for Aspiring Programmers
                </p>
              </Link>
              <p className="fw-light d4d4 m-0">- Joanna</p>
            </td>
          </tr>
          <tr
            className=" row w-100 align-items-center "
            style={{
              borderBottom: " #04b6163b solid 1px",
            }}
          >
            <td className="col-md-12 py-4 px-sm-5 ">
              <Link className="text-decoration-none">
                <p className="green fs-5 m-0 title d-inline-block">
                  5 Best Coding Programs for Aspiring Programmers
                </p>
              </Link>
              <p className="fw-light d4d4 m-0">- Joanna</p>
            </td>
          </tr>
          <tr
            className=" row w-100 align-items-center "
            style={{
              borderBottom: " #04b6163b solid 1px",
            }}
          >
            <td className="col-md-12 py-4 px-sm-5 ">
              <Link className="text-decoration-none">
                <p className="green fs-5 m-0 title d-inline-block">
                  5 Best Coding Programs for Aspiring Programmers
                </p>
              </Link>
              <p className="fw-light d4d4 m-0">- Joanna</p>
            </td>
          </tr>
          <tr
            className=" row w-100 align-items-center "
            style={{
              borderBottom: " #04b6163b solid 1px",
            }}
          >
            <td className="col-md-12 py-4 px-sm-5 ">
              <Link className="text-decoration-none">
                <p className="green fs-5 m-0 title d-inline-block">
                  5 Best Coding Programs for Aspiring Programmers
                </p>
              </Link>
              <p className="fw-light d4d4 m-0">- Joanna</p>
            </td>
          </tr>
          <tr className=" row w-100 align-items-center ">
            <td className="col-md-12 py-4 px-sm-5 ">
              <Link className="text-decoration-none">
                <p className="green fs-5 m-0 title d-inline-block">
                  5 Best Coding Programs for Aspiring Programmers
                </p>
              </Link>
              <p className="fw-light d4d4 m-0">- Joanna</p>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Postbox;
