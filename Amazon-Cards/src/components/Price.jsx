import "./Price.css"

function Price(props){
    return (
        <>
            <div className="container">
                <h3 className="offer">{props.originolPrice}</h3>
                <h3>{props.offerPrice}</h3>
            </div>
        </>
    )
}


export default Price;