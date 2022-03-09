import React from "react";
import "./Doctors.css"
export default function Doctors() {
  return (
    <>
      <div className="container" style={{boxShadow:"2px 2px 13px rgb(0 0 0 / 10%)", margin:"2%", padding:"2%"}}>
         
        <div className="row">
          <div className="col">
            <div className="card">
              <img
                className="card-img-top"
                src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/oslo.jpg"
                alt="Bologna"
              />
              <div className="card-body text-center">
                <img
                  className="avatar rounded-circle"
                  src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/robert.jpg"
                  alt="Bologna"
                />
                <h4 className="card-title">Robert Downey Jr.</h4>
                <h6 className="card-subtitle mb-2 text-muted">Famous Actor</h6>
                <p className="card-text txt-c">
                  Robert John Downey Jr.'career has included critical and
                  popular success in his youth, followed by a period of
                  substance abuse and legal difficulties, and a resurgence of
                  commercial success in middle age.{" "}
                </p>
                <a href="#" className="btn btn-outline-info">
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
