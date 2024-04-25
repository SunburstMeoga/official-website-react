import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import FooterBar from "@/components/FooterBar";

const How = () => {
    const navigator = useNavigate()
    function toHome() {
        navigator('/')
    }
    function toWhy() {
        navigator('/why')
    }

    let [currentOneDev, changeOneDev] = useState(0)
    const clickDevOneItem = (index) => {

        changeOneDev(currentOneDev = index)
        console.log(index, currentOneDev)
    }

    let [currentTwoDev, changeTwoDev] = useState(1)
    const clickDevTwoItem = (index) => {

        changeTwoDev(currentTwoDev = index)
        console.log(index, currentOneDev)
    }
    const devProspectsPCOne = [
        { imgUrl: '/images/Rectangle-16.png', title: 'Payment and transaction field', content: 'The stable currency attribute of 3AT makes it play an important role in payment and transaction scenarios. In the future, we will cooperate with credit card companies to support payment by deducting 3AT when swiping credit cards in daily consumption, providing users with more flexible and convenient payment methods.' },
        { imgUrl: '/images/Rectangle 17.png', title: 'Blockchain ecosystem integration', content: "'3AT's choice of hah as the underlying technology indicates the possibility of integrating more blockchain ecosystems into its stablecoin system. This will bring users more choices and application scenarios for digital assets." },
    ]
    const devProspectsPCTwo = [
        { imgUrl: '/images/Rectangle 18.png', title: 'Financial Services Expansion', content: "Due to its nature of being linked to fiat currency, 3AT is expected to become an ideal choice in the financial services sector. Future expansion includes innovative applications of loans, loans, and other financial derivatives, providing users with more diversified financial services" },
        { imgUrl: '/images/Rectangle 19.png', title: 'Cross border transactions', content: "Due to its stability and global transparency, 3AT is expected to play an important role in cross-border transactions. It can serve as a more reliable digital asset, promoting global trade and financial flows, and reducing the risk of exchange rate fluctuations in transactions" },
    ]

    return (
        <div className="">
            <div className="">
                <div className="relative">
                    <div className="absolute -z-10 lg:hidden">
                        <img src="/images/mobile/why-banner.png" alt=""></img>
                    </div>
                    <div className="absolute -z-10 top-0-1 hidden lg:block">
                        <img className="" src="/images/pc/why-bg.png" alt=""></img>
                    </div>
                    <div className="lg:flex lg:justify-start lg:items-center lg:pt-6-3 lg:w-88-6 lg:mr-auto lg:ml-auto">
                        <div className="flex flex-col justify-start items-center lg:w-47-3 lg:items-start">
                            <div className="mt-5-4 w-12-5 lg:mt-0-1">
                                <img alt="" src="/images/mobile/logo.png"></img>
                            </div>
                            <div className="flex text-2-5 flex-col justify-start items-center lg:order-2 lg:text lg:flex-row lg:w-40-5 lg:text-4-0 lg:mt-1-6">
                                <div className="text-word-gray  font-black w-17-8 text-center mt-14-0 leading-point-114 lg:mt-0-1 lg:text-left  lg:w-auto ">Why Choose </div>
                                <div className="text-primary-orange font-black w-20-2 text-center pb-0-2 leading-point-114 lg:text-left lg:w-auto lg:text-word-gray lg:ml-2-0 ">3AT</div>
                            </div>
                            <div className="lg:order-4 lg:mt-1-3">
                                <div className="text-1-0 text-word-gray leading-point-140 w-16-7 lg:w-47-3 lg:text-1-5">
                                    3AT stands out with its unique
                                    stablecoin model. The innovative
                                    integration of blockchain technology
                                    makes it a safe, efficient and
                                    convenient digital asset, bringing a
                                    new experience to transactions.
                                </div>
                            </div>
                            <div className="lg:flex lg:justify-start lg:items-center lg:mt-1-6 lg:order-3">
                                <div className="mt-1-3 lg:mt-auto">
                                    <div className="green-button jump-button" onClick={() => toHome()}>Home</div>
                                </div>
                                <div className="mt-0-4 lg:mt-auto lg:ml-1-6">
                                    <div className="orange-button jump-button" onClick={() => toWhy()}>Why Choose 3AT</div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:block right-0-1 top-0-1 hidden top w-33-3 ml-3-6">
                            <img alt="" src="/images/pc/why-banner.png"></img>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="relative mt-2-2 pt-3-5">
                        <div className="absolute top-0-1 left-auto -z-10 lg:hidden">
                            <img alt="" src="/images/mobile/why-module-one.png"></img>
                        </div>
                        <div className="flex flex-col justify-start items-center">
                            <div className="w-21-9 lg:w-88-0">
                                <div className="w-4-5 h-0-2 bg-primary-orange lg:w-7-4 lg:h-0-5"></div>
                                <div className="text-2-0 text-word-gray leading-point-114 font-bold mt-0-7 lg:text-3-0 lg:mt-2-4 lg:w-75-0">
                                    3AT is an advanced stablecoin option that <span className="text-primary-orange">provides multiple values</span> fro individuals and businesses.
                                </div>
                            </div>
                        </div>
                        <div className="text-word-gray relative lg:w-88-0 lg:mr-auto lg:ml-auto lg:mt-4-0">
                            <div className="flex flex-col justify-center items-center ">
                                <div className="flex flex-col justify-start items-start w-21-9 lg:w-88-0 lg:flex-row lg:justify-between lg:items-start">
                                    <div className="lg:order-2 lg:flex lg:flex-col lg:items-center lg:px-2-0">
                                        <div className="relative my-2-8 text-1-0 font-bold lg:order-2 lg:my-auto lg:mt-0-1 lg:text-1-5 lg:font-black">
                                            <div className="w-21-8 lg:w-38-1">
                                                <img alt="" src="/images/mobile/flower.png"></img>
                                            </div>
                                            <div className="absolute top-2-1 left-7-4 lg:left-13-5 lg:top-4-2">
                                                <div className="text-white text-center">1 to 1 <br></br> Fiat Currency <br></br> Storage</div>
                                            </div>
                                            <div className="absolute top-8-1 right-1-2 lg:right-3-5 lg:top-14-2">
                                                <div className="text-white text-center">High <br></br> Liquidity</div>
                                            </div>
                                            <div className="absolute bottom-4-3 right-3-2 lg:right-5-5 lg:bottom-8-2">
                                                <div className="text-white text-center">Full <br></br> Transparency</div>
                                            </div>
                                            <div className="absolute bottom-3-3 left-3-8 lg:left-6-5 lg:bottom-6-2">
                                                <div className="text-white text-center">Top Notch <br></br> Customer <br></br>Support</div>
                                            </div>
                                            <div className="absolute top-8-1 left-0-1 lg:left-1-2 lg:top-12-7">
                                                <div className="text-white text-right">Meet <br></br> Rectangle <br></br>Requirements</div>
                                            </div>
                                        </div>
                                        <div className="lg:order-1">
                                            <div className="font-black">
                                                <span className="text-1-5 mr-0-6">01</span><span className="lg:hidden">1 to 1 Fiat Currency Storage</span>
                                            </div>
                                            <div className="text-1-3 leading-point-140 mt-0-8 lg:w-23-8">
                                                All 3AT tokens are pegged to fiat currencies and are 100% backed by fiat reserves, ensuring sufficient reserves for exchange.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:order-3 lg:flex-1 lg:mt-12-0 ">
                                        <div className="mt-1-6">
                                            <div className="font-black">
                                                <span className="text-1-5 mr-0-6">02</span><span className="lg:hidden">High Liquidity</span>
                                            </div>
                                            <div className="text-1-3 leading-point-140 mt-0-8 ">
                                                The complete blockchain ecosystem based on hah enables 3AT to have excellent liquidity and provide users with an excellent trading experience.
                                            </div>
                                        </div>
                                        <div className="mt-1-6 lg:mt-12-0">
                                            <div className="font-black">
                                                <span className="text-1-5 mr-0-6">03</span><span className="lg:hidden">Full Transparency</span>
                                            </div>
                                            <div className="text-1-3 leading-point-140 mt-0-8">
                                                The professional customer service team provides round-the-clock service to ensure that users can receive support at any time.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:order-1 lg:flex lg:flex-col lg:flex-1 lg:border-t lg:border-transparent lg:mt-12-0 ">
                                        <div className="mt-1-6 lg:order-2 lg:mt-8-0">
                                            <div className="font-black lg:w-full lg:flex lg:justify-end ">
                                                <span className="text-1-5 mr-0-6">04</span><span className="lg:hidden">Top Notch Customer Support</span>
                                            </div>
                                            <div className="text-1-3 leading-point-140 mt-0-8 ">
                                                The issuance and reserve assets of 3AT tokens are open and transparent, providing users with real-time checkable information.
                                            </div>
                                        </div>
                                        <div className="mt-1-6 lg:order-1">
                                            <div className="font-black lg:flex lg:justify-end">
                                                <span className="text-1-5 mr-0-6">05</span><span className="lg:hidden">Meet Regulatory Requirements</span>
                                            </div>
                                            <div className="text-1-3 leading-point-140 mt-0-8 ">
                                                3AT strictly follows the world's first-class regulatory standards, including anti-money laundering, combating terrorist financing, and formulating customer standards.
                                                standards and implement standardized compliance measures.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-center mt-4-5 lg:hidden">
                            <div className="w-21-9 lg:w-88-0">
                                <div className="w-4-5 h-0-2 bg-primary-orange lg:w-7-4 lg:h-0-5"></div>
                                <div className="text-2-0 text-word-gray leading-point-114 font-bold mt-0-7 lg:text-3-0 lg:mt-2-4 lg:w-75-0">
                                    3AT token is <span className="text-primary-orange">revolutionizing</span> <br className="hidden lg:block"></br> the global financial industry
                                </div>
                            </div>
                            <div className="">
                                <div className="-mt-1-6 flex flex-col justify-start items-center w-full">
                                    <div className="">
                                        <img className="" alt="" src="/images/mobile/arrow-up.png"></img>
                                    </div>
                                    <div className="w-20-2 -mt-4-0">
                                        <div className="flex justify-start items-end">
                                            <div className="text-primary-orange">
                                                <div className="text-1-5">Personal</div>
                                                <div className="w-13-1 mt-0-1">
                                                    <img className="" alt="" src="/images/mobile/orange-line.png"></img>
                                                </div>
                                            </div>
                                            <div className="ml-1-2 w-4-6">
                                                <img className="" src="/images/mobile/personal.png" alt=""></img>
                                            </div>
                                        </div>
                                        <div className="text-1-2 font-medium text-word-gray mt-0-4 leading-point-140">
                                            3AT tokens provide excellent liquidity on primary exchanges, allowing individual traders to quickly seize market arbitrage opportunities. High liquidity ensures the rapid execution of transactions, enables individual investors to conduct buying and selling operations more flexibly, improves transaction efficiency, and takes advantage of market fluctuations to the greatest extent.
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-start items-center w-full">
                                    <div className="">
                                        <img className="" alt="" src="/images/mobile/arrow-down.png"></img>
                                    </div>
                                    <div className="w-20-2 -mt-3-6">
                                        <div className="w-4-8 -mt-8-0 ml-2-0">
                                            <img className="" src="/images/mobile/project.png" alt=""></img>
                                        </div>
                                        <div className="mt-3-5">
                                            <div className="text-primary-green">
                                                <div className="text-1-5">Project</div>
                                                <div className="w-13-1 mt-1-1">
                                                    <img className="" alt="" src="/images/mobile/green-line.png"></img>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-1-2 font-medium text-word-gray mt-0-4 leading-point-140">
                                            Provide consumers with abundant opportunities to purchase products and services. Merchants can more easily accept digital currency payments, establish a more reliable transaction environment, enhance consumer trust, and facilitate more transactions.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6-8 ">
                            <div className="flex flex-col justify-start w-full items-center green-module-bg h-21-3 pt-3-0 ">
                                <div className="lg:w-88-0">
                                    <div className=" bg-primary-orange lg:w-7-4 lg:h-0-5"></div>
                                    <div className=" text-word-gray leading-point-114 font-bold mt-0-7 lg:text-3-0 lg:mt-2-4 lg:w-75-0">
                                        3AT token is <span className="text-primary-orange">revolutionizing</span> <br className="hidden lg:block"></br> the global financial industry
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-start w-full items-center  -mt-5-2">
                                <div className="lg:w-88-0 relative">
                                    <div className="w-88-0 absolute top-0-1">
                                        <img src="/images/pc/arrow-all.png" alt=""></img>
                                    </div>
                                    <div className="flex justify-between items-center ">
                                        <div className="flex justify-start items-start mt-13-1">
                                            <div>
                                                <div className="w-7-5 ml-2-0">
                                                    <img src="/images/pc/project.png"></img>
                                                </div>
                                                <div className="leading-point-140 text-word-gray w-26-5 font-medium mt-6-4 text-1-3">
                                                    Provide consumers with abundant opportunities to purchase products and services. Merchants can more easily accept digital currency payments, establish a more reliable transaction environment, enhance consumer trust, and facilitate more transactions.
                                                </div>
                                            </div>
                                            <div className="text-primary-green text-2-5 font-extrabold mt-10-2 ml-9-4">Project</div>
                                        </div>
                                        <div className="flex justify-start items-start ml-3-2 -mt-5-0 h-24-1">
                                            <div className="text-primary-orange text-2-5 font-extrabold mt-6-2 mr-8-4">Personal</div>
                                            <div>
                                                <div className="w-7-5 ml-1-0">
                                                    <img src="/images/pc/personal.png"></img>
                                                </div>
                                                <div className="leading-point-140 text-word-gray w-27-5 font-medium mt-3-0  text-1-3">
                                                    3AT tokens provide excellent liquidity on primary exchanges, allowing individual traders to quickly seize market arbitrage opportunities. High liquidity ensures the rapid execution of transactions, enables individual investors to conduct buying and selling operations more flexibly, improves transaction efficiency, and takes advantage of market fluctuations to the greatest extent.
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default How