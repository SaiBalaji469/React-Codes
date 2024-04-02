
import "./Card.css"

function Card(props){
    return(
        <>
            <div className="Card">
                <h1>{props.title}</h1>  
                <h2>{props.matter}</h2>
            </div>
        
        </>
    )
}

export default Card;