import React, {useState } from "react";
import Star from "./Star";

export default function StarRating() {
    const originArrayColor = [1, 2, 3, 4, 5]
    const [selectedStars,setSelectedStars] = useState([])
    const createArray = length => [...Array(length)]
    

    const clickColor = (index) => {  
        const newColor = originArrayColor.slice(0, index)
        if(newColor.length < selectedStars.length) {
            setSelectedStars(newColor)
        } else {
            const newColor = originArrayColor.slice(0, index)
            setSelectedStars(newColor)
        }   
    }
    return (
        <>
        {createArray(5).map((n, index) => (
            <Star key={index} index={index} selected={selectedStars.length > index} onSelect={() => clickColor(index + 1)}/>
            ))  
        }
        <p>
            {selectedStars.length} из 5 звезд 
        </p>
        </>   
    )
};