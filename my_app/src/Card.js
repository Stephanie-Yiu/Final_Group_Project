import Card from "react-bootstrap/Card";
import card01 from "./img/card01.png";
import card02 from "./img/card02.png";
import card03 from "./img/card03.png";
import card04 from "./img/card04.png";
import card05 from "./img/card05.png";
import card06 from "./img/card06.png";
import { Link } from "react-router-dom";
import "./Card.css";

function Cards() {
  return (
    <div className="container my-5 text-center">
      <h4 className="d4d4 fs-4 fw-bold">{"< Article />"}</h4>
      <p className="d4d4 my-3 fw-light">Article about Web technology</p>
      <div className="row">
        <div className="col-12 col-md-4 my-3 d-flex justify-content-center">
          <Card
            style={{
              width: "100%",
              maxWidth: "20rem",
              border: "#04b616 solid 1px",
            }}
            bg="black"
            className="rounded-0 mb-4 h-100"
          >
            <div className="card-img-container">
              <Card.Img
                variant="top"
                src={card01}
                className="rounded-0 card-image"
                style={{
                  maxHeight: "150px",
                  objectFit: "cover",
                  transition: "all 0.2s",
                }}
              />
            </div>
            <Card.Body style={{ borderTop: "#04b616 solid 3px" }}>
              <Link
                to={`https://netnordic.com/what-we-do/multi-cloud-application-enablement/ai-and-machine-learning/`}
                className="text-decoration-none"
                target="_blank"
              >
                <Card.Title className="green fw-bold fs-4 my-4 cardlink">
                  AI and Machine Learning
                </Card.Title>
              </Link>
              <Card.Text className="d4d4 fw-light">
                There are more gains to be made with AI and machine learning,
                right now! We can support your journey into the future with
                everything...
              </Card.Text>
              <p className="mt-3 fs-6 fw-bold text-light">From Netnordic</p>
            </Card.Body>
          </Card>
        </div>

        <div className="col-12 col-md-4 my-3 d-flex justify-content-center">
          <Card
            style={{
              width: "100%",
              maxWidth: "20rem",
              border: "#04b616 solid 1px",
            }}
            bg="black"
            className="rounded-0 mb-4 h-100"
          >
            <div className="card-img-container">
              <Card.Img
                variant="top"
                src={card02}
                className="rounded-0 card-image"
                style={{
                  maxHeight: "150px",
                  objectFit: "cover",
                  transition: "all 0.2s",
                }}
              />
            </div>
            <Card.Body style={{ borderTop: "#04b616 solid 3px" }}>
              <Link
                to={`https://sphero.com/blogs/news/types-of-coding-languages`}
                className="text-decoration-none"
                target="_blank"
              >
                <Card.Title className="green fw-bold fs-4 my-4 cardlink">
                  Types of Coding Languages Guide
                </Card.Title>
              </Link>
              <Card.Text className="d4d4 fw-light">
                With hundreds of coding languages in existence, it can feel
                overwhelming to break into the world of computer programming ...
              </Card.Text>
              <p className="mt-3 fs-6 fw-bold text-light">From Sphero.com</p>
            </Card.Body>
          </Card>
        </div>

        <div className="col-12 col-md-4 my-3 d-flex justify-content-center">
          <Card
            style={{
              width: "100%",
              maxWidth: "20rem",
              border: "#04b616 solid 1px",
            }}
            bg="black"
            className="rounded-0 mb-4 h-100"
          >
            <div className="card-img-container">
              <Card.Img
                variant="top"
                src={card03}
                className="rounded-0 card-image"
                style={{
                  maxHeight: "150px",
                  objectFit: "cover",
                  transition: "all 0.2s",
                }}
              />
            </div>
            <Card.Body style={{ borderTop: "#04b616 solid 3px" }}>
              <Link
                to={`https://www.create-learn.us/blog/best-coding-games-for-kids/`}
                className="text-decoration-none"
                target="_blank"
              >
                <Card.Title className="green fw-bold fs-4 my-4 cardlink">
                  Best Coding Games for Kids
                </Card.Title>
              </Link>
              <Card.Text className="d4d4 fw-light">
                Learning to code will be challenging for everyone, but a growth
                mindset and having fun are the keys to building habits of ...
              </Card.Text>
              <p className="mt-3 fs-6 fw-bold text-light">
                From Create & Learn
              </p>
            </Card.Body>
          </Card>
        </div>

        <div className="col-12 col-md-4 my-3 d-flex justify-content-center">
          <Card
            style={{
              width: "100%",
              maxWidth: "20rem",
              border: "#04b616 solid 1px",
            }}
            bg="black"
            className="rounded-0 mb-4 h-100"
          >
            <div className="card-img-container">
              <Card.Img
                variant="top"
                src={card04}
                className="rounded-0 card-image"
                style={{
                  maxHeight: "150px",
                  objectFit: "cover",
                  transition: "all 0.2s",
                }}
              />
            </div>
            <Card.Body style={{ borderTop: "#04b616 solid 3px" }}>
              <Link
                to={`https://www.codewizardshq.com/coding-apps-for-kids/`}
                className="text-decoration-none"
                target="_blank"
              >
                <Card.Title className="green fw-bold fs-4 my-4 cardlink">
                  25 Best Coding Apps for Kids
                </Card.Title>
              </Link>
              <Card.Text className="d4d4 fw-light">
                As coding becomes a crucial element of childhood education,
                parents are looking for different ways to reinforce coding
                concepts...
              </Card.Text>
              <p className="mt-3 fs-6 fw-bold text-light">From CodeWizardsHQ</p>
            </Card.Body>
          </Card>
        </div>

        <div className="col-12 col-md-4 my-3 d-flex justify-content-center">
          <Card
            style={{
              width: "100%",
              maxWidth: "20rem",
              border: "#04b616 solid 1px",
            }}
            bg="black"
            className="rounded-0 mb-4 h-100"
          >
            <div className="card-img-container">
              <Card.Img
                variant="top"
                src={card05}
                className="rounded-0 card-image"
                style={{
                  maxHeight: "150px",
                  objectFit: "cover",
                  transition: "all 0.2s",
                }}
              />
            </div>
            <Card.Body style={{ borderTop: "#04b616 solid 3px" }}>
              <Link
                to={`https://richardsondx.medium.com/where-to-start-if-you-don-t-know-anything-about-web-development-and-coding-ac3374b85b94`}
                className="text-decoration-none"
                target="_blank"
              >
                <Card.Title className="green fw-bold fs-4 my-4 cardlink">
                  Where to learn HTML and CSS and build your first website
                </Card.Title>
              </Link>
              <Card.Text className="d4d4 fw-light">
                I’ve been receiving a lot of emails from readers and some of my
                followers about the subject. Although they found my article “How
                ...
              </Card.Text>
              <p className="mt-3 fs-6 fw-bold text-light">From Medium</p>
            </Card.Body>
          </Card>
        </div>

        <div className="col-12 col-md-4 my-3 d-flex justify-content-center">
          <Card
            style={{
              width: "100%",
              maxWidth: "20rem",
              border: "#04b616 solid 1px",
            }}
            bg="black"
            className="rounded-0 mb-5 h-100"
          >
            <div className="card-img-container">
              <Card.Img
                variant="top"
                src={card06}
                className="rounded-0 card-image"
                style={{
                  maxHeight: "150px",
                  objectFit: "cover",
                  transition: "all 0.2s",
                }}
              />
            </div>
            <Card.Body style={{ borderTop: "#04b616 solid 3px" }}>
              <Link
                to={`https://mediablog.prnewswire.com/2022/07/06/coding-for-journalists/`}
                className="text-decoration-none"
                target="_blank"
              >
                <Card.Title className="green fw-bold fs-4 my-4 cardlink">
                  Coding for Journalists
                </Card.Title>
              </Link>
              <Card.Text className="d4d4 fw-light">
                Is there a story anymore that doesn’t include some sort of data?
                Whether you’re reporting on the pandemic, weather, crime trends,
                ...
              </Card.Text>
              <p className="mt-3 fs-6 fw-bold text-light">From CISION</p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Cards;
