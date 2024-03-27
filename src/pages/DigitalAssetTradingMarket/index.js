import React from "react";
import FooterBar from "@/components/FooterBar";
import ContractUs from "@/components/ContractUs";
const DigitalAssetTradingMarket = () => {
    const gameList = [{
        title: 'Fully backed liquidity reserves',
        imgUrl: '/images/fullyback.png',
        content: 'Liquid reserves held by leading financial institutions provide strong support for 3AT, ensuring the stability of its value and solving the problem of large price fluctuations in the digital asset market.'
    }, {
        title: 'Reserve audit mechanism',
        imgUrl: '/images/reserve.png',
        content: 'Liquid reserves held by leading financial institutions provide strong support for 3AT, ensuring the stability of its value and solving the problem of large price fluctuations in the digital asset market.'

    }, {
        title: 'Dominate the use of stablecoins',
        imgUrl: '/images/dominate.png',
        content: 'Liquid reserves held by leading financial institutions provide strong support for 3AT, ensuring the stability of its value and solving the problem of large price fluctuations in the digital asset market.'

    }, {
        title: 'Instant free liquidity',
        imgUrl: '/images/instant.png',
        content: 'Liquid reserves held by leading financial institutions provide strong support for 3AT, ensuring the stability of its value and solving the problem of large price fluctuations in the digital asset market.'

    },]
    return (
        <div>
            <div className="md:hidden">
                Solution mobile
            </div>

            <div className="hidden md:block ">
                <div className="image-bg image-bg-tp-220 bg-digital-pc-one bg-no-repeat bg-contain relative flex justify-center items-center">
                    <div className="absolute top-0 w-full  h-full" style={{ paddingTop: '55%' }}>
                        <div className="w-full  flex justify-center items-center">
                            <div className="w-9/12 flex justify-between flex-wrap">
                                {gameList.map((item, index) => {
                                    return <>
                                        <div className="relative" style={{ width: '48%' }} key={index}>
                                            <div className="w-full image-bg image-bg-tp-127 bg-game-item bg-no-repeat bg-contain relative flex justify-center items-center">
                                                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-word-gray">
                                                    <div className="flex flex-col h-4/6 justify-end items-start w-8/12 ">
                                                        <div className="">
                                                            <img className="" alt="" src={item.imgUrl}></img>
                                                        </div>
                                                        <div className="text-4xl mt-10">{item.title}</div>
                                                        <div className="text-lg mt-10">{item.content}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 w-full">
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

export default DigitalAssetTradingMarket