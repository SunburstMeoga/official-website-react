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
            <div className="md:hidden ">
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
                    <div className="w-full flex flex-col items-center -mt-24">

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
                    <div className="w-full flex justify-center text-center mt-40">
                        <div className="w-11/12">
                            <FooterBar></FooterBar>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:block ">
                <div className="image-bg image-bg-tp-220 bg-home-pc-one bg-no-repeat bg-contain relative flex justify-center items-center">
                    <div className="absolute top-0 w-full ">
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
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home