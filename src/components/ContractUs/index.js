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
            <div className="md:hidden">
                <div className="w-full flex flex-col items-center justify-start">
                    <div className="text-word-gray text-6xl font-bold text-center mb-20">
                        Contract Us
                    </div>
                    <div className="w-full flex flex-col items-center justify-start mb-20">
                        <div className="w-full text-word-gray">
                            {inforList.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className="mb-2 text-2xl">
                                            {item.title}
                                        </div>
                                        <div className="w-full border-b border-zinc-400 h-10 flex justify-center items-center mb-4">
                                            <input className="h-10 bg-transparent w-full"></input>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="w-7/12 flex justify-center items-center">
                        <div className="green-button rounded-lg px-16 py-2 text-bold text-2xl">Send</div>
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="w-full flex flex-col items-center justify-start">
                    <div className="text-word-gray text-4xl font-bold text-center mb-20">
                        Contract Us
                    </div>
                    <div className="w-full flex flex-col items-center justify-start mb-20">
                        <div className="w-7/12 text-word-gray">
                            {inforList.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className="mb-2">
                                            {item.title}
                                        </div>
                                        <div className="w-full border-b border-zinc-400 h-10 flex justify-center items-center mb-4">
                                            <input className="h-10 bg-transparent w-full"></input>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="w-7/12 flex justify-start items-center">
                        <div className="green-button rounded-lg px-12 py-2 text-bold text-2xl">Send</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContractUs