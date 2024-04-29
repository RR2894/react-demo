import React from "react";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import { Outlet } from 'react-router-dom';

const Root = () => {
    return ( 
        <>
        <Header/>
            <main>
            <Outlet/>
            </main>
            <Footer/>
            
        </>
     );
}
 
export default Root;