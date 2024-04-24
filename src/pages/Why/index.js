import React from "react";
import { useNavigate } from "react-router-dom";
import FooterBar from "@/components/FooterBar";

const Why = () => {
    const navigator = useNavigate()
    function toHome() {
        navigator('/')
    }
    function toHow() {
        navigator('/how')
    }
    return (
        <div className="">
            <div className="">
                <div className="relative">
                    <div className="absolute -z-10 lg:hidden">
                        <img src="/images/mobile/why-banner.png" alt=""></img>
                    </div>
                    <div className="lg:block hidden absolute -z-20 w-full top-0-1 ">
                        <img alt="" src="/images/pc/about-top-bg.png"></img>
                    </div>
                    <div className="lg:block absolute -z-10 right-0-1 top-0-1 hidden top w-73-3">
                        <img alt="" src="/images/pc/about-banner.png"></img>
                    </div>
                    <div className="flex flex-col justify-start items-center lg:w-41-4 lg:items-start lg:ml-15-0">
                        <div className="mt-5-4 w-12-5 lg:mt-9-8">
                            <img alt="" src="/images/mobile/logo.png"></img>
                        </div>
                        <div className="text-word-gray text-2-5 font-black w-17-8 text-center mt-14-0 leading-point-114 lg:mt-2-0 lg:text-left lg:text-4-0  lg:w-25-3 ">Why Choose</div>
                        <div className="text-primary-orange text-2-5 font-black w-20-2 text-center pb-0-2 leading-point-114 lg:text-left lg:text-4-0  lg:w-41-4">3AT</div>
                        <div className="text-1-0 text-word-gray leading-point-140">
                            3AT stands out with its unique <br></br>
                            stablecoin model. The innovative<br></br>
                            integration of blockchain technology<br></br>
                            makes it a safe, efficient and<br></br>
                            convenient digital asset, bringing a<br></br>
                            new experience to transactions.
                        </div>
                        <div className="lg:flex lg:justify-start lg:items-center lg:mt-1-6">
                            <div className="mt-1-3 lg:mt-auto">
                                <div className="green-button jump-button" onClick={() => toHome()}>Home</div>
                            </div>
                            <div className="mt-0-4 lg:mt-auto lg:ml-1-6">
                                <div className="orange-button jump-button" onClick={() => toHow()}>How 3AT Works</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="relative mt-2-2 pt-3-5">
                        <div className="absolute top-0-1 left-auto -z-10">
                            <img alt="" src="/images/mobile/why-module-one.png"></img>
                        </div>
                        <div className="flex flex-col justify-start items-center">
                            <div className="w-21-9">
                                <div className="w-4-5 h-0-2 bg-primary-orange"></div>
                                <div className="text-2-0 text-word-gray leading-point-114 font-bold mt-0-7">
                                    3AT is an advanced stablecoin option that <span className="text-primary-orange">provides multiple values</span> fro individuals and businesses.
                                </div>
                            </div>
                        </div>
                        <div className="text-word-gray relative">
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex flex-col justify-start items-start w-21-9">
                                    <div>
                                        <div className="relative my-2-8 text-1-0 font-bold">
                                            <div className="w-21-8">
                                                <img alt="" src="/images/mobile/flower.png"></img>
                                            </div>
                                            <div className="absolute top-2-1 left-7-4">
                                                <div className="text-white text-center">1 to 1 <br></br> Fiat Currency <br></br> Storage</div>
                                            </div>
                                            <div className="absolute top-8-1 right-1-2">
                                                <div className="text-white text-center">High <br></br> Liquidity</div>
                                            </div>
                                            <div className="absolute bottom-4-3 right-3-2">
                                                <div className="text-white text-center">Full <br></br> Transparency</div>
                                            </div>
                                            <div className="absolute bottom-3-3 left-3-8">
                                                <div className="text-white text-center">Top Notch <br></br> Customer <br></br>Support</div>
                                            </div>
                                            <div className="absolute top-8-1 left-0-1">
                                                <div className="text-white text-right">Meet <br></br> Rectangle <br></br>Requirements</div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="font-black">
                                                <span className="text-1-5 mr-0-6">01</span>1 to 1 Fiat Currency Storage
                                            </div>
                                            <div className="text-1-3 leading-point-140 mt-1-4">
                                                All 3AT tokens are pegged to fiat currencies and are 100% backed by fiat reserves, ensuring sufficient reserves for exchange.
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="mt-1-6">
                                            <div className="font-black">
                                                <span className="text-1-5 mr-0-6">02</span>High Liquidity
                                            </div>
                                            <div className="text-1-3 leading-point-140 mt-1-4">
                                                The complete blockchain ecosystem based on hah enables 3AT to have excellent liquidity and provide users with an excellent trading experience.
                                            </div>
                                        </div>
                                        <div className="mt-1-6">
                                            <div className="font-black">
                                                <span className="text-1-5 mr-0-6">03</span>Full Transparency
                                            </div>
                                            <div className="text-1-3 leading-point-140 mt-1-4">
                                                The professional customer service team provides round-the-clock service to ensure that users can receive support at any time.
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mt-1-6">
                                            <div className="font-black">
                                                <span className="text-1-5 mr-0-6">04</span>Top Notch Customer Support
                                            </div>
                                            <div className="text-1-3 leading-point-140 mt-1-4">
                                                The issuance and reserve assets of 3AT tokens are open and transparent, providing users with real-time checkable information.
                                            </div>
                                        </div>
                                        <div className="mt-1-6">
                                            <div className="font-black">
                                                <span className="text-1-5 mr-0-6">05</span>Meet Regulatory Requirements
                                            </div>
                                            <div className="text-1-3 leading-point-140 mt-1-4">
                                                3AT strictly follows the world's first-class regulatory standards, including anti-money laundering, combating terrorist financing, and formulating customer standards.
                                                standards and implement standardized compliance measures.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-center mt-4-5">
                            <div className="w-21-9">
                                <div className="w-4-5 h-0-2 bg-primary-orange"></div>
                                <div className="text-2-0 text-word-gray leading-point-114 font-bold mt-0-7">
                                    3AT token is <span className="text-primary-orange">revolutionizing</span> the global financial industry
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Why      