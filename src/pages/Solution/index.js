import React from "react";
import FooterBar from "@/components/FooterBar";
import ContractUs from "../../components/ContractUs";
const Solution = () => {
    return (
        <div>
            <div className="relative md:hidden">
                <div className="">
                    <img alt="" src="/images/mobile/payment-industry-bg.png"></img>
                </div>
                <div className="absolute flex flex-col justify-start items-center top-0 left-0 w-full h-full">
                    <div className="flex w-11/12 flex-col justify-start items-start">
                        <div className="text-word-gray w-3/4 mt-20 text-6xl font-bold">
                            Payment Industry
                        </div>
                    </div>
                    <div className="flex w-11/12 flex-col justify-start items-start">
                        <div className=" w-3/4 mt-32 text-4xl font-bold text-white title-shadow">
                            Reinventing payments and remittances
                        </div>
                    </div>
                    <div className="mt-12 text-word-gray font-semibold px-2 w-11/12 text-2xl">
                        3AT leads you to experience a new era of safe and efficient financial transactions.
                    </div>
                    <div className="w-11/12 mt-12 text-primary-green text-4xl font-bold">
                        Classic payment Gateway
                    </div>
                    <div className="w-11/12 rounded-3xl py-5 pl-6 bg-white mt-12 text-primary-green text-2xl font-semibold">
                        High handling fees
                    </div>
                    <div className="w-11/12 rounded-3xl py-5 pl-6 bg-white mt-4 text-primary-green text-2xl font-semibold">
                        Exchange rate fluctuations
                    </div>
                    <div className="w-11/12 rounded-3xl py-5 pl-6 bg-white mt-4 text-primary-green text-2xl font-semibold pr-6">
                        Delay, opacity,
                        <div className="w-full h-0.5 bg-line-gray my-4"></div>
                        Centralization risk
                    </div>
                    <div className="w-11/12 rounded-3xl py-5 pl-6 bg-white mt-4 text-primary-green text-2xl font-semibold leading-6 z-10">
                        Delay, opacity,<br></br>
                        Centralization risk
                    </div>
                    <div className="-mt-8 w-36">
                        <img src="/images/mobile/vs.png" alt=""></img>
                    </div>
                    <div className="w-full -mt-16">
                        <div className="w-28 h-2 bg-primary-orange"></div>
                        <div className="w-11/12 mr-auto ml-auto text-primary-orange text-4xl font-bold mt-16">
                            3AT payment <br></br>Gateway
                        </div>
                    </div>
                    <div className="w-full flex-col flex justify-center items-center">
                        <div className="w-10/12 mr-auto ml-auto text-word-gray text-4xl font-bold mt-8">
                            low cost
                        </div>
                        <div className="w-11/12  rounded-3xl py-5 pl-6 bg-white mt-4 text-primary-orange text-2xl font-semibold">
                            Exchange rate fluctuations
                        </div>
                        <div className="w-10/12 mr-auto ml-auto text-word-gray text-4xl font-bold mt-8">
                            Immediacy
                        </div>
                        <div className="w-11/12  rounded-3xl py-5 pl-6 bg-white mt-4 text-primary-orange text-2xl font-semibold">
                            Can be completed instantly
                        </div>
                        <div className="w-10/12 mr-auto ml-auto text-word-gray text-4xl font-bold mt-8">
                            Decentralization and security
                        </div>
                        <div className="w-11/12 rounded-3xl py-5 pl-6 bg-white mt-4 text-primary-orange text-2xl font-semibold pr-6">
                            There is no central agency control, reducing the risk of single points of failure.
                            <div className="w-full h-0.5 bg-line-gray my-4"></div>
                            Encryption and distributed ledger technology make transactions more trustworthy
                        </div>
                        <div className="w-10/12 mr-auto ml-auto text-word-gray text-4xl font-bold mt-8">
                            Global accessibility
                        </div>
                        <div className="w-11/12  rounded-3xl py-5 pl-6 bg-white mt-4 text-primary-orange text-2xl font-semibold">
                            Blockchain reduces transaction costs
                        </div>
                    </div>
                    <div className="w-11/12 text-word-gray font-bold text-6xl mt-20">
                        Why <br></br>
                        Choose 3AT
                    </div>
                    <div className="w-36 mt-12">
                        <img className="" src="/images/mobile/stable.png" alt=""></img>
                    </div>
                    <div className="mt-14 text-word-gray font-bold text-4xl">
                        Stable
                    </div>
                    <div className="mt-8 w-11/12 text-center text-primary-green text-3xl leading-7">
                        You can exchange regulated digital currencies into Hong Kong dollars at a 1:1 rate at any time.
                    </div>

                    <div className="w-36 mt-12">
                        <img className="" src="/images/mobile/transparent.png" alt=""></img>
                    </div>
                    <div className="mt-14 text-word-gray font-bold text-4xl">
                        Transparent
                    </div>
                    <div className="mt-8 w-11/12 text-center text-primary-green text-3xl leading-7">
                        Reserve composition and monthly certifications are publicly available.
                    </div>

                    <div className="w-36 mt-12">
                        <img className="" src="/images/mobile/trustworthy.png" alt=""></img>
                    </div>
                    <div className="mt-14 text-word-gray font-bold text-4xl">
                        Trustworthy
                    </div>
                    <div className="mt-8 w-11/12 text-center text-primary-green text-3xl leading-7">
                        Widely used on popular exchanges and available natively on over multiple blockchains.
                    </div>
                    <div className="w-full flex flex-col justify-center items-center mt-32">
                        <div className="w-11/12">
                            <ContractUs></ContractUs>
                        </div>
                    </div>
                    <div className="w-full flex justify-center bg-primary-green text-center py-10 mt-20">

                        <div className="w-11/12">
                            <FooterBar isWhite></FooterBar>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden md:block ">
                <div className="image-bg bg-payment-pc image-bg-tp-199 bg-no-repeat bg-contain relative">
                    {/* <div className="absolute top-0 w-full pt-44">
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

                        // <div className="w-full flex justify-center text-center bg-primary-green py-10 mt-40 relative z-10">
                        //     <div className="w-11/12">
                        //         <FooterBar isWhite></FooterBar>
                        //     </div>
                        // </div>
                    </div> */}

                    <div className="absolute bottom-20 w-full flex flex-col justify-center items-center">
                        <div className="w-11/12">
                            <ContractUs></ContractUs>
                        </div>
                    </div>

                </div>
                <div className="w-full flex justify-center bg-primary-green text-center py-10">
                    <div className="w-11/12">
                        <FooterBar isWhite></FooterBar>
                    </div>
                </div>
            </div >

        </div>
    )
}

export default Solution