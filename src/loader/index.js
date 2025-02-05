import React from "react";
import ReactLoading from 'react-loading';
import "../CSS/loader.css";

function PreLoader(){
return(
    <>
     {/* <ReactLoading type={"bars"} color={"green"} height={200} width={200} /> */}
     <div className="spinner">
              <div className="half-spinner"></div>
            </div>
    </>
)
}
export default PreLoader
