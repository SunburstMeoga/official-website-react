import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import menu from "../../mock/menu";
const TopBar = () => {
    const navigator = useNavigate()
    const menuList = menu
    let [clickedMenu, setClickedMenu] = useState('home')
    let [mouseEnterMenu, setMouseEnterMenu] = useState('')
    let [mouseEnterSecondMenu, setMouseEnterSecondMenu] = useState(null)
    const clickMenuItem = (item, index) => {
        if (item.router) {
            setClickedMenu(clickedMenu = item.name)
            setMouseEnterMenu(mouseEnterMenu = '')
            navigator(item.router)
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
                    <div className="w-11/12 flex justify-between items-center">
                        <div className="flex justify-center items-center">
                            <div className="flex justify-start items-center">
                                <div>
                                    <img className="w-20" alt="" src="/images/logo.png"></img>
                                </div>
                            </div>
                            <div className="ml-10 flex justify-start items-center">
                                {menuList.map((item, index) => {
                                    return (
                                        <div className="relative py-8" key={index}>
                                            <div onMouseEnter={() => onMenuItemEnter(item, index)} onClick={() => clickMenuItem(item, index)} key={index}
                                                className={["font-semibold",
                                                    "cursor-pointer",
                                                    "ml-10",
                                                    "border-b-2",
                                                    "pb-1",
                                                    "menu-item",
                                                    index === menuList.length - 1 ? "relative z-10" : '',
                                                    clickedMenu === item.name ? "border-primary-green text-primary-green" : "border-transparent text-word-gray"].join(' ')}>
                                                {item.title}
                                            </div>

                                            {(item.hasChild && mouseEnterMenu === 'solution') &&
                                                <div className="absolute text-sm font-normal px-8 pt-3 pb-2 text-left top-16 left-8  rounded shadow-2xl bg-white text-model-gray z-50"
                                                    onMouseLeave={(e) => onMouseLeaveSecondMenu(e)}>
                                                    {item.children.map((_item, _index) => {
                                                        return (
                                                            <div onMouseEnter={() => onMouseEnterSecondMenu(_item, _index)}
                                                                onClick={() => clickMenuItem(_item, _index)}
                                                                className={[
                                                                    "w-52",
                                                                    "py-1",
                                                                    "pl-2",
                                                                    "mb-2",
                                                                    "cursor-pointer",
                                                                    _index === mouseEnterSecondMenu ? "text-active-color" : ""].join(" ")} key={_index}>
                                                                {_item.title}
                                                            </div>
                                                        )
                                                    })}
                                                </div>}


                                            {/* <div onMouseEnter={() => onMenuItemEnter(item, index)} onClick={() => clickMenuItem(item, index)} key={index}
                                                className={["font-semibold",
                                                    "cursor-pointer", "ml-10", "border-b-2", "pb-1", "menu-item",
                                                    index === menuList.length - 1 ? "relative" : '',
                                                    clickedMenu === item.name ? "border-primary-green text-primary-green" : "border-transparent text-word-gray"].join(' ')}>
                                                <div className="relative z-10">{item.title}</div>
                                                
                                            </div> */}
                                        </div>
                                    )
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