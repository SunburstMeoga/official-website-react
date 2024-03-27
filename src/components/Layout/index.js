import React from "react";
import TopBar from "../TopBar";
import FooterBar from "../FooterBar"
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="">
            <TopBar></TopBar>
            <Outlet></Outlet>
            <FooterBar></FooterBar>
        </div>
    )
}

export default Layout