import React from "react";
import FooterBar from "@/components/FooterBar";
import ContractUs from "@/components/ContractUs";
const GamesAndVirtualEconomy = () => {
    return (
        <div>
            <div className="md:hidden">
                <div className="image-bg bg-game-mobile-one image-bg-tp-1371 bg-no-repeat bg-contain bg-white-opaity-80 flex flex-col items-center relative">
                    <div className="absolute flex flex-col items-center w-full -bottom-14 left-0" >
                        <div className="mb-10">
                            <ContractUs></ContractUs>
                        </div>
                        <div className="w-full bg-primary-green py-10">
                            <FooterBar></FooterBar>
                        </div>
                    </div>
                </div>


            </div>


            <div className="hidden md:block ">
                <div className="image-bg image-bg-tp-199 bg-game-pc-one bg-no-repeat bg-contain relative flex justify-center items-center">
                    <div className="absolute top-0 w-full pt-44">

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

export default GamesAndVirtualEconomy