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
                    <div className="text-2xl">
                        Why Choose
                    </div>
                    <div className="mb-2 text-primary-orange">
                        3AT
                    </div>
                </div>
                <div className="flex w-9/12 flex-col items-center text-word-gray text-sm text-left absolute pb-1 -bottom-8">
                    <div>3AT stands out with its unique</div>
                    <div>stablecoin model. The innovative</div>
                    <div>integration of blockchain technology</div>
                    <div>makes it a safe, efficient and</div>
                    <div>convenient digital asset, bringing a</div>
                    <div>new experience to transactions.</div>
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
                <div className="image-bg image-bg-tp-160 bg-why-pc bg-no-repeat bg-contain relative ">
                    <div className="flex justify-start items-center text-2xl absolute z-0 w-1/3" style={{ paddingTop: '22%', marginLeft: '12.3%' }}>
                        <div className="green-button py-5 w-8/12 rounded-xl" onClick={() => toHome()}>
                            Home
                        </div>
                        <div className="orange-button py-5 w-8/12 rounded-xl ml-4" onClick={() => toHow()}>
                            How 3AT Works
                        </div>
                    </div>
                    {/* <div className="absolute top-0 w-full ">
                        <div className="flex justify-end items-center mb-20 mt-32">
                            <div className="font-bold text-6xl flex justify-between flex-col absolute left-64 bottom-26 z-10 ">
                                <div className="w-1/3 mb-8">
                                    <img alt="" src="/images/logo.png"></img>
                                </div>
                                <div className="text-word-gray mb-10">Why Choose 3AT</div>
                                <div className="flex justify-start items-center text-2xl mb-10" >
                                    <div className="green-button py-5 w-5/12 rounded-xl" onClick={() => toHome()}>
                                        Home
                                    </div>
                                    <div className="orange-button py-5 w-6/12 rounded-xl ml-4" onClick={() => toHow()}>
                                        How 3AT Works
                                    </div>
                                </div>

                                <div className="text-word-gray text-xl">
                                    <div className="mb-4"> 3AT stands out with its unique stablecoin model. The innovative</div>
                                    <div className="mb-4">integration of blockchain technology makes it a safe, efficient and</div>
                                    <div className="mb-4">convenient digital asset, bringing a new experience to transactions.</div>
                                </div>
                            </div>
                            <div className="mr-60">
                                <img alt="" src="/images/23 1.png"></img>
                            </div>
                        </div>


                        <div className="w-full flex flex-col justify-start items-center mb-20">
                            <div className="w-9/12 mb-10">
                                <div className="w-1/12 h-2 bg-primary-orange"></div>
                            </div>
                            <div className="w-9/12">
                                <img src="/images/why-3at.png" alt=""></img>
                            </div>
                        </div>

                        <div className="w-full flex justify-center items-center text-word-gray mb-20">
                            <div className="w-9/12 flex justify-between items-center">
                                <div className="flex-1 pr-10 mt-40 flex flex-col justify-start">
                                    <div className="flex flex-col items-end justify-start w-full mb-10">
                                        <div className="mb-5 text-6xl font-bold">05</div>
                                        <div>
                                            <div className="text-2xl">3AT strictly follows the world's</div>
                                            <div className="text-2xl">first-class regulatory standards,</div>
                                            <div className="text-2xl">including anti-money laundering,</div>
                                            <div className="text-2xl">combating terrorist financing, and</div>
                                            <div className="text-2xl">formulating customer standards.</div>
                                            <div className="text-2xl">standards and implement</div>
                                            <div className="text-2xl">standardized compliance</div>
                                            <div className="text-2xl">measures.</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end justify-start w-full">
                                        <div className="mb-5 text-6xl font-bold">04</div>

                                        <div>
                                            <div className="text-2xl">The professional customer</div>
                                            <div className="text-2xl">service team provides round-the-</div>
                                            <div className="text-2xl">clock service to ensure that users</div>
                                            <div className="text-2xl">can receive support at any time.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center w-5/12">
                                    <div className="flex flex-col items-center justify-center w-full">
                                        <div className="mb-5 text-6xl font-bold">01</div>
                                        <div className="mb-2">
                                            <div className="text-2xl">All 3AT tokens are pegged to fiat currencies</div>
                                            <div className="text-2xl">and are 100% backed by fiat reserves,</div>
                                            <div className="text-2xl">ensuring sufficient reserves for exchange.</div>
                                        </div>
                                    </div>
                                    <div>
                                        <img src="/images/picle.png" alt=""></img>
                                    </div>
                                </div>
                                <div className="flex-1 pl-10 flex flex-col justify-start">
                                    <div className="flex flex-col items-t justify-start w-full mt-32 mb-16">
                                        <div className="mb-5 text-6xl font-bold">02</div>
                                        <div>
                                            <div className="text-2xl">The complete blockchain ecosystem</div>
                                            <div className="text-2xl">based on hah enables 3AT to have</div>
                                            <div className="text-2xl">excellent liquidity and provide users</div>
                                            <div className="text-2xl">with an excellent trading</div>
                                            <div className="text-2xl">experience.</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start justify-start w-full mt-16">
                                        <div className="mb-5 text-6xl font-bold">03</div>

                                        <div>
                                            <div className="text-2xl">The issuance and reserve assets of</div>
                                            <div className="text-2xl"> 3AT tokens are open and</div>
                                            <div className="text-2xl">transparent, providing users with</div>
                                            <div className="text-2xl">real-time checkable information.</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="w-full flex flex-col justify-start items-center mb-20 relative">
                            <div className="absolute left-0 top-0 w-full ">
                                <img src="/images/Rectangle 13.png" alt=""></img>
                            </div>
                            <div className="w-9/12 relative z-10 mb-20">
                                <div className="mb-10 w-full">
                                    <div className="w-1/12 h-2 bg-primary-orange"></div>
                                </div>
                                <div className="w-full">
                                    <img className="w-6/12" src="/images/revolutionzing.png" alt=""></img>
                                </div>
                            </div>
                            <div className="w-9/12 relative text-word-gray flex justify-between items-end " >
                                <div className="absolute top-0 left-0 w-full">
                                    <img src="images/arrow.png" alt=""></img>
                                </div>
                                <div className="flex justify-between  w-full ">
                                    <div className="mt-80">
                                        <div className="w-20 mb-10 ml-10">
                                            <img src="/images/arrow_book.png" alt=""></img>
                                        </div>
                                        <div className="text-word-gray">
                                            <div>Provide consumers with abundant</div>
                                            <div>opportunities to purchase products and</div>
                                            <div>services. Merchants can more easily accept</div>
                                            <div>digital currency payments, establish a more</div>
                                            <div>reliable transaction environment, enhance</div>
                                            <div>consumer trust, and facilitate more</div>
                                            <div>transactions.</div>
                                        </div>
                                    </div>
                                    <div className="mt-36">
                                        <div className="w-20 mb-10">
                                            <img src="/images/arrow_person.png" alt=""></img>
                                        </div>
                                        <div className="text-word-gray">
                                            <div>3AT tokens provide excellent liquidity on</div>
                                            <div>primary exchanges, allowing individual traders</div>
                                            <div>to quickly seize market arbitrage opportunities.</div>
                                            <div> High liquidity ensures the rapid execution of</div>
                                            <div>transactions, enables individual investors to</div>
                                            <div>conduct buying and selling operations more</div>
                                            <div>flexibly, improves transaction efficiency,</div>
                                            <div> and takes advantage of market fluctuations to the</div>
                                            <div> greatest extent.</div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="w-full flex justify-center text-center mt-48 bg-primary-green py-10">
                            <div className="w-11/12">
                                <FooterBar isWhite></FooterBar>
                            </div>
                        </div>
                    </div> */}
                    <div className="w-full bg-primary-green flex justify-center text-center mt-8 absolute bottom-0 py-10">
                        <div className="w-11/12">
                            <FooterBar isWhite></FooterBar>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Why      