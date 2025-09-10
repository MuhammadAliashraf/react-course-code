import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../component/navbar';
import Footer from '../../component/footer';

const Layout = () => {
    return (
        <div>
           <Navbar/>
            <hr />
            <Outlet /> {/* Render child route here */}
            <hr />
            <Footer />
        </div>
    );

}

export default Layout