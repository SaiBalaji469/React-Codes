import Title from "./Title"
import Image from "./Image"
import Description from "./Description"
import Price from "./Price"
import "./Card.css"


function Card(){
    return(
        <>
            <div className="Card">
                <Title name="Logitech M235 Wireless Mouse"/>
                <Image url_link="https://m.media-amazon.com/images/I/61k86rQjLtL._SX569_.jpg"></Image>
                <Description features={["1000 DPI Optical Tracking","12 Month Life Battery,"]}></Description>
                <Price originolPrice={2000} offerPrice={1600}></Price>
            </div>
        </>
    )
}

export default Card;