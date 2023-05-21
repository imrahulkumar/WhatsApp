import React from 'react';
import Header from './Header'
import { Outlet, Link  } from "react-router-dom";

function Wrapper() {
  return (
    <>
    <Header />
      <div  className="main">
    <div className="a">
      <b> WhatsApp</b>
      <span className="icon">
        <i className="material-icons search">search</i>
        <i className="material-icons ellipsis-v">more_vert</i>
      </span>
    </div>
    <div className="T">
             <Link to="camera" >
                    <section className="material-icons camera">camera_alt</section>
             </Link>

       <Link to="chat" >
      <section>
       CHATS 
      </section>
      </Link>
      <Link to="status" >
        <section>STATUS</section>
        </Link>  
        <Link to="call" >
             <section>CALLS</section>
          </Link>  
   
    </div>
    <div className="b">
         <Outlet />
    </div>
  </div>

    </>
  )
}

export default Wrapper