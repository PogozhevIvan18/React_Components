import React from "react";
import {FaStar} from "react-icons/fa"
import colorArray from "./UI/color"

function Star({selected = false, onSelect = f => f, colorValue = 0}) {
    return (<FaStar color={selected ? colorArray[colorValue - 1] : "grey"} onClick={onSelect}/>)
};

export default Star;