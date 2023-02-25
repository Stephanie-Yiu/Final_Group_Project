// import React, { useState, useEffect } from "react";
import "./Banner.css";
import bannerimg from "./img/banner.png";
import { useRef, useEffect } from "react";
import Typed from "react-typed";

function Banner() {
  const scrolly = useRef("");
  const text = useRef("");

  useEffect(() => {
    window.addEventListener("scroll", scrolling2);
    return () => {
      window.removeEventListener("scroll", scrolling2);
    };
  });

  function scrolling2() {
    let value = window.scrollY;
    scrolly.current.style.top = value * 0.5 + "px";

    if (window.scrollY >= 280) {
      text.current.style.transition = "opacity 0.5s";
      text.current.style.opacity = "0";
    } else {
      text.current.style.opacity = "1";
    }
  }

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      id="banner"
    >
      <img
        src={bannerimg}
        className="w-100 h-100"
        alt="banner_photo"
        style={{ objectFit: "cover", position: "relative" }}
        ref={scrolly}
      />

      <div
        className="row text-center  px-md-5 w-100 position-absolute "
        ref={text}
      >
        <div className="col-12">
          <div id="centertext" className="fs-5 green">
            {`<div id="purpose">`}
            <br />
            <br />
            We share web development information here to
            <br />
            <Typed
              className="fs-3 "
              strings={[
                " Help beginner",
                " Connect with each other",
                " Share what we know",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
            <br />
            <br />
            {"</div>"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
