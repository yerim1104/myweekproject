import React from "react";
import "./index.css";
import Week from "./Week";
import Detail from "./Detail";

const Main = (props) =>{ 

    var date = new Date();
    var week_yoil = ['일','월','화','수','목','금','토']
   

return(

        
      <div className="container">
       <h3> 내 일주일은? </h3>
    
       {/* <Week yoil={week_yoil[date.getDay()]}/>     */}
       <Week yoil= "월"/>
       <Week yoil= "화"/>
       <Week yoil= "수"/>
       <Week yoil= "목"/>
       <Week yoil= "금"/>
       <Week yoil= "토"/>
       <Week yoil= "일"/>
       
    </div>
    
)
};
export default Main;
