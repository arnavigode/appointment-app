import React, { useEffect, useState } from "react";
import "./SelectionPg.css";
import Doctors from "../Doctors/Doctors";
export default function Selectionpg() {

  const [list, setList] = useState([]);
  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    var ids = localStorage.getItem("id");
    // console.log(ids.split(","));
    ids = ids.split(",");
    setList(ids);
  };
  console.log(list);
  return (
    <>
      <div>
        <div className="container">
          <br />
          <br />
          <div className="docCont">
            {list.map((e) => (
                
              <Doctors
                id= {e}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
