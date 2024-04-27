import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import menu from "../../mock/menu";
const TopBar = () => {
    const navigator = useNavigate()
    const menuList = menu
    let [clickedMenu, setClickedMenu] = useState('home')
    let [mouseEnterMenu, setMouseEnterMenu] = useState('')
    let [showMobileMenu, changeShow] = useState(false)
    let [showSecondMobileMenu, changeSecondMobile] = useState(false)
    let [mouseEnterSecondMenu, setMouseEnterSecondMenu] = useState(null)
    let [currentSecondMobile, setSecondMobile] = useState(null)

    const clickSecondMenuItem = (item, index) => {
        setSecondMobile(currentSecondMobile = index)
        // console.log(currentSecondMobile, index)
        navigator(item.router)
        setTimeout(() => {
            changeShow(showMobileMenu = !showMobileMenu)
            changeSecondMobile(showSecondMobileMenu = !showSecondMobileMenu)
        }, 500);
    }

    const clickMenuItem = (item, index) => {

        if (item.router) {
            setClickedMenu(clickedMenu = item.name)
            setMouseEnterMenu(mouseEnterMenu = '')
            navigator(item.router)
            setTimeout(() => {
                changeShow(showMobileMenu = !showMobileMenu)
                changeSecondMobile(showSecondMobileMenu = !showSecondMobileMenu)
            }, 500);
        }
    }

    const onMenuItemEnter = (item, index) => {
        setMouseEnterMenu(mouseEnterMenu = item.name)
        console.log('鼠标移入', item.title, index)
    }

    const onMouseEnterSecondMenu = (item, index) => {
        console.log(item, index)
        setMouseEnterSecondMenu(mouseEnterSecondMenu = index)
    }

    const onMouseLeaveSecondMenu = (e) => {
        console.log(e)
        e.stopPropagation();
        setMouseEnterSecondMenu(mouseEnterSecondMenu = null)
        setMouseEnterMenu(mouseEnterMenu = '')
        console.log('鼠标移出二级菜单')
    }

    const toggleMobileMenuBar = () => {
        console.log(showMobileMenu)
        changeShow(showMobileMenu = !showMobileMenu)
    }

    const toggleMobileSecond = () => {
        changeSecondMobile(showSecondMobileMenu = !showSecondMobileMenu)
    }

    return (
        <div>
            {/* mobile top bar */}
            <div className="md:hidden">
                <div className="w-full flex justify-center items-center fixed z-50">
                    <div className="px-1-2 w-full flex justify-between py-1-0 relative z-50">
                        <div className="w-3-5">
                            <img alt="" src="/images/logo.png"></img>
                        </div>
                        <div className="flex justify-center items-center ">
                            <div className="w-2-0 h-2-0">
                                <img alt="" src="/images/user.png"></img>
                            </div>
                            <div className="w-2-0 ml-1-2" onClick={() => toggleMobileMenuBar()}>
                                {/* <img alt="" src="/images/menu.png"></img> */}
                                {!showMobileMenu ? <div className="icon iconfont icon-menu text-word-gray" style={{ fontSize: '24px' }}></div> : <div style={{ fontSize: '20px' }} className="text-word-gray icon iconfont icon-guanbi"></div>}
                            </div>
                        </div>
                    </div>
                    {showMobileMenu &&
                        <div className="absolute w-full top-4-4 z-30 ">
                            <div className="w-full  bg-white shadow-2xl flex flex-col items-center relative z-30">
                                {menuList.map((item, index) => {
                                    return <div
                                        onClick={() => clickMenuItem(item, index)}
                                        key={index}
                                        className="
                                        w-10/12 
                                        py-2-0
                                        px-1-0
                                        rounded
                                        border-b
                                         border-slate-100
                                         text-word-gray
                                         font-bold
                                         mobile-active-item
                                         relative
                                         z-30
                                         ">
                                        <div className="flex justify-between items-center relative
                                         z-30">
                                            <div>
                                                {item.title}
                                            </div>
                                            <div className="" onClick={() => { toggleMobileSecond() }}>
                                                {item.children &&
                                                    <div className="icon iconfont icon-down"></div>
                                                }
                                            </div>
                                        </div>

                                        {index === menuList.length - 1 && showSecondMobileMenu &&
                                            <div className="flex flex-col items-center relative
                                            z-30">
                                                {item.children &&
                                                    item.children.map((_item, _index) => {
                                                        return <div
                                                            onClick={() => clickSecondMenuItem(_item, _index)}
                                                            key={_index}
                                                            className={[
                                                                "w-10/12",
                                                                "font-normal",
                                                                "py-3-1",
                                                                "border-b",
                                                                "border-slate-100",
                                                                "mobile-active-item",
                                                                "relative",
                                                                "z-30",
                                                                _index === currentSecondMobile ? "text-active-color" : "text-model-gray"].join(" ")} >
                                                            {_item.title}
                                                        </div>
                                                    })
                                                }
                                            </div>
                                        }
                                    </div>
                                })}
                            </div>
                        </div>
                    }
                </div>
            </div>

            {/* pc top bar */}
            <div className="hidden md:block">
                <div className="flex justify-center items-center w-full fixed z-10">
                    <div className="w-full flex justify-between items-center p-1-3">
                        <div className="flex justify-center items-center">
                            <div className="flex justify-start items-center">
                                <div>
                                    <img className="w-4-5" alt="" src="/images/logo.png"></img>
                                </div>
                            </div>
                            <div className="flex justify-start items-center">
                                {menuList.map((item, index) => {
                                    return (
                                        <div className="relative py-8" key={index}>
                                            <div onMouseEnter={() => onMenuItemEnter(item, index)} onClick={() => clickMenuItem(item, index)} key={index}
                                                className={["font-semibold",
                                                    "cursor-pointer",
                                                    "ml-3-7",
                                                    "border-b-2",
                                                    "pb-0-2",
                                                    "menu-item",
                                                    "text-1-3",
                                                    index === menuList.length - 1 ? "relative z-10" : '',
                                                    clickedMenu === item.name ? "border-primary-green text-primary-green" : "border-transparent text-word-gray"].join(' ')}>
                                                {item.title}
                                            </div>

                                            {(item.hasChild && mouseEnterMenu === 'solution') &&
                                                <div className="absolute  px-1-8 text-1-2 text-left leading-point-114 py-1-6 left-3-4 top-2-2 rounded shadow-2xl bg-white text-model-gray z-50"
                                                    onMouseLeave={(e) => onMouseLeaveSecondMenu(e)}>
                                                    {item.children.map((_item, _index) => {
                                                        return (
                                                            <div onMouseEnter={() => onMouseEnterSecondMenu(_item, _index)}
                                                                onClick={() => clickMenuItem(_item, _index)}
                                                                className={[
                                                                    "w-22-2",
                                                                    "py-1-0",
                                                                    "cursor-pointer",
                                                                    _index === mouseEnterSecondMenu ? "text-active-color" : ""].join(" ")} key={_index}>
                                                                {_item.title}
                                                            </div>
                                                        )
                                                    })}
                                                </div>}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="flex justify-end items-center">
                            <div className="flex justify-between items-center mr-2-0 cursor-pointer">
                                <div className="text-title-gray text-1-0">Sign in</div>
                                <div className="w-1-0 ml-1-0">
                                    <img src="/images/__after.png" alt=""></img>
                                </div>
                            </div>
                            <div className="green-button rounded-full w-9-5 h-3-1 cursor-pointer flex justify-items-center">中文 / English</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TopBar