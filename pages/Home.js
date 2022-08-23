import React from "react";
import like from "../assets/like.png"
import gift from "../assets/gift.png"
import payment from "../assets/payment.png"
import shoes from "../assets/shoes.png"




import "../styles/Home.css";

function Home() {
    return (
        <div className="Homemain">
            <div className="home">
                <div className="a"><img src={like} alt="" /><div className="itxt">Excellent Quality Products</div>
                </div>
                <div className="vrline"></div>
                <div className="a"><img src={gift} alt="" /><div className="itxt"> Delivery Date & Return Date is FREE!!</div>
                </div>
                <div className="vrline"></div>
                <div className="a"><img src={payment} alt="" /><div className="itxt"> Pay on Delivery</div>
                </div>

            </div>
            <div className="pt">
                <h1>Trekking Gear on rent</h1>
            </div>
            <div className="prodlis">
                <div className="trekdiv">
                    <div className="md1">
                        <div className="dp1">Trekking Shoes</div>
                        <div className="dp2">3+ Products</div>
                    </div>
                    <div className="md2"><img src={shoes} alt="" /></div>
                </div>
                <div className="trekdiv">
                    <div className="md1">
                        <div className="dp1">Trekking Jackets</div>
                        <div className="dp2">10+ Products</div>
                    </div>
                    <div className="md2"><img src={shoes} alt="" /></div>
                </div><div className="trekdiv">
                    <div className="md1">
                        <div className="dp1">Backpacks</div>
                        <div className="dp2">4+ Products</div>
                    </div>
                    <div className="md2"><img src={shoes} alt="" /></div>
                </div><div className="trekdiv">
                    <div className="md1">
                        <div className="dp1">Trek  Accesories</div>
                        <div className="dp2">11+ Products</div>
                    </div>
                    <div className="md2"><img src={shoes} alt="" /></div>
                </div>
            </div>
        </div>
    );
}

export default Home;