import React, { useState, useEffect } from "react";
import like from '../../assets/heart.svg'
import classes from "./CSS/LikeHookCounter.module.css";
import { setLikeCounter } from "../../redux/profile-reducer";

const LikeCounterHook = (props) => {
    const [count, setCountLike] = useState(0);
    useEffect (() => {setLikeCounter(props.likeCounter)}, [props.likeCounter])
    
    return (
        <div className={classes.container}>
            <div className={classes.like}><img src={like} onClick={() => setCountLike(count + 1)}/></div>
            <div className={classes.count}>{count}</div>
        </div>
    )
}
export default LikeCounterHook