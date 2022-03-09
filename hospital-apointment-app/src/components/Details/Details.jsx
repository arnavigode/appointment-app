import React from 'react'
import Categories from '../Category/Categories'
import NavBar from "../Navbar/NavBar"
import "./Details.css"
export default function Details() {
    return (
        <>
            <NavBar/>
            <img className="details-poster" src="https://img.freepik.com/free-vector/flat-hand-drawn-hospital-reception-scene_52683-54613.jpg?size=626&ext=jpg" alt="" />

            <div className="container">
                <div className="row">
                    <Categories/>
                    <Categories/>
                    <Categories/>
                    <Categories/>
                </div>
            </div>
        </>
    )
}
