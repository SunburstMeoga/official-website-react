import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const TopBar = () => {
    const navigator = useNavigate()
    const topBarPCMenuItem = [{ title: 'About 3At', router: '/', name: 'home' }, { title: 'How 3AT Works', router: '/how', name: 'how' }, { title: 'Why Choose 3AT', router: '/why', name: 'why' }, { title: 'Solution', router: '/solution', name: 'solution' }]
    const secondMenuItem = [{ title: 'Payment Industry', router: '/solution', name: 'solution' }, { title: 'Games And Virtual Economy', router: '/games-and-virtual-economy', name: 'solution' }, { title: 'Digital Asset Trading Market', router: '/digital-asset-trading-market', name: 'solution' },]
    let [currentItem, setCurrentItem] = useState('home')
    let [showSecondeMenu, setSecondeMenu] = useState(false)
    let [currentSeconde, setCurrentSecondeItem] = useState(null)
    const clickMenuItem = (item, index) => {
        setCurrentItem(currentItem = item.name)
        console.log(item)
        if (index === topBarPCMenuItem.length - 1) {
            setSecondeMenu(showSecondeMenu = true)
            setCurrentSecondeItem(currentSeconde = 0)
        } else {
            setSecondeMenu(showSecondeMenu = false)
            setCurrentSecondeItem(currentSeconde = 0)
        }
        navigator(item.router)
    }
    const clickSecondMenuItem = (e, item, index) => {
        console.log(e)
        e.stopPropagation();
        setCurrentItem(currentItem = item.name)
        setCurrentSecondeItem(currentSeconde = index)
        setSecondeMenu(showSecondeMenu = false)
        navigator(item.router)
    }
    const movieSecondaryMenu = (index) => {
        // if (index === topBarPCMenuItem.length - 1) {
        //     setSecondeMenu(showSecondeMenu = true)
        // }
    }
    const leaveSecondaryMenu = (e, index) => {
        console.log(e)
        e.stopPropagation();
        setSecondeMenu(showSecondeMenu = false)
        setCurrentSecondeItem(currentSeconde = false)
    }
    const mouseSecondMenu = (item, index) => {
        setSecondeMenu(showSecondeMenu = true)
        setCurrentSecondeItem(currentSeconde = index)
    }
    return (
        <div>
            {/* mobile top bar */}
            <div className="md:hidden">
                <div className="w-full flex justify-center items-center fixed z-10">
                    <div className="w-11/12 flex justify-between py-4">
                        <div className="w-14">
                            <img alt="" src="/images/logo.png"></img>
                        </div>
                        <div className="flex justify-center items-center ">
                            <div className="w-8 h-8">
                                <img alt="" src="/images/user.png"></img>
                            </div>
                            <div className="w-6 ml-6">
                                <img alt="" src="/images/menu.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* pc top bar */}
            <div className="hidden md:block">
                <div className="flex justify-center items-center w-full fixed z-10">
                    <div className="w-11/12 flex justify-between items-center py-8">
                        <div className="flex justify-center items-center">
                            <div className="flex justify-start items-center">
                                <div>
                                    <img className="w-20" alt="" src="/images/logo.png"></img>
                                </div>
                            </div>
                            <div className="ml-10 flex justify-start items-center">
                                {topBarPCMenuItem.map((item, index) => {
                                    return <div onMouseEnter={() => { movieSecondaryMenu(index) }} onClick={() => clickMenuItem(item, index)} key={index} className={["text-word-gray", "font-semibold", "cursor-pointer", "ml-10", "border-b-2", "pb-1", "relative", currentItem === item.name ? "border-primary-green" : "border-transparent"].join(' ')}>
                                        {item.title}

                                        {(index === topBarPCMenuItem.length - 1 && showSecondeMenu) &&
                                            <div onMouseLeave={(e) => { leaveSecondaryMenu(e, index) }} className="absolute text-sm font-normal px-8 pt-3 pb-4 text-left top-12 rounded shadow-2xl bg-white text-model-gray z-50">
                                                {secondMenuItem.map((_item, _index) => {
                                                    return (
                                                        <div className={["w-52", "py-3", "pl-2", _index === currentSeconde ? "text-active-color" : ""].join(" ")} key={_index} onClick={(e) => clickSecondMenuItem(e, _item, _index)} onMouseEnter={() => { mouseSecondMenu(_item, _index) }}>
                                                            {_item.title}
                                                        </div>
                                                    )
                                                })}
                                            </div>}
                                    </div>
                                })}
                            </div>
                        </div>
                        <div className="flex justify-end items-center">
                            <div className="flex justify-between items-center mr-6 cursor-pointer">
                                <div className="title-gray">Sign in</div>
                                <div className="w-4 ml-2">
                                    <img src="/images/__after.png" alt=""></img>
                                </div>
                            </div>
                            <div className="green-button rounded-full px-6 py-3 cursor-pointer">中文 / English</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TopBar