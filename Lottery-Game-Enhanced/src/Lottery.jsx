import { useState } from "react";
import "./Lottery.css";
import { genRandom, sum } from "./helper";
import Ticket from "./Ticket";




export default function Lottery({n, winnigSum}){
    let[target, setTarget] = useState(genRandom(n));
    let isWinnig = sum(target) === winnigSum;

    function buyTicket(){
        setTarget(genRandom(n))
    }
    return(
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
               <Ticket ticket={target}></Ticket>
            </div>
            <br />
            <button onClick={buyTicket}>Buy New Ticket</button>
            <br />
            <h3>{isWinnig ? "Congratulation!!, You won" : "Opps!! You loose..."}</h3>
        </div>
    )
}