import "./MsgBox.css"

function MasgBox(props){
    let color = props.color;
    // let styles = {color:color}
    return (
        <>
            <h1 className="MsgBox" style={{color:color}}>{props.name}</h1>
        </>
    )
};

export default MasgBox;
