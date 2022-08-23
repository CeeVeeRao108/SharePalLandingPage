import React from "react";
import like from "../assets/like.png"
import gift from "../assets/gift.png"
import payment from "../assets/payment.png"
import PodItem from "../components/PodItem";
import { PodList } from "../helpers/PodList";


import "../styles/Home.css";

function Home() {
    return (
        <div className="Homemain">
            <div className="home">
                <div className="a"><img src={like} alt="" /><div className="itxt">Excellent Quality Products</div></div>
                <div className="vrline"></div>
                <div className="a"><img src={gift} alt="" /><div className="itxt"> Delivery Date & Return Date is FREE!!</div></div>
                <div className="vrline"></div>
                <div className="a"><img src={payment} alt="" /><div className="itxt"> Pay on Delivery</div></div>

            </div>
            <div className="Pod">
                <h1>Pod</h1>
                <div className="PodList">
                    {ProjectList.map((Pod, idx) => {
                        return (
                            <PodItem id={idx} name={Pod.name} image={Pod.image} />
                        );
                    })
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;