import React from "react";
import {FaStar} from "react-icons/fa"
import colorArray from "./UI/color"

function Star({selected = false, onSelect = f => f, index}) {
    return (<FaStar color={selected ? colorArray[index] : "grey"} onClick={onSelect}/>)
};

export default Star;