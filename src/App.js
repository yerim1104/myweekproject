import React from "react";
import "./index.css";
import Main from "./Main";
import Detail from "./Detail";
import { Route } from 'react-router-dom'

const App = () =>{ 
  
  
    return(
      <div className="App">
        <Route path="/" exact>
         <Main/>
        </Route>
        <Route path="/detail/:id">
         <Detail/>
        </Route>
      </div>
    )
}

export default App;
