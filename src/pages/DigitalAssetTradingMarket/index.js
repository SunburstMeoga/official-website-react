import React from "react";
import FooterBar from "@/components/FooterBar";
import ContractUs from "@/components/ContractUs";
const DigitalAssetTradingMarket = () => {
    const gameList = [{
        title: 'title'
    }, {
        title: 'title'
    }, {
        title: 'title'
    }, {
        title: 'title'
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
                                                {/* <img src="/images/Rectangle 39.png" alt=""></img> */}
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