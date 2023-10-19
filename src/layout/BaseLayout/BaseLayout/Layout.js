import React from "react";
import Header from "./Header";
import Footer from "../SideBarLayout/Footer";


const BaseLayout = (props) => {

  const userDetail = JSON.parse(localStorage.getItem('loginUser'))

  // console.log("DSF", Object.keys(userDetail).length > 0)

  return (<>
   
    <Header />
    {props.children}
    <Footer />
  </>);
}

export default BaseLayout;