import React from "react";
import FooterBar from "@/components/FooterBar";
import ContractUs from "@/components/ContractUs";
const GamesAndVirtualEconomy = () => {
    return (
        <div>
            <div className="md:hidden">
                Solution mobile
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