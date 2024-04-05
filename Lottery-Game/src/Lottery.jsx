import { useState } from "react";
import "./Lottery.css";
import { genRandom, sum } from "./helper";




export default function Lottery(){
    let[target, setTarget] = useState(genRandom(3));
    let isWinnig = sum(target) === 15;

    function buyTicket(){
        setTarget(genRandom(3))
    }
    return(
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
                <span>{target[0]}</span>
                <span>{target[1]}</span>
                <span>{target[2]}</span>
            </div>
            <br />
            <button onClick={buyTicket}>Buy New Ticket</button>
            <br />
            <h3>{isWinnig ? "Congratulation!!, You won" : "Opps!! You loose..."}</h3>
        </div>
    )
}