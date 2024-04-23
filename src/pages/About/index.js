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
            <div className="">
                <div className="relative ">
                    <div className="absolute -z-10 top-2-6 xl:hidden">
                        <img src="/images/mobile/about-banner.png" alt=""></img>
                    </div>
                    <div className="xl:block absolute -z-10 right-0-1 top-0-1 hidden top w-73-3">
                        <img src="/images/pc/about-banner.png" alt="" ></img>
                    </div>
                    <div className="flex flex-col justify-start items-center xl:w-41-4 xl:items-start xl:ml-15-0">
                        <div className="mt-5-4 w-12-5 xl:mt-9-8">
                            <img src="/images/mobile/logo.png"></img>
                        </div>
                        <div className="text-word-gray text-2-2 font-black w-17-8 text-center mt-17-6 leading-point-114 xl:mt-2-0 xl:text-left xl:text-4-0  xl:w-25-3 ">Stable And Trustworthy</div>
                        <div className="text-gradient text-2-2 font-black w-20-2 text-center pb-0-2 leading-point-114 xl:text-left xl:text-4-0  xl:w-41-4">Digital Fiat Currency Bridge</div>
                        <div className="xl:flex xl:justify-start xl:items-center xl:mt-1-6">
                            <div className="mt-1-3 xl:mt-auto">
                                <div className="green-button jump-button" onClick={() => toWhy()}>Why Choose 3AT</div>
                            </div>
                            <div className="mt-0-4 xl:mt-auto xl:ml-1-6">
                                <div className="orange-button jump-button" onClick={() => toHow()}>How 3AT Works</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative mt-2-2">
                    <div className="relative -z-10">
                        <img src="/images/mobile/about-module-one.png" alt=""></img>
                    </div>
                    <div className="flex flex-col justify-center items-center absolute top-0-1 w-full">
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
        </div>
    )
}

export default Home