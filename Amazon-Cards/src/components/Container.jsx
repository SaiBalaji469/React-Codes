import Card from "./Card"
import "./Container.css"

function Container(){
    return(
        <>
            <div style={{backgroundColor:"#BBD686", paddingTop:"10px" ,borderRadius:"10px"}}>
            <h2>Blockbuster Deals on Computer Accessories | Shop Now</h2>
            <div className="Container">
                
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            </div>
          
        </>
    )
}

export default Container;