import React from "react";
import { Link } from "react-router-dom";

export default function Hospitals({ img, title, id }) {
  const handleClick = ()=>{
    localStorage.setItem("id", [id]);
  }
  return (
    <div>
      <div className="card mb-3" style={{ maxWidth: "540px", boxShadow:"2px 2px 13px rgb(0 0 0 / 10%)", border:"3px solid #fff" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img} style={{height:"200px"}} class="card-img img-fluid" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                {" "}
                <b>{title}</b>{" "}
              </h5>
              <p className="card-text" style={{ fontSize: "16px" }}>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. 
                {/* <br /> */}
                
              </p>
              <button type="button" class="btn btn-outline-info" onClick={handleClick}>
                <Link className="link" to="/select">
                  Select Hospital
                </Link>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
