import React, {useState} from "react";
import "./index.css";
import {Link,useParams} from "react-router-dom";

export default function Detail () { 

    const [circle, circle_change]= React.useState([0,1,2,3,4]);
    const [index, index_change ] = React.useState();
    const {id} =useParams();

return(
  
<div className="container">
    <div className="writepoint">
        <h3><span className="days">{id}요일</span> 평점 남기기</h3>
    </div>  

    <div className="clickcircle" >
    {circle.map((e,i)=>{
            return <div className = "circle" onClick={() => {index_change(i)}}
                style ={{ backgroundColor:i <= index ? ("yellow"): ("#e0e0e0")}}
            ></div>})}
    
    </div>

   
    <Link to = '/'><button className="ratingbtn"> 평점 남기기 </button></Link>
    
</div>

)
};
