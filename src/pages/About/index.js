import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FooterBar from "@/components/FooterBar";

const Home = () => {
    const navigator = useNavigate()
    let [itemStatus, setItemStatus] = useState([{
        id: 1,
        title: 'Are 3AT transactions transparent?',
        content: 'The 3AT project is committed to providing fully transparent operations. The records of its issuance and reserve assets are publicly available and users can view them at any time to ensure information transparency.',
        showContent: false
    }, {
        id: 2,
        title: 'How do I know my 3AT is safe?',
        content: "The 3AT project complies with regulatory requirements and strictly follows the world's first-class anti-money laundering (AML), combating the financing of terrorism (CFT), and customer development (KYC) regulations and standards. These compliance measures increase the security of user participation.Each 3AT token is pegged to the corresponding legal currency (such as Hong Kong dollar, US dollar) at a 1:1 ratio and is 100% backed by 3AT reserves. This reserve system of fiat currency increases the stability and credibility of the token.As a digital asset based on the blockchain, 3AT uses the non-tamperability of the blockchain and the characteristics of the distributed ledger to improve the security of transactions and prevent potential fraud and data tampering.",
        showContent: false
    }, {
        id: 3,
        title: 'How to ensure compliance in the operation of 3AT',
        content: "The funds on the 3AT account are completely transparent and open, ensuring that users can understand the status of their accounts at any time. In order to enhance transparency, the company hires an international accounting firm every month to carefully check the amount on the account, the transaction records on the chain, and the amount spent. This regular audit process is designed to ensure the accuracy and authenticity of 3AT's financial data, provide users with highly credible account information, and at the same time emphasize the company's strict control of financial compliance.",
        showContent: false
    }])

    const handleShowContent = (id) => {
        const updatedStatuses = itemStatus.map(item => {
            if (item.id === id) {
                console.log(id, item.id)
                return { ...item, showContent: !item.showContent };
            }
            return item
        })
        setItemStatus(updatedStatuses);
    }
    function toWhy() {
        navigator('/why')
    }
    function toHow() {
        navigator('/how')
    }
    return (
        <div>
            <div className="overflow-x-hidden">
                <div className="relative">
                    <div className="text absolute -z-10 top-2-6">
                        <img src="/images/mobile/about-banner.png" alt=""></img>
                    </div>
                    <div className="flex flex-col justify-start items-center">
                        <div className="mt-5-4 w-12-5">
                            <img src="/images/mobile/logo.png"></img>
                        </div>
                        <div className="text-word-gray text-2-2 font-black w-17-8 text-center mt-17-6">Stable And Trustworthy</div>
                        <div className="text-gradient text-2-2 font-black w-20-2 text-center pb-0-2">Digital Fiat Currency Bridge</div>
                        <div className="mt-1-3">
                            <div className="green-button rounded-md w-15-7  h-3-5 text-1-1" onClick={() => toWhy()}>Why Choose 3AT</div>
                        </div>
                        <div className="mt-0-4">
                            <div className="orange-button rounded-md w-15-7  h-3-5 text-1-1" onClick={() => toHow()}>How 3AT Works</div>
                        </div>
                    </div>
                </div>

                <div className="relative mt-2-2">
                    <div className="relative -z-10">
                        <img src="/images/mobile/about-module-one.png" alt=""></img>
                    </div>
                    <div className="flex flex-col justify-center items-center absolute top-0-1 left-0-1 w-full">
                        <div className="text-word-gray font-bold text-2-6 w-22-8 text-center mt-3-5">
                            Visionary <span className="text-primary-green">strategy</span> & <span className="text-primary-orange">Innovative</span> spirit
                        </div>
                        <div className="w-17-6 mt-2-5">
                            <img src="/images/mobile/doller.png" alt=""></img>
                        </div>
                        <div className="mt-1-9 text-word-gray font-medium text-1-2 w-21-9">
                            <div className="leading-point-155">3AT tokens create a safe and stable trading environment for users,</div>
                            <div className="mt-1-8 leading-point-155">Carrying the bridge between digital currency and traditional currency,</div>
                            <div className="mt-1-8 leading-point-155">Eliminating the volatility and complexity that often accompanies digital assets.</div>
                            <div className="mt-1-8 leading-point-155">This initiative enables global enterprises to participate in the digital financial system more easily and efficiently,</div>
                            <div className="mt-1-8 leading-point-155">3AT tokens create a safe and stable trading environment for users,</div>
                            <div className="mt-1-8 leading-point-155">Enjoy the unique advantages of 3AT.</div>
                        </div>
                    </div>
                </div>

                <div className="relative pt-7-8">
                    <div className="w-19-3 absolute top-11-3 -z-10">
                        <img src="images/mobile/circel.png" className="" alt=""></img>
                    </div>
                    <div className="w-full flex flex-col justify-end items-center" >
                        <div className="text-word-gray w-1/3 font-bold text-2-5 text-center leading-point-114">
                            About <span className="text-primary-green">3AT</span>
                        </div>
                        <div className="w-20-3 -mt-1-5">
                            <img className="" src="/images/mobile/safety.png"></img>
                        </div>
                        <div className="text-word-gray w-21-9 font-medium leading-point-180 text-1-3 mt-1-5 pb-3-5">
                            The founding team of 3AT focuses on promoting the digital application of fiat currency. The 3AT project was launched in 2023, building a blockchain based platform aimed at disrupting the traditional financial system with a more modern monetary approach. This project aims to provide users with a unique and trustworthy fiat currency experience through innovation in digital assets.
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -z-10">
                        <img src="/images/mobile/about-module-two.png" alt=""></img>
                    </div>
                    <div className="w-full flex flex-col justify-start items-center">
                        <div className="text-word-gray leading-point-114 text-2-5 font-bold w-1/2 text-center mt-5-0">
                            <span className="text-primary-green">Team </span>and <span className="text-primary-orange">technical </span>advantages
                        </div>
                        <div className="flex flex-col justify-start items-center">
                            <div className="w-19-2">
                                <img src="/images/mobile/hands.png" alt=""></img>
                            </div>
                            <div className="text-word-gray leading-point-180 text-1-2 w-21-9 mt-1-5">
                                3AT brings together professionals in the fields of financial services, technology and compliance, led by an experienced senior management team, to provide excellent services to users around the world. Leading the way in the digital asset space.
                            </div>
                            <div className="text-word-card mt-1-5">
                                <div className="w-21-9 box-shadow-green rounded-xl px-2-2 py-1-7 bg-white">
                                    <div className="w-9-6">
                                        <img src="/images/mobile/hah-card.png"></img>
                                    </div>
                                    <div className="text-1-0 leading-point-140 mt-1-6">
                                        With hah as the underlying technology, it provides strong support for 3AT and becomes the best choice to achieve the stability of digital assets.
                                    </div>
                                </div>

                                <div className="w-21-9 box-shadow-green rounded-xl px-2-2 py-1-7 bg-white mt-1-6">
                                    <div className="w-9-6">
                                        <img src="/images/mobile/currency-card.png"></img>
                                    </div>
                                    <div className="text-1-0 leading-point-140 mt-1-6">
                                        With hah as the underlying technology, it provides strong support for 3AT and becomes the best choice to achieve the stability of digital assets.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-3-0">
                    <div className="flex w-full flex-col justify-start items-start">
                        <div className="w-full mt-10">
                            <img alt="" src="/images/FAQs.png"></img>
                        </div>
                        <div className="w-full flex flex-col items-center">
                            {itemStatus.map((item, index) => {
                                return (
                                    <div key={index} className="w-21-9 p-1-0 bg-primary-green rounded-xl mb-1-0 relative z-20" >
                                        <div className="flex justify-between items-center text-word-gray">
                                            <div className="text-1-2 leading-1-5">
                                                {item.title}
                                            </div>
                                            <div className="text-icon-gray font-bold text-3xl">
                                                <div onClick={() => handleShowContent(item.id)} className={["icon", "iconfont", "icon-add", item.showContent ? "icon-jian_sekuai" : "icon-add"].join(" ")}></div>
                                            </div>
                                        </div>
                                        {item.showContent && <div className="text-white text-1-2 mt-1-0 leading-1-5">
                                            {item.content}
                                        </div>}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center text-center mt-10">
                    <div className="w-11/12">
                        <FooterBar></FooterBar>
                    </div>
                </div>
            </div>
            {/* <div className="md:hidden">
                <div className="relative pt-0.5 ">
                    <div className="absolute w-full">
                        <img src="/images/mobile/home-gradient.png" alt=""></img>
                    </div>
                    <div className="relative z-10 flex flex-col justify-start items-center">
                        <div className="w-vw-50-9 mt-vh-5-6">
                            <img src="/images/logo.png"></img>
                        </div>
                        <div className="text-word-gray w-11/12 text-center mt-vh-33-6 font-vw-11-0 font-bold leading-10">Stable And Trustworthy</div>
                        <div className=" text-gradient font-vw-11-0 font-bold text-center mt-vh-1-0 leading-10 pb-2">
                            Digital Fiat Currency Bridge
                        </div>
                        <div className="w-8/12 mt-vh-2-0">
                            <div className="green-button  rounded-md" onClick={() => toWhy()}>Why Choose 3AT</div>
                        </div>
                        <div className="w-8/12">
                            <div className="orange-button rounded-md mt-vh-1-0" onClick={() => toHow()}>How 3AT Works</div>
                        </div>
                    </div>
                </div>

                <div className="relative pt-0.5 mt-vh-5-1">
                    <div className="absolute w-full">
                        <img src="/images/mobile/home-module-bg.png" alt=""></img>
                    </div>
                    <div className="relative z-10 flex flex-col justify-start items-center">
                        <div className="text-word-gray font-vw-12-0 text-center leading-10 mt-vh-5-8">
                            <div>
                                Visionary <span className="text-primary-green"> strategy</span>
                            </div>
                            <div className="">
                                <span className="text-4xl">&</span> <span className="text-primary-orange">Innovative</span> spirit
                            </div>
                        </div>
                        <div className="w-vw-74-0 mt-vh-10-8">
                            <img src="/images/mobile/currency.png" alt=""></img>
                        </div>
                        <div className="text-word-gray w-11/12 leading-7 font-vw-5-0 mt-vh-4-0">
                            3AT tokens create a safe and stable trading environment for users,
                        </div>
                        <div className="text-word-gray w-11/12 leading-7 font-vw-5-0 mt-vh-4-0">
                            Carrying the bridge between digital currency and traditional currency,
                        </div>
                        <div className="text-word-gray w-11/12 leading-7 font-vw-5-0 mt-vh-4-0">
                            Eliminating the volatility and complexity that often accompanies digital assets.
                        </div>
                        <div className="text-word-gray w-11/12 leading-7 font-vw-5-0 mt-vh-4-0">
                            This initiative enables global enterprises to participate in the digital financial system more easily and efficiently,
                        </div>
                        <div className="text-word-gray w-11/12 leading-7 font-vw-5-0 mt-vh-4-0">
                            Enjoy the unique advantages of 3AT.
                        </div>
                    </div>
                    <div className="relative z-10 flex flex-col justify-start items-center mt-vh-22-0">
                        <div className="absolute w-full">
                            <img className="" src="/images/mobile/home-module-round.png"></img>
                        </div>
                        <div className="relative flex justify-start flex-col items-center z-10">
                            <div className="font-vw-12-0 text-center leading-10 mt-vh-1-0 text-word-gray">
                                About
                            </div>
                            <div className="text-primary-green font-vw-12-0">3AT</div>
                            <div className="w-11/12">
                                <img src="/images/mobile/shield.png"></img>
                            </div>
                            <div className="text-word-gray w-11/12 leading-9 font-vw-5-0 mt-vh-6-0">
                                The founding team of 3AT focuses on promoting the digital application of fiat currency. The 3AT project was launched in 2023, building a blockchain based platform aimed at disrupting the traditional financial system with a more modern monetary approach. This project aims to provide users with a unique and trustworthy fiat currency experience through innovation in digital assets.
                            </div>
                            <div className="font-vw-12-0 text-center leading-10 mt-vh-10-0 text-word-gray">
                                <div>
                                    <span className="text-primary-green"> Team</span> and
                                </div>
                                <div className="text-primary-orange">
                                    technical
                                </div>
                                <div className="">
                                    advantages
                                </div>
                            </div>
                            <div className="flex flex-col justify-start items-center">
                                <div className="w-11/12 mt-1 mb-8">
                                    <img className="" src="/images/mobile/shake-hands.png" alt=""></img>
                                </div>
                                <div className="text-word-gray w-11/12 leading-9 font-vw-5-0 mt-vh-6-0">
                                    3AT brings together professionals in the fields of financial services, technology and compliance, led by an experienced senior management team, to provide excellent services to users around the world. Leading the way in the digital asset space.
                                </div>
                            </div>
                            <div className="flex flex-col justify-start items-center mt-8">
                                <div className="w-11/12 p-8 rounded-2xl shadow-2xl bg-white box-shadow-green mb-8">
                                    <div className="mb-4 w-1/2">
                                        <img className="" src="/images/mobile/hah-logo.png"></img>
                                    </div>
                                    <div className="text-word-card leading-6 text-base">With hah as the underlying technology, it provides strong support for 3AT and becomes the best choice to achieve the stability of digital assets.</div>
                                </div>
                                <div className="w-11/12 p-8 rounded-2xl shadow-2xl bg-white box-shadow-green ">
                                    <div className="mb-4 w-1/2 -ml-6">
                                        <img className="" src="/images/mobile/safety.png"></img>
                                    </div>
                                    <div className="text-word-card leading-6 text-base">With hah as the underlying technology, it provides strong support for 3AT and becomes the best choice to achieve the stability of digital assets.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col justify-start items-start">
                            <div className="w-full mt-10">
                                <img alt="" src="/images/FAQs.png"></img>
                            </div>
                            <div className="w-full flex flex-col items-center">
                                {itemStatus.map((item, index) => {
                                    return (
                                        <div key={index} className="w-11/12 bg-primary-green rounded-xl p-4 mb-4 relative z-20" >
                                            <div className="flex justify-between items-center text-word-gray">
                                                <div className="w-10/12  text-2xl">
                                                    {item.title}
                                                </div>
                                                <div className="text-icon-gray font-bold text-3xl">
                                                    <div onClick={() => handleShowContent(item.id)} className={["icon", "iconfont", "icon-add", item.showContent ? "icon-jian_sekuai" : "icon-add"].join(" ")}></div>
                                                </div>
                                            </div>
                                            {item.showContent && <div className="text-white mt-4">
                                                {item.content}
                                            </div>}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="w-full flex justify-center text-center mt-10">
                            <div className="w-11/12">
                                <FooterBar></FooterBar>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="hidden md:block">
                <div className="image-bg image-bg-tp-220 bg-home-pc bg-no-repeat bg-contain relative">
                    <div className="flex justify-start items-center text-2xl absolute z-0 w-1/3" style={{ paddingTop: '33%', marginLeft: '12.3%' }}>
                        <div className="green-button py-5 w-8/12 rounded-xl" onClick={() => toWhy()}>
                            Why Choose 3AT
                        </div>
                        <div className="orange-button py-5 w-8/12 rounded-xl ml-4" onClick={() => toHow()}>
                            How 3AT Works
                        </div>
                    </div>
                    {/* <div className="absolute top-0 w-full ">
                        <div className="flex justify-end items-center mb-20">
                            <div className="font-bold text-6xl flex justify-between flex-col absolute left-64 bottom-26 z-10 ">
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

                        <div className="flex justify-center items-center w-full mb-20">
                            <div className="flex justify-between items-start  w-9/12">
                                <div className="pt-10 pl-2">
                                    <img alt="" src="/images/d2b.png"></img>
                                </div>
                                <div className="w-7/12 pr-20">
                                    <div className="flex justify-end items-center text-6xl font-semibold">
                                        <span className="text-word-gray mr-4">Visionary</span>
                                        <span className="text-primary-green mr-4">strategy</span>
                                        <span className="text-word-gray">and</span>

                                    </div>
                                    <div className="flex justify-start items-center text-6xl font-semibold mb-4">
                                        <span className="text-primary-green mr-4">innovative</span>
                                        <span className="text-word-gray">spirit</span>
                                    </div>
                                    <div className="text-word-gray text-xl">
                                        <p className="mb-4"> 3AT tokens create a safe and stable trading environment for users,</p>
                                        <p className="mb-4">Carrying the bridge between digital currency and traditional currency,</p>
                                        <p className="mb-4">Eliminating the volatility and complexity that often accompanies digital assets.</p>
                                        <p className="mb-0">This initiative enables global enterprises to participate in the digital financial system</p>
                                        <p className="mb-4">more easily and efficiently,</p>
                                        <p className="mb-4">Enjoy the unique advantages of 3AT.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center w-full ">
                            <div className="flex justify-between items-start  w-10/12 relative  ">
                                <div className="absolute">
                                    <img alt="" src="/images/Ellipse 2.png"></img>
                                </div>
                                <div className="pl-40 pt-48 relative z-10">
                                    <div className="flex justify-start items-center text-6xl font-semibold mb-16">
                                        <span className="text-word-gray mr-4">About</span>
                                        <span className="text-primary-green mr-4">3AT</span>
                                    </div>
                                    <div className="text-word-gray text-xl">
                                        <p className="mb-2">The founding team of 3AT focuses on promoting the digital</p>
                                        <p className="mb-2">application of fiat currency. The 3AT project was launched in </p>
                                        <p className="mb-2">2023, building a blockchain based platform aimed at</p>
                                        <p className="mb-2">disrupting the traditional financial system with a more</p>
                                        <p className="mb-2">users with a unique and trustworthy fiat currency</p>
                                        <p className="mb-2">experience through innovation in digital assets.</p>
                                    </div>
                                </div>
                                <div className="">
                                    <img alt="" src="/images/9 1 (1).png"></img>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center w-full -mt-28  ">
                            <div className="flex justify-center items-start  w-7/12   ">
                                <div className="">
                                    <div className="flex justify-start items-center text-6xl font-semibold">
                                        <span className="text-primary-green mr-4">Team</span>
                                        <span className="text-word-gray mr-4">And</span>
                                        <span className="text-primary-orange mr-4">technical</span>
                                        <span className="text-word-gray mr-4">advantages</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center w-full mb-10">
                            <div className="flex justify-between items-center  w-9/12">
                                <div className="">
                                    <img alt="" src="/images/hand.png"></img>
                                </div>
                                <div className="w-6/12 pr-20 flex justify-end">
                                    <div className="text-word-gray text-xl">
                                        <p className="mb-2"> 3AT brings together professionals in the fields of financial</p>
                                        <p className="mb-2">services, technology and compliance, led by an experienced</p>
                                        <p className="mb-2">senior management team, to provide excellentservices to users</p>
                                        <p className="mb-2">around the world. Leading the way in the digital asset space.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="flex justify-center items-center w-full mb-14">
                            <div className="flex justify-between items-center w-9/12">
                                <div className="w-1/2 relative flex flex-col items-start justify-center">
                                    <div className="w-full ">
                                        <img alt="" src="/images/Rectangle-4.png"></img>
                                    </div>
                                    <div className="w-full absolute top-20 left-20">
                                        <div className="w-1/3 mb-14">
                                            <img src="/images/7_1 1.png" alt=""></img>
                                        </div>
                                        <div className="text-word-gray">
                                            <p className="">With hah as the underlying technology, it provides</p>
                                            <p className="">strong support for 3AT and becomes the best choice</p>
                                            <p className="">to achieve the stability of digital assets.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/2 relative flex flex-col items-start justify-center">
                                    <div className="w-full ">
                                        <img alt="" src="/images/Rectangle-4.png"></img>
                                    </div>
                                    <div className="w-full absolute top-10 left-20">
                                        <div className="w-1/3 mb-12">
                                            <img src="/images/image 5.png" alt=""></img>
                                        </div>
                                        <div className="text-word-gray">
                                            <p className="">With hah as the underlying technology, it provides</p>
                                            <p className="">strong support for 3AT and becomes the best choice</p>
                                            <p className="">to achieve the stability of digital assets.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="flex justify-center items-baseline font-bold text-8xl">

                                <div className="">
                                    <img src="/images/Q&Apc.png" alt=""></img>
                                </div>
                            </div>

                            <div className="flex justify-center items-center bg-primary-green -mt-2">
                                <div className="">
                                    <img src="/images/Frame 1.png" alt=""></img>
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex justify-center text-center mt-8">
                            <div className="w-11/12">
                                <FooterBar></FooterBar>
                            </div>
                        </div>
                    </div> */}
                    <div className="w-full flex justify-center text-center mt-8 absolute bottom-0 pb-10">
                        <div className="w-11/12">
                            <FooterBar></FooterBar>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home