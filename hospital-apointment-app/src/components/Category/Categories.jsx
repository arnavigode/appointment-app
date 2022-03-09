import React from "react";
import "./Categories.css";
export default function Categories() {
  return (
    <>
      <div className="col-lg-4 col-md-4 col-sm-6 mb-30 content">
        <br />
        <div className="category">
          <a className="cat-a" href="#">
            <img
              className="img-fluid"
              src="https://wallpaperaccess.com/full/1973507.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="cat-info">
          <div className="cat-title">
            <a className="cat-title-a" href="#">
              Cardiology
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
