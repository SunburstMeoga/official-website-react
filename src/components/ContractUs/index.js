import React from "react";

const ContractUs = () => {
    const inforList = [{
        title: 'Last name'
    }, {
        title: 'Name'
    }, {
        title: 'Phone'
    }, {
        title: 'Email'
    }, {
        title: 'Compony'
    }]
    return (
        <div>
            <div className="relative z-20">
                <div className="w-21-3 flex flex-col items-center justify-start lg:w-50-0">
                    <div className="text-word-gray text-3-0 font-black text-center mb-2-9 lg:text-3-0">
                        Contract Us
                    </div>
                    <div className="w-full flex flex-col items-center justify-start mb-1-3">
                        <div className="w-full text-word-gray">
                            {inforList.map((item, index) => {
                                return (
                                    <div key={index} className="mb-1-0">
                                        <div className="font-semibold text-1-5 ml-1-0 lg:ml-auto">
                                            {item.title}
                                        </div>
                                        <div className="w-full border-b border-black-opaity-50 h-3-7 flex justify-center items-center mb-1-3">
                                            <input className="h-3-7 bg-transparent w-full pl-0-1 lg:h-4-0"></input>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="w-full flex justify-center lg:justify-start">
                        <div className="w-14-7 h-5-0 bg-primary-green flex justify-center items-center text-white text-2-0 font-black rounded-xl mt-3-0 cursor-pointer lg:14-7-0 lg:h-5-0">Send</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContractUs