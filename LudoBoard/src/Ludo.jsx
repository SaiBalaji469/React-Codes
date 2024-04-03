import { useState } from "react"

export default function Ludo(){
    let [count, setCount] = useState({blue: 0,yellow: 0,green: 0,red: 0});
    function blueCount(){
        count.blue += 1;
        setCount({...count});
    }
    function yellowCount(){
        count.yellow += 1;
        setCount({...count});
    }
    function greenCount(){
        count.green += 1;
        setCount({...count});
    }
    function redCount(){
        count.red += 1;
        setCount({...count});
    }

    return(
        <>
            <div style={{backgroundColor:"black", padding:"20px", color:"white"}}>
                <p>Blue Moves : {count.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={blueCount}>+1</button>
                <p>Yellow Moves : {count.yellow}</p>
                <button style={{backgroundColor:"yellow"}} onClick={yellowCount}>+1</button>
                <p>Green Moves : {count.green}</p>
                <button style={{backgroundColor:"green"}} onClick={greenCount}>+1</button>
                <p>Red Moves : {count.red}</p>
                <button style={{backgroundColor:"red"}} onClick={redCount}>+1</button>
                
            </div>
        </>
    )
}