import React, { useEffect, useState } from "react";
import "./DocDetails.css";
import { Link } from "react-router-dom";
export default function DocDetails() {
  const [list, setList] = useState([]);
  useEffect(() => {
    getList()
  }, []);
  const getList = () => {
    var id = localStorage.getItem("docid")
    fetch(`https://hospitalapollo.herokuapp.com/doctor/${id}`)
    .then((response) => response.json())
    .then((response)=> setList(response))

  };
  return (
    <>
      <div
        className="container"
        style={{
          boxShadow: "2px 2px 13px rgb(0 0 0 / 10%)",
          margin: "2%",
          padding: "2%",
          // display: "flex", 
          // alignItems:"center",
          
        }}
      >
      
        {/* <div className="row"> */}
          <div className="col">
            <div className="card">
              <img
                className="card-img"
                src="https://i.pinimg.com/originals/30/ab/9c/30ab9c90d352d0dd6f02498e276ca2d3.jpg"
                alt="Bologna"
                style={{ height: "150px" }}
              />
              <div className="card-body text-center">
                <img
                  className="avatar rounded-circle"
                  src={list.profile_pic}
                  alt="Bologna"
                />
                <h4 className="card-title">{list.name}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{list.speciality}</h6>
                <p className="card-text txt-c">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
                  dolorem atque. Tempore at soluta nulla dicta, mollitia
                  excepturi temporibus minima recusandae, numquam magnam rem
                  accusamus ad iste blanditiis est quo?
                </p>
                <h4 className="card-title">Fees: {list.fees}</h4>
                <h4 className="card-title">Time Avaibility: {Math.floor(Math.random() * 5) + 1} to: {Math.floor(Math.random() * 15) + 1} </h4>
              </div>

              <button className="btn btn-outline-info">
                <Link className="link" to="/book">Book Appointment</Link>
              </button>
            </div>
            {/* <img src="https://png.pngtree.com/element_our/20200610/ourlarge/pngtree-doctor-appointment-vector-image_2242695.jpg" alt="" /> */}

          </div>
          

        {/* </div> */}
      </div>
    </>
  );
}
