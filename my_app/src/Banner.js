// import React, { useState, useEffect } from "react";
import "./Banner.css";
import bannerimg from "./img/banner.png";

function Banner() {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      id="banner"
    >
      <img
        src={bannerimg}
        className="w-100 h-100"
        alt="banner_photo"
        style={{ objectFit: "cover" }}
      />
      <div class="row text-center mt-5 px-md-5 w-100 position-absolute">
        <div class="col-12">
          <p id="centertext" className="fs-5">
            {"<div>"}
            <br />
            <br />
            We will share some web development information here....
            <br />
            To help beginner of web development.
            <br />
            <br />
            {"</div>"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
