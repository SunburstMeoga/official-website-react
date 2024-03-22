import React from "react";

const TopBar = () => {
    const topBarPCMenuItem = [{ title: 'About 3At' }, { title: 'Team and technical advantages' }, { title: 'Q&A' }, { title: 'Lssuance mechanism' }, { title: 'Development prospects' }]
    return (
        <div>
            {/* mobile top bar */}
            <div className="md:hidden">
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
            </div>

            {/* pc top bar */}
            <div className="hidden md:block">
                <div className="flex justify-center items-center w-full fixed z-10">
                    <div className="w-11/12 flex justify-between items-center py-8">
                        <div className="flex justify-center items-center">
                            <div className="flex justify-start items-center">
                                <div>
                                    <img className="w-20" alt="" src="/images/logo.png"></img>
                                </div>
                            </div>
                            <div className="ml-10 flex justify-start items-center border-red-100">
                                {topBarPCMenuItem.map((item, index) => {
                                    return <div key={index} className="text-word-gray font-semibold cursor-pointer ml-10">{item.title}</div>
                                })}
                            </div>
                        </div>
                        <div className="flex justify-end items-center">
                            <div className="flex justify-between items-center mr-6 cursor-pointer">
                                <div className="title-gray">Sign in</div>
                                <div className="w-4 ml-2">
                                    <img src="/images/__after.png" alt=""></img>
                                </div>
                            </div>
                            <div className="green-button rounded-full px-6 py-3 cursor-pointer">中文 / English</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar