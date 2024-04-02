function Description(props){
    return(
        <>
         <p>{props.features.map((feature) =><li>{feature}</li>)}</p>
        </>
    )
}

export default Description;