import React from "react";
import "./DocDetails.css";

export default function DocDetails() {
  return (
    <>
      <div
        className="container"
        style={{
          boxShadow: "2px 2px 13px rgb(0 0 0 / 10%)",
          margin: "2%",
          padding: "2%",
          display: "flex", 
          alignItems:"center",
          
        }}
      >
        <div className="row">
          <div className="col">
            <div className="card" style={{ width: "400px" }}>
              <img
                className="card-img"
                src="https://i.pinimg.com/originals/30/ab/9c/30ab9c90d352d0dd6f02498e276ca2d3.jpg"
                alt="Bologna"
                style={{ height: "150px" }}
              />
              <div className="card-body text-center">
                <img
                  className="avatar rounded-circle"
                  src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/robert.jpg"
                  alt="Bologna"
                />
                <h4 className="card-title">Dr. Name</h4>
                <h6 className="card-subtitle mb-2 text-muted">Doctor</h6>
                <p className="card-text txt-c">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
                  dolorem atque. Tempore at soluta nulla dicta, mollitia
                  excepturi temporibus minima recusandae, numquam magnam rem
                  accusamus ad iste blanditiis est quo?
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
