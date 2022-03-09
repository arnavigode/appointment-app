import React, { useEffect, useState } from "react";
import "./Doctors.css"
import { Link } from "react-router-dom";
export default function Doctors({id}) {
  const [list, setList] = useState([]);
  useEffect(() => {
    getList()
  }, []);
  const getList = () => {
    fetch(`https://hospitalapollo.herokuapp.com/doctor/${id}`)
    .then((response) => response.json())
    .then((response)=> setList(response))

  };
  const handleClick = () =>{
    localStorage.setItem("docid", list._id);
  }
  return (
    <>
      <div className="container" style={{boxShadow:"2px 2px 13px rgb(0 0 0 / 10%)", margin:"2%", padding:"2%"}}>
         
        <div className="row">
          <div className="col">
            <div className="card">
              <img
                className="card-img-top"
                src="https://i.pinimg.com/736x/f9/08/1a/f9081a8d95944b7f11ca81b99fd749b7.jpg"
                alt="Bologna"
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
                  Robert John Downey Jr.'career has included critical and
                  popular success in his youth, followed by a period of
                  substance abuse and legal difficulties, and a resurgence of
                  commercial success in middle age.{" "}
                </p>
                <h4 className="card-title">Fees: {list.fees}</h4>
                <button className="btn btn-outline-info" onClick={handleClick}>
                <Link className="link " to="/appointment" >
                  Details
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
