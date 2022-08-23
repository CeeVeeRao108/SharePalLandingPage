import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logopn.png";
import downloc from "../assets/downloc.png";
import cart from "../assets/cart.png";
import hiking from "../assets/hiking.png";
import ps4 from "../assets/ps4.png";
import gopro from "../assets/gopro.png";
import dvd from "../assets/dvd.png";
import motorcycle from "../assets/motorcycle.png";
import camera from "../assets/camera.png";
import qumark from "../assets/qumark.png";
import profile from "../assets/profile.png";
function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

    return (<>
        <div className="LOL"><div className="Logo"><img src={logo} alt="" /><p> SharePal</p></div>
            <div className="loc"><p>Bangalore</p><img src={downloc} alt="" /><img src={qumark} alt="" /><img src={profile} alt="" /></div>
        </div>
        <div className="navbar" id={expandNavbar ? "open" : "close"}>

            <div className="Logo"><img src={logo} alt="" /><p> SharePal</p></div>
            <div className="loc"><p>Bangalore</p><img src={downloc} alt="" /></div>

            <div className="links">

                <div className="icon"><Link to="/" className="icons"> <img src={hiking} alt="" />Trekking </Link></div>
                <div className="icon"><Link to="/" className="icons"><img src={motorcycle} alt="" />
                    Riding </Link></div>
                <div className="icon"><Link to="/" className="icons"><img src={gopro} alt="" />
                    GoPro </Link></div>
                <div className="icon"><Link to="/" className="icons"><img src={camera} alt="" />

                    DSLR</Link></div> <div className="icon"><Link to="/" className="icons"><img src={ps4} alt="" />

                        PS4/Xbox</Link></div><div className="icon"><Link to="/" className="icons">

                            <img src={dvd} alt="" /> Games</Link></div>

            </div>
            <div className="cart"><Link to=""><img src={cart} alt="" className="cart" /></Link></div>
            <div className="log"><button className="lsb">Login/Signup</button></div>
        </div></>
    );
}

export default Navbar;