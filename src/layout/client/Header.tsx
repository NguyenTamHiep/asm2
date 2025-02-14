import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSearchContext } from "../../context/search_context";

type Props = {};

const Header = (props: Props) => {
    const {setSearchText, filteredProducts} = useSearchContext();

    const handleSearch = (data: string) => {
        setSearchText(data);
    };
    console.log(filteredProducts)
    return (
        <>
            <header id="" className="header_bg h-[150px]">
                <div className="container">
                    {/* Header Top */}
                    <div className="header_top flex items-center justify-end">
                        {/* SEARCH */}
                        <div className="flex items-center justify-between px-4 bg-[#E3E3E3] border-[1px] rounded-[3px] w-[525px] h-[42px]">
                            <input
                                className="bg-transparent outline-none border-none w-full text-[16px]"
                                type="text"
                                placeholder="Suchen Sie nach Produkten, Marken und mehr"
                                onChange={(e) => handleSearch(e.target.value)}
                            />
                            <img
                                className="h-5 w-5 cursor-pointer ml-3"
                                src="/assets/svg/search.svg"
                                alt=""
                            />
                        </div>

                        <div className="ml-[100px]">
                            <div className="flex flex-row items-center gap-[2px]">
                                <h3 className="text-[16px] font-medium text-white leading-10 cursor-pointer">
                                    En
                                </h3>
                                <img
                                    className="mt-1 cursor-pointer"
                                    src="/assets/svg/arrow_down.svg"
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="ml-[100px]">
                            <div className="flex flex-row-reverse items-center gap-[2px]">
                                <h3 className="text-[16px] font-medium text-white leading-10 cursor-pointer">
                                    Account
                                </h3>
                                <img
                                    className="mt-1 cursor-pointer"
                                    src="/assets/svg/user.svg"
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="ml-[30px]">
                            <div className="flex flex-row-reverse items-center gap-[2px]">
                                <h3 className="text-[16px] font-medium text-white leading-10 cursor-pointer">
                                    Cart
                                </h3>
                                <img
                                    className="mt-1 cursor-pointer"
                                    src="/assets/svg/bag.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>

                    {/* SEPARATE */}
                    <div className="separate h-[1px] bg-[#E3E3E3] my-3"></div>

                    {/* HEADER BOTTOM */}
                    <div className="header_bottom mt-5">
                        <nav>
                            <ul className="flex justify-between">
                                <li>
                                    <NavLink
                                        className="flex gap-[2px] text-white text-[14px] font-semibold leading-5"
                                        to="#!"
                                    >
                                        Beleuchtung
                                        <img
                                            className="mt-1 cursor-pointer"
                                            src="/assets/svg/arrow_down.svg"
                                            alt=""
                                        />
                                    </NavLink>
                                </li>
                                <li className="relative show">
                                    <NavLink
                                        className=" flex gap-[2px] text-white text-[14px] font-semibold leading-5"
                                        to="#!"
                                    >
                                        Growbox
                                        <img
                                            className="mt-1 cursor-pointer"
                                            src="/assets/svg/arrow_down.svg"
                                            alt=""
                                        />
                                    </NavLink>
                                    <ul className="hidden z-[2] dropdown w-[130px] bg-[#EEE] mt-4 p-4 absolute top-5 left-[-16px]">
                                        <li>
                                            <NavLink
                                                className="text-[#665345] text-[15px] hover:text-[#859a78]"
                                                to="#!"
                                            >
                                                Komplettsets
                                            </NavLink>
                                        </li>
                                        <li className="mt-4">
                                            <NavLink
                                                className="text-[#665345] text-[15px] hover:text-[#859a78]"
                                                to="#!"
                                            >
                                                Tkaeasde
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <NavLink
                                        className="flex gap-[2px] text-white text-[14px] font-semibold leading-5"
                                        to="#!"
                                    >
                                        Dünger
                                        <img
                                            className="mt-1 cursor-pointer"
                                            src="/assets/svg/arrow_down.svg"
                                            alt=""
                                        />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="flex gap-[2px] text-white text-[14px] font-semibold leading-5"
                                        to="#!"
                                    >
                                        Erde & Substrate
                                        <img
                                            className="mt-1 cursor-pointer"
                                            src="/assets/svg/arrow_down.svg"
                                            alt=""
                                        />
                                    </NavLink>
                                </li>
                                <li className="relative show">
                                    <NavLink
                                        className="flex gap-[2px] text-white text-[14px] font-semibold leading-5 pb-8"
                                        to="#!"
                                    >
                                        Töpfe & Behälter
                                        <img
                                            className="mt-1 cursor-pointer"
                                            src="/assets/svg/arrow_down.svg"
                                            alt=""
                                        />
                                    </NavLink>
                                    <ul className="hidden z-[2] dropdown w-[130px] bg-[#EEE] mt-4 p-4 absolute top-5 left-[-16px]">
                                        <li>
                                            <NavLink
                                                className="text-[#665345] text-[15px] hover:text-[#859a78] "
                                                to="#!"
                                            >
                                                Pflanzschalen
                                            </NavLink>
                                        </li>
                                        <li className="mt-4">
                                            <NavLink
                                                className="text-[#665345] text-[15px] hover:text-[#859a78] "
                                                to="#!"
                                            >
                                                Eckige Töpfe
                                            </NavLink>
                                        </li>
                                        <li className="mt-4">
                                            <NavLink
                                                className="text-[#665345]  text-[15px] hover:text-[#859a78]"
                                                to="#!"
                                            >
                                                Runde Töpfe
                                            </NavLink>
                                        </li>
                                        <li className="mt-4">
                                            <NavLink
                                                className="text-[#665345]  text-[15px] hover:text-[#859a78]"
                                                to="#!"
                                            >
                                                Untersetzer
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <NavLink
                                        className="flex gap-[2px] text-white text-[14px] font-semibold leading-5"
                                        to="#!"
                                    >
                                        Bewässerung
                                        <img
                                            className="mt-1 cursor-pointer"
                                            src="/assets/svg/arrow_down.svg"
                                            alt=""
                                        />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="flex gap-[2px] text-white text-[14px] font-semibold leading-5"
                                        to="#!"
                                    >
                                        Pflanzen & Gärtnern
                                        <img
                                            className="mt-1 cursor-pointer"
                                            src="/assets/svg/arrow_down.svg"
                                            alt=""
                                        />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="flex gap-[2px] text-white text-[14px] font-semibold leading-5"
                                        to="#!"
                                    >
                                        Lüftung & Klimaanlage
                                        <img
                                            className="mt-1 cursor-pointer"
                                            src="/assets/svg/arrow_down.svg"
                                            alt=""
                                        />
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
