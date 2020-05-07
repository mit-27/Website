import React from "react";
import Head from "./head";
import Navbar from "./navbar";
import Footer from "./Footer";
const Layout = ({ placeholder, children }) => {

 

    return (
        <React.Fragment>
            <Head/>
            <Navbar
                placeholder={placeholder === undefined ? true : placeholder}
            />
            
            <div className="wrapper" style={{minHeight:"100vh"}}>
           {children}
           </div>
           
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
