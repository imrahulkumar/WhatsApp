import React from 'react';
import Header from './Header'
import { Outlet  } from "react-router-dom";

function Wrapper() {
  return (
    <>
    <Header />
<Outlet />
    </>
  )
}

export default Wrapper