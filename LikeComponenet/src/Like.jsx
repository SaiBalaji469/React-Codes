import { useState } from "react";

export default function Like(){
    let [like , setLike] = useState(0);
    let[isLiked, setIsLiked] = useState(false);
    let increaseLikes = () =>{
        setLike(like+1);
        setIsLiked(!isLiked);

    }
    let likeStyle = {color : "red"};

    return(
        <>
            <h3>like = {like}</h3>
            <p onClick={increaseLikes}>
                {isLiked ? (
                    <i class="fa-solid fa-heart" style={likeStyle}></i>
                ) : (
                    <i class="fa-regular fa-heart"></i>
                )}
            </p>
        </>
    )
}