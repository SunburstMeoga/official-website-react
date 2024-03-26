import React from "react";
import FooterBar from "@/components/FooterBar";
import ContractUs from "../../components/ContractUs";
const Solution = () => {
    return (
        <div>
            <div className="md:hidden">
                Solution mobile
            </div>

            <div className="hidden md:block ">
                <div className="image-bg image-bg-tp-219 bg-solution-pc-one bg-no-repeat bg-contain relative flex justify-center items-center">
                    <div className="absolute top-0 w-full pt-44">
                        <div className="w-full flex justify-center items-center">
                            <div className="text-word-gray text-4xl w-10/12 mb-96">Payment Industry</div>
                        </div>
                        <div className="w-full flex flex-col items-center justify-start  mt-40 mb-20">
                            <div className="w-9/12 flex justify-between items-center mb-10 ">
                                <div className="flex flex-col justify-start items-start">
                                    <div className="w-20 h-1 bg-primary-green mb-6"></div>
                                    <div className="text-2xl font-bold text-primary-green">
                                        <div>Traditional transaction</div>
                                        <div> payment</div>
                                    </div>
                                </div>
                                <div className="">
                                    <img src="/images/vs.png" alt=""></img>
                                </div>
                                <div className="flex flex-col justify-start items-end">
                                    <div className="w-20 h-1 bg-primary-orange mb-6"></div>
                                    <div className="text-2xl font-bold text-primary-orange">
                                        <div>Stable transaction</div>
                                        <div>currency payment</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-4/12 text-word-gray text-2xl text-right">low cost</div>
                            <div className="w-9/12">
                                <img src="/images/Group 20.png" alt=""></img>
                            </div>

                            <div className="w-4/12 text-word-gray text-2xl text-right">Immediacy</div>
                            <div className="w-9/12">
                                <img src="/images/Group 21.png" alt=""></img>
                            </div>

                            <div className="w-4/12 text-word-gray text-2xl text-right">Decentralization and security</div>
                            <div className="w-9/12">
                                <img src="/images/Group 22.png" alt=""></img>
                            </div>

                            <div className="w-4/12 text-word-gray text-2xl text-right">Global accessibility</div>
                            <div className="w-9/12">
                                <img src="/images/Group 23.png" alt=""></img>
                            </div>
                        </div>

                        <div className="text-word-gray text-4xl font-bold text-center mb-20">Why Choose 3AT</div>

                        <div className="w-full flex justify-center">
                            <div className="w-9/12 flex justify-between items-center ">
                                <div className="flex flex-col items-center justify-start ">
                                    <div className="w-32 mb-4">
                                        <img className="w-32" src="/images/why-item-one.png" alt=""></img>
                                    </div>
                                    <div className="text-word-gray text-xl mb-4">
                                        Stable
                                    </div>
                                    <div className="text-primary-green text-center">
                                        <div>You can exchange</div>
                                        <div>regulated digital currenciese</div>

                                        <div>into Hong Kong dollars at a</div>
                                        <div>1:1 rate at any time.</div>

                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-start ">
                                    <div className="w-32 mb-4">
                                        <img className="w-32" src="/images/why-item-two.png" alt=""></img>
                                    </div>
                                    <div className="text-word-gray text-xl mb-4">
                                        Transparent
                                    </div>
                                    <div className="text-primary-green text-center">
                                        <div>Reserve composition </div>
                                        <div>and monthly </div>

                                        <div>certifications are </div>
                                        <div>publicly available..</div>

                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-start ">
                                    <div className="mb-4 w-32">
                                        <img className="w-32" src="/images/why-item-three.png" alt=""></img>
                                    </div>
                                    <div className="text-word-gray text-xl mb-4">
                                        Trustworthy
                                    </div>
                                    <div className="text-primary-green text-center">
                                        <div>Widely used on popular </div>
                                        <div>exchanges and available </div>

                                        <div>natively on over multiple </div>
                                        <div>blockchains.</div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-20 mb-28">
                            <ContractUs></ContractUs>
                        </div>

                        <div className="w-full flex justify-center text-center bg-primary-green py-10 mt-40 relative z-10">
                            <div className="w-11/12">
                                <FooterBar isWhite></FooterBar>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Solution