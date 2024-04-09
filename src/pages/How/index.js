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
                <div className="image-bg bg-how-1image image-bg-tp-920 bg-no-repeat bg-contain bg-white-opaity-80 flex flex-col items-center relative">
                    <div className="absolute flex flex-col items-center text-2xl w-full how-button-group" >
                        <div className="green-button py-3 w-8/12 rounded mb-2" onClick={() => toHome()}>
                            Home
                        </div>
                        <div className="orange-button py-3 w-8/12 rounded" onClick={() => toWhy()}>
                            Why Choose 3AT
                        </div>
                    </div>
                </div>
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