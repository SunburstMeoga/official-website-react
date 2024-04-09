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