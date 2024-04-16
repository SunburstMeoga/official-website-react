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
        <div>
            <div className="md:hidden">
                <div className="relative pt-0.5 ">
                    <div className="absolute w-full">
                        <img src="/images/mobile/how-gradient.png" alt=""></img>
                    </div>
                    <div className="relative z-10 flex flex-col justify-start items-center">
                        <div className="w-vw-50-9 mt-vh-10-9">
                            <img src="/images/logo.png"></img>
                        </div>
                        <div className="text-word-gray w-11/12 text-center mt-vh-25-6 font-vw-11-0 font-bold leading-10">
                            How <span className="text-primary-orange">3AT</span>
                        </div>
                        <div className=" text-word-gray font-vw-11-0 font-bold text-center mt-vh-1-0 leading-10 pb-2">
                            Works
                        </div>
                        <div className="text-word-gray w-vw-90-2 text-left">
                            3AT tokens are digital assets on the blockchain, with each 3AT token linked to the corresponding legal tender in a 1:1 ratio (e.g. 1 3AT=1 Hong Kong dollar), and 100% supported by 3AT reserves. Defined as a stablecoin, linked to fiat currency, aimed at providing price stability.
                        </div>
                        <div className="w-8/12 mt-vh-2-0">
                            <div className="green-button  rounded-md" onClick={() => toHome()}>Home</div>
                        </div>
                        <div className="w-8/12">
                            <div className="orange-button rounded-md mt-vh-1-0" onClick={() => toWhy()}>Why Choose 3AT</div>
                        </div>
                    </div>
                </div>
                <div className="relative pt-0.5 mt-vh-5-1">
                    <div className="absolute w-full">
                        <img src="/images/mobile/how-module-bg.png" alt=""></img>
                    </div>
                    <div className="relative z-10 flex flex-col justify-start items-center">
                        <div className="w-11/12 mt-vh-6-8">
                            <div className="w-1/5 h-1 bg-primary-orange"></div>
                            <div className="text-3xl w-full text-word-gray mt-2">
                                <div className=" leading-8">
                                    Issuance
                                </div>
                                <div className="text-primary-orange">
                                    mechanism
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full relative">
                        <div className="w-32">
                            <img className="" src="/images/mobile/issuance.png"></img>
                        </div>
                        <div className="absolute top-0 right-0 flex flex-col justify-start items-end">
                            <div className="flex justify-start items-start w-10/12 px-4 mt-20">
                                <div className="text-title-green text-4xl mr-4">1</div>
                                <div className="mt-2">
                                    <div className="font-bold text-primary-green text-2xl">Hosting and support</div>
                                    <div className="text-word-gray font-light font-vw-3-7 leading-5">The 3AT project will first set up a custodian to ensure that sufficient legal currency (such as Hong Kong dollars, US dollars) is deposited in the bank account as support for the 3AT tokens.</div>
                                </div>
                            </div>
                            <div className="flex justify-start items-start w-10/12 px-4 mt-12">
                                <div className="text-title-green text-4xl mr-4">2</div>
                                <div className="mt-2">
                                    <div className="font-bold text-primary-green text-2xl">User purchase</div>
                                    <div className="text-word-gray font-light font-vw-3-7 leading-5">Investors can participate in the issuance by purchasing from the 3AT project and paying the corresponding amount of legal currency. In the early stage of the project, only professional investors will be supported for token purchases and transactions.</div>
                                </div>
                            </div>
                            <div className="flex justify-start items-start w-10/12 px-4 mt-2">
                                <div className="text-title-green text-4xl mr-4">3</div>
                                <div className="mt-2">
                                    <div className="font-bold text-primary-green text-2xl">Fiat currency peg</div>
                                    <div className="text-word-gray font-light font-vw-3-7 leading-5">The project party anchors the legal currency received and the issued 3AT tokens at a ratio of 1:1 to ensure that each 3AT token is supported by the corresponding legal currency.</div>
                                </div>
                            </div>
                            <div className="flex justify-start items-start w-10/12 px-4 mt-10">
                                <div className="text-title-green text-4xl mr-4">4</div>
                                <div className="mt-2">
                                    <div className="font-bold text-primary-green text-2xl">Reserve support</div>
                                    <div className="text-word-gray font-light font-vw-3-7 leading-5">All issued 3AT tokens will be backed by pre-prepared legal currency reserves to ensure the stability and convertibility of the tokens.</div>
                                </div>
                            </div>
                            <div className="flex justify-start items-start w-10/12 px-4 mt-16">
                                <div className="text-title-green text-4xl mr-4">5</div>
                                <div className="mt-2">
                                    <div className="font-bold text-primary-green text-2xl">Transparent records</div>
                                    <div className="text-word-gray font-light font-vw-3-7 leading-5">The 3AT project may use blockchain technology and smart contracts to record the issuance of tokens and publicly and transparently display the current reserve asset records.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative z-10 flex flex-col justify-start items-center">
                        <div className="w-11/12 mt-vh-6-8">
                            <div className="w-1/5 h-1 bg-primary-orange"></div>
                            <div className="text-3xl w-full text-word-gray mt-2">
                                <div className=" leading-8">
                                    Development
                                </div>
                                <div className="text-primary-orange">
                                    prospects
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative z-10 flex flex-col justify-start items-center w-11/12 mr-auto ml-auto">
                        <div className="mt-vh-2-4">
                            <div className="overflow-hidden rounded-xl relative mt-14 mb-6">
                                <img className="" src="/images/mobile/payment-transaction-field.png" alt=""></img>
                                <div className="pl-4 py-1 bg-black-opaity-30 absolute bottom-0 left-0 z-10 w-full text-white text-lg font-bold">Payment and transaction field</div>
                            </div>
                            <div className="text-word-gray font-light font-vw-3-7 leading-5">
                                The stable currency attribute of 3AT makes it play an important role in payment and transaction scenarios. In the future, we will cooperate with credit card companies to support payment by deducting 3AT when swiping credit cards in daily consumption, providing users with more flexible and convenient payment methods.
                            </div>
                        </div>

                        <div className="mt-vh-2-4">
                            <div className="overflow-hidden rounded-xl relative mb-6">
                                <img className="" src="/images/mobile/blockchain-ecosystem.png" alt=""></img>
                                <div className="pl-4 py-1 bg-black-opaity-30 absolute bottom-0 left-0 z-10 w-full text-white text-lg font-bold">Blockchain ecosystem integration</div>
                            </div>
                            <div className="text-word-gray font-light font-vw-3-7 leading-5">
                                3AT's choice of hah as the underlying technology indicates the possibility of integrating more blockchain ecosystems into its stablecoin system. This will bring users more choices and application scenarios for digital assets.
                            </div>
                        </div>

                        <div className="mt-vh-2-4">
                            <div className="overflow-hidden rounded-xl relative mb-6">
                                <img className="" src="/images/mobile/financial-services.png" alt=""></img>
                                <div className="pl-4 py-1 bg-black-opaity-30 absolute bottom-0 left-0 z-10 w-full text-white text-lg font-bold">Financial Services Expansion</div>
                            </div>
                            <div className="text-word-gray font-light font-vw-3-7 leading-5">
                                Due to its nature of being linked to fiat currency, 3AT is expected to become an ideal choice in the financial services sector. Future expansion includes innovative applications of loans, loans, and other financial derivatives, providing users with more diversified financial services
                            </div>
                        </div>

                        <div className="mt-vh-2-4">
                            <div className="overflow-hidden rounded-xl relative mb-6">
                                <img className="" src="/images/mobile/cross-border-transactions.png" alt=""></img>
                                <div className="pl-4 py-1 bg-black-opaity-30 absolute bottom-0 left-0 z-10 w-full text-white text-lg font-bold">Cross border transactions</div>
                            </div>
                            <div className="text-word-gray font-light font-vw-3-7 leading-5">
                                Due to its stability and global transparency, 3AT is expected to play an important role in cross-border transactions. It can serve as a more reliable digital asset, promoting global trade and financial flows, and reducing the risk of exchange rate fluctuations in transactions
                            </div>
                        </div>

                    </div>
                    <div className="w-full pt-4 pb-6 flex justify-center text-center mt-vh-39-6 bg-primary-green relative z-10">
                        <div className="w-11/12">
                            <FooterBar isWhite></FooterBar>
                        </div>
                    </div>
                </div>

                {/* <div className="">
                    <img alt="" src="/images/mobile/mobile-how-bg.png"></img>
                </div>
                <div className="absolute flex flex-col justify-start items-center top-0 left-0 w-full h-full">
                    <div className="flex flex-col justify-start items-center mt-24 w-full mb-2">
                        <div className="w-1/2 mb-52">
                            <img src="/images/logo.png"></img>
                        </div>
                        <div className="w-2/3 text-word-gray text-5xl font-bold text-center mb-1">
                            How <span className="text-primary-orange">3AT</span>
                        </div>
                        <div className="text-word-gray text-5xl font-bold mb-6">
                            Works
                        </div>
                        <div className="text-word-gray w-11/12 text-left mb-4">
                            3AT tokens are digital assets on the blockchain, with each 3AT token linked to the corresponding legal tender in a 1:1 ratio (e.g. 1 3AT=1 Hong Kong dollar), and 100% supported by 3AT reserves. Defined as a stablecoin, linked to fiat currency, aimed at providing price stability.
                        </div>
                        <div className="w-8/12">
                            <div className="green-button py-3 text-2xl rounded-md mb-2" onClick={() => toHome()}>Home</div>
                        </div>
                        <div className="w-8/12">
                            <div className="orange-button py-3 text-2xl rounded-md mb-2" onClick={() => toWhy()}>Why Choose 3AT</div>
                        </div>
                    </div>
                    <div className="w-11/12 mt-14 mb-2">
                        <div className="w-1/5 h-1 bg-primary-orange "></div>
                        <div className="text-5xl w-full text-word-gray mt-2 ">
                            <div className="font-bold leading-10">
                                Issuance
                            </div>
                            <div className="text-primary-orange font-bold leading-10">
                                mechanism
                            </div>
                        </div>
                    </div>
                    <div className="w-full relative mb-28">
                        <div className="w-32">
                            <img className="" src="/images/mobile/issuance.png"></img>
                        </div>
                        <div className="absolute top-0 right-0 flex flex-col justify-start items-end">
                            <div className="flex justify-start items-start w-10/12 px-4 mt-20">
                                <div className="text-title-green text-4xl mr-4">1</div>
                                <div className="mt-2">
                                    <div className="font-bold text-primary-green text-2xl">Hosting and support</div>
                                    <div className="text-word-gray font-light font-vw-3-7 leading-5">The 3AT project will first set up a custodian to ensure that sufficient legal currency (such as Hong Kong dollars, US dollars) is deposited in the bank account as support for the 3AT tokens.</div>
                                </div>
                            </div>
                            <div className="flex justify-start items-start w-10/12 px-4 mt-12">
                                <div className="text-title-green text-4xl mr-4">2</div>
                                <div className="mt-2">
                                    <div className="font-bold text-primary-green text-2xl">User purchase</div>
                                    <div className="text-word-gray font-light font-vw-3-7 leading-5">Investors can participate in the issuance by purchasing from the 3AT project and paying the corresponding amount of legal currency. In the early stage of the project, only professional investors will be supported for token purchases and transactions.</div>
                                </div>
                            </div>
                            <div className="flex justify-start items-start w-10/12 px-4 mt-2">
                                <div className="text-title-green text-4xl mr-4">3</div>
                                <div className="mt-2">
                                    <div className="font-bold text-primary-green text-2xl">Fiat currency peg</div>
                                    <div className="text-word-gray font-light font-vw-3-7 leading-5">The project party anchors the legal currency received and the issued 3AT tokens at a ratio of 1:1 to ensure that each 3AT token is supported by the corresponding legal currency.</div>
                                </div>
                            </div>
                            <div className="flex justify-start items-start w-10/12 px-4 mt-10">
                                <div className="text-title-green text-4xl mr-4">4</div>
                                <div className="mt-2">
                                    <div className="font-bold text-primary-green text-2xl">Reserve support</div>
                                    <div className="text-word-gray font-light font-vw-3-7 leading-5">All issued 3AT tokens will be backed by pre-prepared legal currency reserves to ensure the stability and convertibility of the tokens.</div>
                                </div>
                            </div>
                            <div className="flex justify-start items-start w-10/12 px-4 mt-16">
                                <div className="text-title-green text-4xl mr-4">5</div>
                                <div className="mt-2">
                                    <div className="font-bold text-primary-green text-2xl">Transparent records</div>
                                    <div className="text-word-gray font-light font-vw-3-7 leading-5">The 3AT project may use blockchain technology and smart contracts to record the issuance of tokens and publicly and transparently display the current reserve asset records.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-11/12 -mt-2 mb-16">
                        <div className="w-1/5 h-1 bg-primary-orange "></div>
                        <div className="text-5xl w-full text-word-gray mt-2 ">
                            <div className="font-bold leading-10">
                                Development
                            </div>
                            <div className="text-primary-orange font-bold leading-10">
                                prospects
                            </div>
                        </div>
                        <div className="mt-vh-2-4">
                            <div className="overflow-hidden rounded-xl relative mt-14 mb-6">
                                <img className="" src="/images/mobile/payment-transaction-field.png" alt=""></img>
                                <div className="pl-4 py-1 bg-black-opaity-30 absolute bottom-0 left-0 z-10 w-full text-white text-lg font-bold">Payment and transaction field</div>
                            </div>
                            <div className="text-word-gray font-light font-vw-3-7 leading-5">
                                The stable currency attribute of 3AT makes it play an important role in payment and transaction scenarios. In the future, we will cooperate with credit card companies to support payment by deducting 3AT when swiping credit cards in daily consumption, providing users with more flexible and convenient payment methods.
                            </div>
                        </div>

                        <div className="mt-vh-2-4">
                            <div className="overflow-hidden rounded-xl relative mb-6">
                                <img className="" src="/images/mobile/blockchain-ecosystem.png" alt=""></img>
                                <div className="pl-4 py-1 bg-black-opaity-30 absolute bottom-0 left-0 z-10 w-full text-white text-lg font-bold">Blockchain ecosystem integration</div>
                            </div>
                            <div className="text-word-gray font-light font-vw-3-7 leading-5">
                                3AT's choice of hah as the underlying technology indicates the possibility of integrating more blockchain ecosystems into its stablecoin system. This will bring users more choices and application scenarios for digital assets.
                            </div>
                        </div>

                        <div className="mt-vh-2-4">
                            <div className="overflow-hidden rounded-xl relative mb-6">
                                <img className="" src="/images/mobile/financial-services.png" alt=""></img>
                                <div className="pl-4 py-1 bg-black-opaity-30 absolute bottom-0 left-0 z-10 w-full text-white text-lg font-bold">Financial Services Expansion</div>
                            </div>
                            <div className="text-word-gray font-light font-vw-3-7 leading-5">
                                Due to its nature of being linked to fiat currency, 3AT is expected to become an ideal choice in the financial services sector. Future expansion includes innovative applications of loans, loans, and other financial derivatives, providing users with more diversified financial services
                            </div>
                        </div>

                        <div className="mt-vh-2-4">
                            <div className="overflow-hidden rounded-xl relative mb-6">
                                <img className="" src="/images/mobile/cross-border-transactions.png" alt=""></img>
                                <div className="pl-4 py-1 bg-black-opaity-30 absolute bottom-0 left-0 z-10 w-full text-white text-lg font-bold">Cross border transactions</div>
                            </div>
                            <div className="text-word-gray font-light font-vw-3-7 leading-5">
                                Due to its stability and global transparency, 3AT is expected to play an important role in cross-border transactions. It can serve as a more reliable digital asset, promoting global trade and financial flows, and reducing the risk of exchange rate fluctuations in transactions
                            </div>
                        </div>
                    </div>
                    <div className="w-full pb-11 pt-4 flex justify-center text-center mt-10 bg-primary-green">
                        <div className="w-11/12">
                            <FooterBar isWhite></FooterBar>
                        </div>
                    </div>
                </div> */}
            </div>

            <div className="hidden md:block">
                <div className="image-bg image-bg-tp-170 bg-how-pc bg-no-repeat bg-contain relative ">
                    <div className="absolute flex flex-col justify-start h-full w-full">
                        <div className="flex justify-start items-center text-2xl z-0 w-1/3 h-1/5" style={{ paddingTop: '14%', marginLeft: '12.3%' }}>
                            <div className="green-button py-5 w-5/12 rounded-xl" onClick={() => toHome()}>
                                How
                            </div>
                            <div className="orange-button py-5 w-6/12 rounded-xl ml-4" onClick={() => toWhy()}>
                                Why 3AT Works
                            </div>
                        </div>
                        <div className=" flex justify-center items-center  mr-auto ml-auto" style={{ marginTop: '12.3%', width: '74%' }}>
                            <img src="/images/Group 19.png" alt=""></img>
                        </div>
                        <div className="mr-auto ml-auto" style={{ marginTop: '4.4%', width: '71%' }}>
                            <div className="grid grid-cols-4 gap-4 h-60 mr-auto ml-auto">
                                {devProspectsPCOne.map((item, index) => {
                                    return (
                                        <div onClick={() => clickDevOneItem(index)} className={["rounded-large", "cursor-pointer", "overflow-hidden", "trans", index === currentOneDev ? 'col-span-3' : 'col-span-1'].join(' ')} key={index}>
                                            <div className="w-full h-full relative overflow-hidden ">
                                                <img className="object-container " src={item.imgUrl} alt=""></img>
                                                {
                                                    index === currentOneDev ? <div className="w-full h-full bg-black-opaity-70 absolute flex flex-col justify-start items-start top-0 left-0 z-20 text-xl text-white" style={{ padding: '3%' }}>
                                                        <div className="mb-4 text-4xl">
                                                            {item.title}
                                                        </div>
                                                        <div>
                                                            {item.content}
                                                        </div>
                                                    </div> : <div className="w-full pl-12 py-2 bg-black-opaity-30 absolute bottom-0  left-0 z-20 text-white text-2xl">
                                                        <div className="w-1/2">
                                                            {item.title}
                                                        </div>
                                                    </div>
                                                }


                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="mt-10">
                                <div className="grid grid-cols-4 h-60  gap-4">
                                    {devProspectsPCTwo.map((item, index) => {
                                        return (
                                            <div onClick={() => clickDevTwoItem(index)} className={["rounded-large", "cursor-pointer", "overflow-hidden", "trans", index === currentTwoDev ? 'col-span-3' : 'col-span-1'].join(' ')} key={index}>
                                                <div className="w-full h-full relative overflow-hidden">
                                                    <img className="object-cover" src={item.imgUrl} alt=""></img>
                                                    {
                                                        index === currentTwoDev ? <div className="w-full h-full bg-black-opaity-70 absolute flex flex-col justify-start items-start top-0 left-0 z-20 text-xl text-white" style={{ padding: '8%' }}>
                                                            <div className="mb-4 text-4xl">
                                                                {item.title}
                                                            </div>
                                                            <div>
                                                                {item.content}
                                                            </div>
                                                        </div> : <div className="w-full pl-12 py-2 bg-black-opaity-30 absolute bottom-0 left-0 z-20 text-white text-2xl">
                                                            <div className="w-1/2">
                                                                {item.title}
                                                            </div>
                                                        </div>
                                                    }


                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="absolute top-0 w-full ">
                        <div className="flex justify-end items-center mb-20 mt-32">
                            <div className="font-bold text-6xl flex justify-between flex-col absolute left-64 mt-24 z-10 ">
                                <div className="w-1/3 mb-8">
                                    <img alt="" src="/images/logo.png"></img>
                                </div>
                                <div className="text-word-gray mb-10">How 3AT Works</div>
                                <div className="flex justify-start items-center text-2xl mb-10" >
                                    <div className="green-button py-5 w-5/12 rounded-xl" onClick={() => toHome()}>
                                        Home
                                    </div>
                                    <div className="orange-button py-5 w-6/12 rounded-xl ml-4" onClick={() => toWhy()}>
                                        Why Choose 3AT
                                    </div>
                                </div>

                                <div className="text-word-gray text-xl">
                                    <div className="mb-4"> 3AT stands out with its unique stablecoin model. The innovative</div>
                                    <div className="mb-4">integration of blockchain technology makes it a safe, efficient and</div>
                                    <div className="mb-4">convenient digital asset, bringing a new experience to transactions.</div>
                                </div>
                            </div>
                            <div className="mr-60">
                                <img alt="" src="/images/17 1.png"></img>
                            </div>
                        </div>

                        <div className="w-full flex flex-col justify-start items-center mb-20 relative mt-32">
                            <div className="absolute left-0 top-0 w-full ">
                                <img src="/images/Rectangle 13.png" alt=""></img>
                            </div>
                            <div className="w-9/12 relative z-10 mb-20 top-12">
                                <div className="mb-10 w-full">
                                    <div className="w-1/12 h-2 bg-primary-orange"></div>
                                </div>
                                <div className="w-full">
                                    <img className="w-6/12" src="/images/how-3at.png" alt=""></img>
                                </div>
                            </div>
                            <div className="w-9/12 relative text-word-gray flex justify-between items-end " >

                                <img src="/images/Group 19.png" alt=""></img>
                            </div>
                        </div>


                        <div className="w-full flex flex-col justify-start items-center  relative">
                            <div className="absolute left-0  w-full">
                                <img src="/images/Rectangle 13.png" alt=""></img>
                            </div>
                            <div className="w-9/12 relative z-10 mb-20 top-12">
                                <div className="mb-10 w-full">
                                    <div className="w-1/12 h-2 bg-primary-orange"></div>
                                </div>
                                <div className="w-full">
                                    <img className="w-6/12" src="/images/development.png" alt=""></img>
                                </div>
                                <div className="mt-10">
                                    <div className="grid grid-cols-4 gap-4 h-80">
                                        {devProspectsPCOne.map((item, index) => {
                                            return (
                                                <div onClick={() => clickDevOneItem(index)} className={["rounded-large", "overflow-hidden", "trans", index === currentOneDev ? 'col-span-3' : 'col-span-1'].join(' ')} key={index}>
                                                    <div className="w-full h-full relative overflow-hidden">
                                                        <img className="object-cover" src={item.imgUrl} alt=""></img>
                                                        {
                                                            index === currentOneDev ? <div className="w-full h-full bg-black-opaity-70 absolute top-0 left-0 z-20 p-20 text-xl text-white">
                                                                <div className="mb-4 text-4xl">
                                                                    {item.title}
                                                                </div>
                                                                <div>
                                                                    {item.content}
                                                                </div>
                                                            </div> : <div className="w-full pl-12 py-2 bg-black-opaity-30 absolute bottom-0 left-0 z-20 text-white text-2xl">
                                                                <div className="w-1/2">
                                                                    {item.title}
                                                                </div>
                                                            </div>
                                                        }


                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>

                                    <div className="mt-10">
                                        <div className="grid grid-cols-4 gap-4 h-80">
                                            {devProspectsPCTwo.map((item, index) => {
                                                return (
                                                    <div onClick={() => clickDevTwoItem(index)} className={["rounded-large", "overflow-hidden", "trans", index === currentTwoDev ? 'col-span-3' : 'col-span-1'].join(' ')} key={index}>
                                                        <div className="w-full h-full relative overflow-hidden">
                                                            <img className="object-cover" src={item.imgUrl} alt=""></img>
                                                            {
                                                                index === currentTwoDev ? <div className="w-full h-full bg-black-opaity-70 absolute top-0 left-0 z-20 p-20 text-xl text-white">
                                                                    <div className="mb-4 text-4xl">
                                                                        {item.title}
                                                                    </div>
                                                                    <div>
                                                                        {item.content}
                                                                    </div>
                                                                </div> : <div className="w-full pl-12 py-2 bg-black-opaity-30 absolute bottom-0 left-0 z-20 text-white text-2xl">
                                                                    <div className="w-1/2">
                                                                        {item.title}
                                                                    </div>
                                                                </div>
                                                            }


                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex justify-center text-center bg-primary-green py-10">
                            <div className="w-11/12">
                                <FooterBar isWhite></FooterBar>
                            </div>
                        </div>
                    </div> */}
                    <div className="w-full flex justify-center bg-primary-green text-center mt-8 absolute bottom-0 py-10">
                        <div className="w-11/12">
                            <FooterBar isWhite></FooterBar>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default How