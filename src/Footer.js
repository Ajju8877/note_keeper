import React from "react";
import "./Footer.css";

export default function Footer (){
const currentYear = new Date().getFullYear();
  return(
    <div className="footer">
      <div className="copyright">
      <p> CopyRight © {currentYear} </p> 
    </div>
    </div>
  );
}