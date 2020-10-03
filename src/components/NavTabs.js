import React from 'react';
// import {Link, useLocation} from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

function NavTabs(props){
     return(
          <ul className="nav nav-tabs">
               <li className="nav-item">
                    <a href="#home" onClick={()=>props.handlePageChange("Home")}>Home</a>
               </li>
               <li className="nav-item">
                    <a href="#about" onClick={()=>props.handlePageChange("About")} className="nav-link">About</a>
               </li>
          </ul>
     )
}

export default NavTabs;