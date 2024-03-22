import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigator = useNavigate()
    function toWhy() {
        navigator('/why')
    }
    function toHow() {
        navigator('/how')
    }
    return (
        <div>
            <div className="md:hidden">
                <div className="pt-20">
                    <div className="image-bg bg-home-1image image-bg-tp-120 bg-no-repeat bg-contain bg-white-opaity-80 flex flex-col items-center relative">
                        <div className="absolute w-full bg-white-opaity-80"></div>
                        <div className="w-1/2 absolute -top-4">
                            <img alt="" src="/images/logo.png"></img>
                        </div>
                        <div className="flex flex-col items-center text-word-gray text-5xl font-bold absolute -bottom-6">
                            <div className="mb-2">
                                Stable And
                            </div>
                            <div className="mb-2">
                                Trustworthy
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-5xl font-bold absolute text-gradient pb-1 -bottom-32">
                            <div className="mb-2">
                                Digital Fiat
                            </div>
                            <div>
                                Currency Bridge
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-2xl mt-40 w-full mb-20" >
                        <div className="green-button py-3 w-8/12 rounded mb-2" onClick={() => toWhy()}>
                            Why Choose 3AT
                        </div>
                        <div className="orange-button py-3 w-8/12 rounded" onClick={() => toHow()}>
                            How 3AT Works
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-5xl mb-6" >
                        <div>
                            <span className="text-word-gray mr-2">Visionary</span>
                            <span className="text-primary-green">strategy</span>
                        </div>
                        <div className="font-semibold">
                            <span className="text-word-gray mr-2 text-4xl">&</span>
                            <span className="text-primary-orange mr-2">Innovative</span>
                            <span className="text-word-gray ">spirit</span>
                        </div>
                    </div>

                    <div className="image-bg bg-home-2image image-bg-tp-760 bg-no-repeat bg-contain flex flex-col items-center relative mb-20">
                        <div className="absolute top-16 flex flex-col items-center justify-start">
                            <div className="w-9/12 mb-8">
                                <img alt="" src="/images/d2b.png"></img>
                            </div>

                            <div className="text-word-gray text-2xl flex justify-center items-center w-full mb-36">
                                <div className="w-11/12">
                                    <p >
                                        3AT tokens create a safe and stable
                                    </p>
                                    <p className="mb-10">
                                        trading environment for users,
                                    </p>
                                    <p className="mb-10">
                                        Carrying the bridge between digital
                                        currency and traditional currency,
                                    </p>
                                    <p className="mb-10">
                                        Eliminating the volatility and
                                        complexity that often accompanies
                                        digital assets.

                                    </p>
                                    <p className="mb-10">
                                        This initiative enables global
                                        enterprises to participate in the
                                        digital financial system more easily
                                        and efficiently,
                                    </p>
                                    <p>
                                        Enjoy the unique advantages of 3AT.
                                    </p>
                                </div>
                            </div>

                            <div className="relative w-full mt-10">
                                <div className="w-10/12 absolute">
                                    <img alt="" src="/images/ellipse-2.png"></img>
                                </div>
                                <div className="w-full -mt-10">
                                    <img alt="" src="/images/features.png"></img>
                                </div>
                                <div className="w-full -mt-10">
                                    <img alt="" src="/images/team.png"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-20">
                        <img alt="" src="/images/FAQs.png"></img>
                    </div>
                </div>
            </div>
            <div className="sm:hidden md:block">
                <div className="image-bg image-bg-tp-220 bg-home-pc-one bg-no-repeat bg-contain relative flex justify-center items-center">
                    <div className="absolute top-0 w-full ">
                        <div className="flex justify-end items-center">
                            <div className="font-bold text-6xl flex justify-between flex-col absolute z-10 left-72 bottom-28">
                                <div className="w-1/3 mb-8">
                                    <img alt="" src="/images/logo.png"></img>
                                </div>
                                <div className="text-word-gray mb-4">Stable And</div>
                                <div className="text-word-gray mb-4">Trustworthy</div>
                                <div className="text-gradient pb-4 ">Digital Fiat Currency</div>
                                <div className="text-gradient mb-8 pb-4">Bridge</div>
                                <div className="flex justify-start items-center text-2xl" >
                                    <div className="green-button py-5 w-8/12 rounded-xl" onClick={() => toWhy()}>
                                        Why Choose 3AT
                                    </div>
                                    <div className="orange-button py-5 w-8/12 rounded-xl ml-4" onClick={() => toHow()}>
                                        How 3AT Works
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <img alt="" src="/images/8-1.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home