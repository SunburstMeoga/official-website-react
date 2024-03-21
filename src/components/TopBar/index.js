import React from "react";

const TopBar = () => {
    return (
        <div className="w-full flex justify-center items-center fixed z-10">
            <div className="w-11/12 flex justify-between py-4">
                <div className="w-14">
                    <img alt="" src="/images/logo.png"></img>
                </div>
                <div className="flex justify-center items-center ">
                    <div className="w-8 h-8">
                        <img alt="" src="/images/user.png"></img>
                    </div>
                    <div className="w-6 ml-6">
                        <img alt="" src="/images/menu.png"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar