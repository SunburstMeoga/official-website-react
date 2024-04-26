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
            <div className="">
                <div className="w-21-3 flex flex-col items-center justify-start">
                    <div className="text-word-gray text-3-0 font-black text-center mb-2-9">
                        Contract Us
                    </div>
                    <div className="w-full flex flex-col items-center justify-start mb-1-3">
                        <div className="w-full text-word-gray">
                            {inforList.map((item, index) => {
                                return (
                                    <div key={index} className="mb-2-0">
                                        <div className="font-semibold text-1-5 ml-1-0">
                                            {item.title}
                                        </div>
                                        <div className="w-full border-b border-black-opaity-50 h-3-7 flex justify-center items-center mb-1-3">
                                            <input className="h-3-7 bg-transparent w-full pl-0-1"></input>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="w-14-7 h-5-0 bg-primary-green flex justify-center items-center text-white text-2-0 font-black rounded-xl mt-4-0">Send</div>
                </div>
            </div>

        </div>
    )
}

export default ContractUs