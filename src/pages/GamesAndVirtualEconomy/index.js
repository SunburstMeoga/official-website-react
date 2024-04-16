import React from "react";
import FooterBar from "@/components/FooterBar";
import ContractUs from "@/components/ContractUs";
const GamesAndVirtualEconomy = () => {
    return (
        <div>
            <div className="relative md:hidden">
                <div className="">
                    <img alt="" src="/images/mobile/game-virtual-bg.png"></img>
                </div>
                <div className="absolute flex flex-col justify-start items-center top-0 left-0 w-full h-full">
                    <div className="text-word-gray w-full mt-vh-10-1 text-5xl font-bold">
                        Games And Virtual Economy
                    </div>
                    <div className="flex w-11/12 flex-col justify-start items-start">
                        <div className="mt-vh-16-1 font-vw-9-1 leading-10 font-bold text-white title-shadow">
                            Provide a stable and efficient gaming experience
                        </div>
                    </div>
                    <div className="mt-vh-8-1 text-center text-word-gray font-bold px-2 w-11/12 font-vw-12-1 leading-10">
                        Application of Stablecoins in Games and Virtual Economy
                    </div>
                    <div className="h-48 w-48 bg-white-40  box-shadow-green rounded-2xl overflow-hidden mt-24 flex justify-center items-center">
                        <img className="w-10/12" src="/images/mobile/entertainment.png"></img>
                    </div>
                    <div className="w-11/12 text-word-gray font-bold text-2xl mt-vh-6-2">
                        Stablecoins can be used as currencies in the virtual economy, providing stable value storage and trading tools, helping gamers manage in-game assets and purchase and trade virtual goods.
                    </div>
                    <div className="h-48 w-48 bg-white-40  box-shadow-green rounded-2xl overflow-hidden mt-vh-6-2 flex justify-center items-center">
                        <img className="w-10/12" src="/images/mobile/rocket.png"></img>
                    </div>
                    <div className="w-11/12 text-word-gray font-bold text-2xl mt-vh-6-2">
                        It is used for in-game payment and settlement, providing a convenient and low-cost transaction method to accelerate the purchase and transaction process of in-game items.
                    </div>
                    <div className="h-48 w-48 bg-white-40 box-shadow-green rounded-2xl overflow-hidden mt-vh-6-2 flex justify-center items-center">
                        <img className="w-10/12" src="/images/mobile/safety-card.png"></img>
                    </div>
                    <div className="w-11/12 text-word-gray font-bold text-2xl mt-vh-6-2">
                        Stablecoins can serve as an intermediary currency for game players to trade on digital asset trading platforms, helping game players buy and sell in-game virtual assets and provide liquidity and price stability.
                    </div>
                    <div className="mt-20 text-left text-word-gray font-bold pt-1 px-2 w-11/12 text-5xl leading-tight">
                        Advantages of Stablecoins in the Gaming Industry
                    </div>
                    <div className="w-10/12 bg-white-40  box-shadow-green rounded-2xl overflow-hidden mt-5 p-4 text-word-gray flex flex-col items-center justify-start">
                        <div className="flex w-full justify-end">
                            <div className="h-6 w-6 border-4 border-point-border bg-point-gray p-1.5 rounded-full"></div>
                        </div>
                        <div className="text-center text-4xl font-medium mb-12">Stable Value</div>
                        <div className="test w-40">
                            <img src="/images/mobile/bee.png" alt=""></img>
                        </div>
                        <div className="text-word-gray w-10/12 text-base leading-4 mt-16 pb-4">
                            Ensuring that the value of game players' assets in the virtual economy is not affected by inflation or deflation enhances the credibility and sustainability of in-game assets.
                        </div>
                    </div>

                    <div className="w-10/12 bg-white-40  box-shadow-green rounded-2xl overflow-hidden mt-10 p-4 text-word-gray flex flex-col items-center justify-start">
                        <div className="flex w-full justify-end">
                            <div className="h-6 w-6 border-4 border-point-border bg-point-gray p-1.5 rounded-full"></div>
                        </div>
                        <div className="text-center text-4xl font-medium mb-12">Transaction Eficiency</div>
                        <div className="test w-40">
                            <img src="/images/mobile/eficiency.png" alt=""></img>
                        </div>
                        <div className="text-word-gray w-10/12 text-base leading-4 mt-16 pb-4">
                            Stablecoin transactions usually have lower costs and fast confirmation speeds, which can improve game players' transaction efficiency in the virtual economy and reduce time and costs in the transaction process.
                        </div>
                    </div>

                    <div className="w-10/12 bg-white-40  box-shadow-green rounded-2xl overflow-hidden mt-10 p-4 text-word-gray flex flex-col items-center justify-start">
                        <div className="flex w-full justify-end">
                            <div className="h-6 w-6 border-4 border-point-border bg-point-gray p-1.5 rounded-full"></div>
                        </div>
                        <div className="text-center text-4xl font-medium mb-12">Global Market Integration</div>
                        <div className="test w-40">
                            <img src="/images/mobile/market.png" alt=""></img>
                        </div>
                        <div className="text-word-gray w-10/12 text-base leading-4 mt-16 pb-4">
                            Stablecoins can achieve global market integration in the in-game virtual economy, provide players with a unified currency system, promote transactions and interactions among global players, and promote the global development of the virtual economy.
                        </div>
                    </div>

                    <div className="w-full flex flex-col justify-center items-center mt-32">
                        <div className="w-11/12">
                            <ContractUs></ContractUs>
                        </div>
                    </div>

                </div>
                <div className="w-full flex justify-center bg-primary-green text-center py-10 absolute bottom-0 left-0">
                    <div className="w-11/12">
                        <FooterBar isWhite></FooterBar>
                    </div>
                </div>
            </div>


            <div className="hidden md:block ">
                <div className="image-bg image-bg-tp-199 bg-game-pc bg-no-repeat bg-contain relative">
                    {/* <div className="absolute top-0 w-full pt-44">

                    </div>
                    <div className="absolute bottom-0 w-full">
                        <div className="mb-28 mt-36">
                            <ContractUs></ContractUs>
                        </div>

                        <div className="w-full flex justify-center text-center bg-primary-green py-10 mt-40 relative z-10">
                            <div className="w-11/12">
                                <FooterBar isWhite></FooterBar>
                            </div>
                        </div>
                    </div> */}
                    <div className="absolute bottom-52 w-full flex flex-col justify-center items-center ">
                        <div className="w-11/12">
                            <ContractUs></ContractUs>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center bg-primary-green text-center py-14 -mt-28">
                    <div className="w-11/12">
                        <FooterBar isWhite></FooterBar>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default GamesAndVirtualEconomy