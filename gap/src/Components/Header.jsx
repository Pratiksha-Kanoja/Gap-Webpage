import React from 'react'
import './Header.css'
import { GiTwirlyFlower } from "react-icons/gi";
import { BsBagFill } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import Gapicon from '../Components/Gap-icon.png'
import { IoIosSearch } from "react-icons/io";

const Header = () => {
    return (
        <div className='Header-Container'>
            {/* Head first */}

            <div className='Head-first'>
                <div>
                    <div className='Headfirst-left'>
                        <button style={{ fontFamily: "Roboto", fontSize: "15px", fontWeight: "500" }}>GAP</button>
                        <button style={{ fontFamily: "Arial", fontSize: "12px", fontWeight: "bold" }}>OLD NAVY</button>
                        <button style={{ fontFamily: "Roboto", fontSize: "15px", fontWeight: "500" }}>BANANA REPUBLIC</button>
                        <button style={{ fontFamily: "sans-serif", fontSize: "14px", fontWeight: "700" }}><GiTwirlyFlower style={{ marginRight: "4px" }} />ATHLETA</button>
                        <button style={{ fontSize: "13px", fontWeight: "500" }}>babyGap</button>
                    </div>
                    <div className='Headfirst-mid'>
                        Free Shipping on $50+ for Rewards Members
                        <p style={{ textDecoration: "underline", marginLeft: "5px" }}>SIGN IN OR JOIN </p>
                        <p style={{ textDecoration: "underline", marginLeft: "5px" }}>DETAILS</p>
                    </div>
                    <div className='Headfirst-right'>
                        <div>
                            <p>Sign In</p>
                            <p>Your Account<FaChevronDown style={{ marginLeft: "10px" }} /></p>
                        </div>
                        <BsBagFill style={{ fontSize: "28px", marginLeft: "10px" }} />

                    </div>
                </div>
            </div>

            {/* 2nd head */}

            <div className='Head-second'>
                <div>
                    <div className='Headsecond-left'>
                        <div>
                            <img src={Gapicon} alt="" />
                        </div>
                        <div>
                            <p>NEW</p>
                            <p>WOMEN</p>
                            <p>MEN</p>
                            <p>GIRLS</p>
                            <p>BOYS</p>
                            <p>TODDLER</p>
                            <p>BABY</p>
                            <p>MATERNITY</p>
                            <p>SALE</p>
                            <p>THE GIFT SHOP</p>
                        </div>
                    </div>
                    <div className='Headsecond-right'>
                        <input type="text" placeholder='Search: Hoodie'/>
                        <IoIosSearch style={{fontSize:"25px",margin:"5px"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header