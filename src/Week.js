import React,{useState} from "react";
import "./index.css";
import {Link} from "react-router-dom";


const Week = (props) =>{ 
const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
const num = getRandom(0, 5)

const [circle,circles]= React.useState([0,1,2,3,4]);

return(
    <div className="dayline">
    <p>{props.yoil}</p> 
     
        {circle.map((a,i) => {
            return <div className = "circle" style = {{backgroundColor:i <= num ? ("yellow") : ("#e0e0e0")}}></div>})}
             

    <Link to={`/detail/${props.yoil}`}><div className="triangle"/></Link> 
     
    </div>

)

}
export default Week;
