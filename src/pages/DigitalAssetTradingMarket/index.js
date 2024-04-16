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
            <div className="relative md:hidden">
                <div className="">
                    <img alt="" src="/images/mobile/digital-asset-bg.png"></img>
                </div>
                <div className="absolute flex flex-col justify-start items-center top-0 left-0 w-full h-full">
                    <div className="text-word-gray w-full mt-vh-10-1 text-5xl font-bold">
                        Digital Asset Trading Market
                    </div>
                    <div className="flex w-11/12 flex-col justify-start items-start">
                        <div className="mt-vh-16-1 font-vw-9-1 leading-10 font-bold text-white title-shadow">
                            A stable choice for digital transactions
                        </div>
                    </div>
                    <div className="mt-vh-18-1 pt-2.5 w-10/12 text-word-gray font-bold font-vw-8-4 indent-28 leading-10">’s solution advantages in the digital trading market are reflected in its stable value support, transparent audit mechanism, leading market position and efficient liquidity provided, thereby subverting the traditional digital asset trading market model and providing investors with more Reliable and convenient trading environment.</div>

                    <div className="w-full bg-white-70  box-shadow-green  mt-vh-6-2 flex flex-col justify-start items-center pt-20 text-word-gray pb-16">
                        <div className="w-11/12">
                            <img src="/images/mobile/turstful.png" alt=""></img>
                        </div>
                        <div className="font-bold font-vw-10-0 leading-10 w-8/12 mt-10">Turstful endorsement</div>
                        <div className="font-vw-6-0 font-semibold w-8/12 mt-vh-4-2">Liquid reserves held by leading financial institutions provide strong support for 3AT, ensuring the stability of its value and solving the problem of large price fluctuations in the digital asset market.</div>
                    </div>

                    <div className="w-full bg-white-70  box-shadow-green  mt-vh-6-2 flex flex-col justify-start items-center pt-20 text-word-gray pb-16">
                        <div className="w-full">
                            <img src="/images/mobile/trust.png" alt=""></img>
                        </div>
                        <div className="font-bold font-vw-10-0 leading-10 w-8/12 mt-10">Trust of audit</div>
                        <div className="font-vw-6-0 font-semibold w-8/12 mt-vh-4-2">The reserves are verified monthly by the Big Four accounting firms to ensure that the value of 3AT matches the actual reserves, which increases investors' trust in 3AT.</div>
                    </div>

                    <div className="w-full bg-white-70  box-shadow-green  mt-vh-6-2 flex flex-col justify-start items-center pt-20 text-word-gray pb-16">
                        <div className="w-full">
                            <img src="/images/mobile/dominate.png" alt=""></img>
                        </div>
                        <div className="font-bold font-vw-10-0 leading-10 w-8/12 mt-10">Dominate the use of stablecoins audit mechanism</div>
                        <div className="font-vw-6-0 font-semibold w-8/12 mt-vh-4-2">The reserves are verified monthly by the Big Four accounting firms to ensure that the value of 3AT matches the actual reserves, which increases investors' trust in 3AT.</div>
                    </div>

                    <div className="w-full bg-white-70  box-shadow-green  mt-vh-6-2 flex flex-col justify-start items-center pt-20 text-word-gray pb-16">
                        <div className="w-full">
                            <img src="/images/mobile/liquidity.png" alt=""></img>
                        </div>
                        <div className="font-bold font-vw-10-0 leading-10 w-8/12 mt-10">Liquidity</div>
                        <div className="font-vw-6-0 font-semibold w-8/12 mt-vh-4-2">3AT provides near-instant free liquidity, allowing traders to trade assets more quickly and efficiently, thereby changing the problem of slow transaction speeds in traditional markets.</div>
                    </div>

                    <div className="w-full flex flex-col justify-center items-center mt-20">
                        <div className="w-11/12">
                            <ContractUs></ContractUs>
                        </div>
                    </div>
                    {/* <div className="w-full flex justify-center bg-primary-green text-center py-10 mt-20">

                        <div className="w-11/12">
                            <FooterBar isWhite></FooterBar>
                        </div>
                    </div> */}
                </div>
                <div className="w-full flex justify-center bg-primary-green text-center py-10 absolute bottom-0 left-0">
                    <div className="w-11/12">
                        <FooterBar isWhite></FooterBar>
                    </div>
                </div>
            </div>


            <div className="hidden md:block ">
                <div className="image-bg image-bg-tp-199 bg-digital-pc bg-no-repeat bg-contain relative">
                    {/* <div className="absolute top-0 w-full  h-full" style={{ paddingTop: '55%' }}>
                        <div className="w-full  flex justify-center items-center">
                            <div className="w-9/12 flex justify-between flex-wrap">
                                {gameList.map((item, index) => {
                                    return (<div className="relative" style={{ width: '48%' }} key={index}>
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
                                    </div>)
                                })}
                            </div>
                        </div>
                    </div> */}
                    <div className="absolute bottom-10 w-full flex flex-col justify-center items-center ">
                        <div className="w-11/12">
                            <ContractUs></ContractUs>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center bg-primary-green text-center py-14 -mt-8">
                    <div className="w-11/12">
                        <FooterBar isWhite></FooterBar>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default DigitalAssetTradingMarket