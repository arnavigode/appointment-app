import React, { useEffect, useState } from 'react'
// import { getMaxListeners } from '../../../../backend'
import Hospitals from '../../Hospitals/Hospitals'
import './Home.css'
export default function Home() {
    const imgsH = ["https://cdn4.vectorstock.com/i/1000x1000/72/53/hospital-building-icon-vector-11647253.jpg", "https://st2.depositphotos.com/3113551/8277/v/600/depositphotos_82772628-stock-illustration-medical-and-hospital-icons.jpg", "https://www.pngmart.com/files/21/Hospital-Vector-PNG-HD-Isolated.png"]
    const titleH = ["Hospital1", "Hospital2", "Hospital3", "Hospital4"]
    const [list, setList] = useState([]);
    useEffect(()=>{
        getList();
    },[]);
    const getList=()=>{
        fetch("http://localhost:4000/hospital")
        .then((res)=>res.json())
        .then((json)=>{
            console.log(json);
            setList(json)
        })
    }
    return (
        <>
            <img className="home-poster" src="https://thumbs.dreamstime.com/b/queue-hospital-people-registry-service-healthcare-medical-concept-vector-illustration-flat-style-207813521.jpg" alt="" />

            <div className="title" style={{color:"white"}}>Chose Hospital</div>

            <div className="hospitalsCont">
            {
                list.map((e)=>(
                    <Hospitals img={e.profile_pic} title={e.name} />
                ))
            }
            </div>
            
            
        </>
    )
}
