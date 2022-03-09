import React from 'react'
import "./SelectionPg.css"
import Doctors from "../Doctors/Doctors"
export default function Selectionpg() {
    return (
        <>
          <div>
              <div className="container">
              <div className="container flx-sel">
                  <Doctors/>
                  <Doctors/>
                  <Doctors/>
              </div>
              <div className="container flx-sel">
                  <Doctors/>
                  <Doctors/>
                  <Doctors/>
              </div>
              </div>
              
              
          </div>
        </>
    )
}
