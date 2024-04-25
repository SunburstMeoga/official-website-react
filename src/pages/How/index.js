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

    const devProspects = [
        { imgUrl: '/images/mobile/payment.png', title: 'Payment and transaction field', content: 'The stable currency attribute of 3AT makes it play an important role in payment and transaction scenarios. In the future, we will cooperate with credit card companies to support payment by deducting 3AT when swiping credit cards in daily consumption, providing users with more flexible and convenient payment methods.' },
        { imgUrl: '/images/mobile/blockchain.png', title: 'Blockchain ecosystem integration', content: "'3AT's choice of hah as the underlying technology indicates the possibility of integrating more blockchain ecosystems into its stablecoin system. This will bring users more choices and application scenarios for digital assets." },
        { imgUrl: '/images/mobile/financial.png', title: 'Financial Services Expansion', content: "Due to its nature of being linked to fiat currency, 3AT is expected to become an ideal choice in the financial services sector. Future expansion includes innovative applications of loans, loans, and other financial derivatives, providing users with more diversified financial services" },
        { imgUrl: '/images/mobile/cross.png', title: 'Cross border transactions', content: "Due to its stability and global transparency, 3AT is expected to play an important role in cross-border transactions. It can serve as a more reliable digital asset, promoting global trade and financial flows, and reducing the risk of exchange rate fluctuations in transactions" },

    ]

    return (
        <div className="">
            <div className="">
                <div className="relative">
                    <div className="absolute -z-10 lg:hidden -top-1-6">
                        <img src="/images/mobile/how-banner.png" alt=""></img>
                    </div>
                    <div className="absolute -z-10 top-0-1 hidden lg:block">
                        <img className="" src="/images/pc/why-bg.png" alt=""></img>
                    </div>
                    <div className="lg:flex lg:justify-start lg:items-start lg:pt-9-9 lg:w-88-6 lg:mr-auto lg:ml-auto ">
                        <div className="flex flex-col justify-start items-center lg:w-47-3 lg:items-start">
                            <div className="mt-5-4 w-12-5 lg:mt-0-1">
                                <img alt="" src="/images/mobile/logo.png"></img>
                            </div>
                            <div className="mt-1-4 flex text-2-5 flex-col justify-start items-center lg:order-2 lg:text lg:flex-row lg:w-40-5 lg:text-4-0 lg:mt-1-6">
                                <div className="text-word-gray  font-black w-17-8 text-center mt-14-0 leading-point-114 lg:mt-0-1 lg:text-left  lg:w-auto ">How <span className="text-primary-orange">3AT</span> </div>
                                <div className="text-word-gray font-black w-20-2 text-center pb-0-2 leading-point-114 lg:text-left lg:w-auto lg:text-word-gray lg:ml-2-0 ">Work</div>
                            </div>
                            <div className="mt-1-5 lg:order-4 lg:mt-1-3">
                                <div className="text-1-0 text-word-gray leading-point-140 w-22-3 lg:w-48-5 lg:text-1-5">
                                    3AT tokens are digital assets on the blockchain, with each 3AT token linked to the corresponding legal tender in a 1:1 ratio (e.g. 1 3AT=1 Hong Kong dollar), and 100% supported by 3AT reserves. Defined as a stablecoin, linked to fiat currency, aimed at providing price stability.
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
                        <div className="lg:block right-0-1 top-0-1 hidden top w-51-0 -ml-3-6">
                            <img alt="" src="/images/pc/how-banner.png"></img>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="relative mt-2-2 pt-3-5">
                        <div className="absolute top-0-1 left-auto -z-10 lg:hidden">
                            <img alt="" src="/images/mobile/how-module-one.png"></img>
                        </div>
                        <div className="flex flex-col justify-start items-center lg:hidden">
                            <div className="w-21-9 lg:w-88-0">
                                <div className="w-4-5 h-0-2 bg-primary-orange lg:w-7-4 lg:h-0-5"></div>
                                <div className="w-14-3 text-2-5 text-word-gray leading-point-114 font-bold mt-0-7 lg:text-3-0 lg:mt-2-4 lg:w-75-0">
                                    Issuance <span className="text-primary-orange">mechanism</span>
                                </div>
                            </div>
                        </div>
                        <div className="hidden flex-col justify-start items-center green-module-bg lg:flex lg:h-21-3 lg:pt-3-0 ">
                            <div className="w-21-9 lg:w-88-0">
                                <div className="w-4-5 h-0-2 bg-primary-orange lg:w-7-4 lg:h-0-5"></div>
                                <div className="w-14-3 text-2-5 text-word-gray leading-point-114 font-bold mt-0-7 lg:text-3-0 lg:mt-2-4 lg:w-75-0">
                                    Issuance <span className="text-primary-orange">mechanism</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:hidden">
                            <div className="flex justify-start items-start">
                                <div className="w-9-1 ">
                                    <img src="/images/mobile/issuance-bg.png" alt=""></img>
                                </div>
                                <div className="-ml-3-0 mt-6-0">
                                    <div className="flex justify-start items-start">
                                        <div className="text-title-green text-2-0 font-bold">1</div>
                                        <div className="ml-1-0">
                                            <div className="text-primary-green mb-0-8 text-1-3 font-black mt-0-6">Hosting and support</div>
                                            <div className="w-16-8 text-word-gray leading-point-140 text-0-9 font-medium">
                                                The 3AT project will first set up a custodian to ensure that sufficient legal currency (such as Hong Kong dollars, US dollars) is deposited in the bank account as support for the 3AT tokens.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-start items-start mt-4-7">
                                        <div className="text-title-green text-2-0 font-bold">2</div>
                                        <div className="ml-1-0">
                                            <div className="text-primary-green mb-0-8 text-1-3 font-black mt-0-6">User purchase</div>
                                            <div className="w-16-8 text-word-gray leading-point-140 text-0-9 font-medium">
                                                Investors can participate in the issuance by purchasing from the 3AT project and paying the corresponding amount of legal currency. In the early stage of the project, only professional investors will be supported for token purchases and transactions.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-start items-start mt-2-0">
                                        <div className="text-title-green text-2-0 font-bold">3</div>
                                        <div className="ml-1-0">
                                            <div className="text-primary-green mb-0-8 text-1-3 font-black mt-0-6">Fiat currency peg</div>
                                            <div className="w-16-8 text-word-gray leading-point-140 text-0-9 font-medium">
                                                The project party anchors the legal currency received and the issued 3AT tokens at a ratio of 1:1 to ensure that each 3AT token is supported by the corresponding legal currency.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-start items-start mt-3-7">
                                        <div className="text-title-green text-2-0 font-bold">4</div>
                                        <div className="ml-1-0">
                                            <div className="text-primary-green mb-0-8 text-1-3 font-black mt-0-6">Reserve support</div>
                                            <div className="w-16-8 text-word-gray leading-point-140 text-0-9 font-medium">
                                                All issued 3AT tokens will be backed by pre-prepared legal currency reserves to ensure the stability and convertibility of the tokens.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-start items-start mt-5-2">
                                        <div className="text-title-green text-2-0 font-bold">5</div>
                                        <div className="ml-1-0">
                                            <div className="text-primary-green mb-0-8 text-1-3 font-black mt-0-6">Transparent records</div>
                                            <div className="w-16-8 text-word-gray leading-point-140 text-0-9 font-medium">
                                                The 3AT project may use blockchain technology and smart contracts to record the issuance of tokens and publicly and transparently display the current reserve asset records.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block -mt-9-6">
                            <div className="w-full flex flex-col justify-start items-center">
                                <div className="w-88-0 flex justify-between items-start">
                                    <div className="w-23-6">
                                        <div className="text-primary-green text-2-0 leading-point-140 font-black mb-1-7">Hosting and support</div>
                                        <div className="text-word-gray text-1-3 leading-point-140 font-medium">
                                            The 3AT project will first set up a custodian to ensure that sufficient legal currency (such as Hong Kong dollars, US dollars) is deposited in the bank account as support for the 3AT tokens.
                                        </div>
                                    </div>
                                    <div className="w-23-6">
                                        <div className="text-primary-green text-2-0 leading-point-140 font-black mb-1-7">Fiat currency peg</div>
                                        <div className="text-word-gray text-1-3 leading-point-140 font-medium">
                                            The project party anchors the legal currency received and the issued 3AT tokens at a ratio of 1:1 to ensure that each 3AT token is supported by the corresponding legal currency.
                                        </div>
                                    </div>
                                    <div className="w-23-6">
                                        <div className="text-primary-green text-2-0 leading-point-140 font-black mb-1-7">Transparent records</div>
                                        <div className="text-word-gray text-1-3 leading-point-140 font-medium">
                                            The 3AT project may use blockchain technology and smart contracts to record the issuance of tokens and publicly and transparently display the current reserve asset records.
                                        </div>
                                    </div>
                                </div>

                                <div className="w-88-0">
                                    <img src="/images/pc/issuance-bg.png"></img>
                                </div>
                                <div className="w-60-0 flex justify-between items-start">
                                    <div className="w-23-6">
                                        <div className="text-primary-green text-2-0 leading-point-140 font-black mb-1-7">User purchase</div>
                                        <div className="text-word-gray text-1-3 leading-point-140 font-medium">
                                            Investors can participate in the issuance by purchasing from the 3AT project and paying the corresponding amount of legal currency. In the early stage of the project, only professional investors will be supported for token purchases and transactions.
                                        </div>
                                    </div>
                                    <div className="w-23-6">
                                        <div className="text-primary-green text-2-0 leading-point-140 font-black mb-1-7">Reserve support</div>
                                        <div className="text-word-gray text-1-3 leading-point-140 font-medium">
                                            All issued 3AT tokens will be backed by pre-prepared legal currency reserves to ensure the stability and convertibility of the tokens.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-center mt-3-7">
                            <div className="w-21-9 lg:w-88-0">
                                <div className="w-4-5 h-0-2 bg-primary-orange lg:w-7-4 lg:h-0-5"></div>
                                <div className="w-14-3 text-2-5 text-word-gray leading-point-114 font-bold mt-0-7 lg:text-3-0 lg:mt-2-4 lg:w-75-0">
                                    Development <span className="text-primary-orange">prospects</span>
                                </div>
                            </div>
                            <div className="w-21-9 mt-2-4 lg:hidden">
                                <div>
                                    {devProspects.map((item, index) => {
                                        return <div className="" key={index}>
                                            <div className="w-full h-8-1 rounded-2xl overflow-hidden relative">
                                                <div className="w-full">
                                                    <img className="" src={item.imgUrl} alt=""></img>
                                                </div>
                                                <div className="absolute z-10 bottom-0-1 text-1-2 font-bold text-white leading-point-140 left-0-1 bg-black-opaity-30 w-full h-2-4 flex justify-start items-center pl-0-8">
                                                    {item.title}
                                                </div>
                                            </div>
                                            <div className="mt-1-9 w-full leading-point-127 text-0-9 text-word-gray  mb-2-8">
                                                {item.content}
                                            </div>
                                        </div>
                                    })}
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