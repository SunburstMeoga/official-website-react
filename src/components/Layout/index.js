import React, { useEffect, useState } from "react";
import TopBar from "../TopBar";
// import FooterBar from "../FooterBar"
import { Outlet } from "react-router-dom";

const Layout = () => {
    const [myScrollTop, setMyScrollTop] = useState(0)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setMyScrollTop(window.scrollY)
        })
        console.log(myScrollTop)
    }, [myScrollTop])

    return (
        <div className="">
            {myScrollTop < 80 && <TopBar />}
            <Outlet></Outlet>
            {/* <FooterBar></FooterBar> */}
        </div>
    )
}

export default Layout