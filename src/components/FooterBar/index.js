import React from "react";

const FooterBar = () => {
    return (
        <div className="hidden md:block">
            <div className="flex justify-between items-end">
                <div>
                    <div className="mb-8 w-32">
                        <img src="/images/logo.png" alt=""></img>
                    </div>
                    <div className="flex justify-start">
                        <div className="flex flex-col justify-start items-start text-word-gray mr-20">
                            <div className="text-2xl mt-2 font-bold cursor-pointer">
                                Home
                            </div>
                            <div className="text-title-gray mt-2 cursor-pointer">
                                About 3AT
                            </div>
                            <div className="text-title-gray mt-2 cursor-pointer">
                                Q&A
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-start text-word-gray mr-20">
                            <div className="text-2xl mt-2 font-bold cursor-pointer">
                                Why Choose 3AT
                            </div>
                            <div className="text-title-gray mt-2 cursor-pointer">
                                Issuance mechanism
                            </div>
                            <div className="text-title-gray mt-2 cursor-pointer">
                                Development prospects
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-start text-word-gray mr-20">
                            <div className="text-2xl mt-2 font-bold cursor-pointer">
                                Hwo 3AT Works
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-end items-end">
                    <div className="flex justify-end items-center mb-4">
                        <div className="w-10 mr-4 cursor-pointer">
                            <img alt="" src="/images/Vector (1).png"></img>
                        </div>
                        <div className="w-10 mr-4 cursor-pointer">
                            <img alt="" src="/images/Vector.png"></img>
                        </div>
                        <div className="w-10 mr-4 cursor-pointer">
                            <img alt="" src="/images/Group 3.png"></img>
                        </div>
                        <div className="w-10 cursor-pointer">
                            <img alt="" src="/images/facebook 1.png"></img>
                        </div>
                    </div>
                    <div className="text-bottom-word text-sm">Copyright @ 2024 3AT technology limited</div>
                </div>
            </div>
        </div>
    )
}

export default FooterBar