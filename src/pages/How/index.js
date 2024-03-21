import React from "react";
import { useNavigate } from "react-router-dom";

const How = () => {
    const navigator = useNavigate()
    function toHome() {
        navigator('/')
    }
    function toWhy() {
        navigator('/why')
    }

    return (
        <>
            <div className="image-bg bg-how-1image image-bg-tp-920 bg-no-repeat bg-contain bg-white-opaity-80 flex flex-col items-center relative">
                <div className="absolute flex flex-col items-center text-2xl w-full how-button-group" >
                    <div className="green-button py-3 w-8/12 rounded mb-2" onClick={() => toHome()}>
                        Home
                    </div>
                    <div className="orange-button py-3 w-8/12 rounded" onClick={() => toWhy()}>
                        Why 3AT Works
                    </div>
                </div>
            </div>
        </>
    )
}

export default How