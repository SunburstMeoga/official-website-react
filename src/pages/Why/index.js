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
        <>
            <div className="md:hidden">
                <div className="image-bg bg-why-2image image-bg-tp-1025 bg-no-repeat bg-contain bg-white-opaity-80 flex flex-col items-center relative">
                    <div className="absolute flex flex-col items-center text-2xl w-full why-button-group" >
                        <div className="green-button py-3 w-8/12 rounded mb-2" onClick={() => toHome()}>
                            Home
                        </div>
                        <div className="orange-button py-3 w-8/12 rounded" onClick={() => toHow()}>
                            How 3AT Works
                        </div>
                    </div>
                </div>

                {/* <div className="image-bg bg-why-1image image-bg-tp-157 bg-no-repeat bg-contain bg-white-opaity-80 flex flex-col items-center relative">
                <div className="absolute w-full bg-white-opaity-80"></div>
                <div className="w-1/2 absolute top-24">
                    <img alt="" src="/images/logo.png"></img>
                </div>
                <div className="flex flex-col items-center text-word-gray text-5xl font-bold absolute bottom-24">
                    <div className="">
                        Why Choose
                    </div>
                    <div className="mb-2 text-primary-orange">
                        3AT
                    </div>
                </div>
                <div className="flex w-9/12 flex-col items-center text-word-gray text-sm text-left absolute pb-1 -bottom-8">
                    <p>3AT stands out with its unique</p>
                    <p>stablecoin model. The innovative</p>
                    <p>integration of blockchain technology</p>
                    <p>makes it a safe, efficient and</p>
                    <p>convenient digital asset, bringing a</p>
                    <p>new experience to transactions.</p>
                </div>
            </div>
            <div className="flex flex-col items-center text-2xl mt-12 w-full mb-28" >
                <div className="green-button py-3 w-8/12 rounded mb-2">
                    Home
                </div>
                <div className="orange-button py-3 w-8/12 rounded">
                    How 3AT Works
                </div>
            </div>
            <div className="image-bg bg-home-2image image-bg-tp-760 bg-no-repeat bg-contain flex flex-col justify-center items-center relative">
                <div className="absolute top-0 flex flex-col items-center justify-start w-full z-10">
                    <div className="w-11/12 mb-8">
                        <img alt="" src="/images/2.png"></img>
                    </div>
                </div>
                <div className="w-full  ellipse-1">
                    <img src="/images/ellipse-1.png"></img>
                </div>
                <div className="absolute w-full flex justify-center items-center bottom-48">
                    <div className="w-11/12">
                        <img alt="" src="/images/1.png"></img>
                    </div>
                </div>
            </div> */}
            </div>

            <div className="hidden md:block">
                <div className="image-bg image-bg-tp-160 bg-why-pc-one bg-no-repeat bg-contain relative flex justify-center items-center">
                    <div className="absolute top-0 w-full ">
                        <div className="flex justify-end items-center mb-20 mt-32">
                            <div className="font-bold text-6xl flex justify-between flex-col absolute left-64 bottom-26 z-10 ">
                                <div className="w-1/3 mb-8">
                                    <img alt="" src="/images/logo.png"></img>
                                </div>
                                <div className="text-word-gray mb-10">Why Choose 3AT</div>
                                {/* <div className="text-word-gray mb-4">Trustworthy</div>
                                <div className="text-gradient pb-4 ">Digital Fiat Currency</div>
                                <div className="text-gradient mb-8 pb-4">Bridge</div> */}
                                <div className="flex justify-start items-center text-2xl mb-10" >
                                    <div className="green-button py-5 w-5/12 rounded-xl" >
                                        Home
                                    </div>
                                    <div className="orange-button py-5 w-6/12 rounded-xl ml-4" >
                                        How 3AT Works
                                    </div>
                                </div>

                                <div className="text-word-gray text-xl">
                                    <p className="mb-4"> 3AT stands out with its unique stablecoin model. The innovative</p>
                                    <p className="mb-4">integration of blockchain technology makes it a safe, efficient and</p>
                                    <p className="mb-4">convenient digital asset, bringing a new experience to transactions.</p>
                                </div>
                            </div>
                            <div className="mr-60">
                                <img alt="" src="/images/23 1.png"></img>
                            </div>
                        </div>


                        <div className="w-full flex flex-col justify-start items-center">
                            <div className="w-9/12 mb-10">
                                <div className="w-1/12 h-2 bg-primary-orange"></div>
                            </div>
                            <div className="w-9/12">
                                <img src="/images/why-3at.png" alt=""></img>
                            </div>
                        </div>

                        <div className="w-full flex justify-center text-center mt-8">
                            <div className="w-11/12">
                                <FooterBar></FooterBar>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Why      