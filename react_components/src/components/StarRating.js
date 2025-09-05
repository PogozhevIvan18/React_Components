import React, { useState } from "react";
import Star from "./Star";



export default function StarRating() {
    const [selectedStars,setSelectedStars] = useState(0)
    const createArray = length => [...Array(length)]
    return (
        <>
        {createArray(5).map((n, i) => (
            <Star key={i} selected={selectedStars > i} colorValue={selectedStars} onSelect={() => setSelectedStars(i + 1)}/>))}
        <p>
            {selectedStars} из 5 звезд
        </p>
        </>
    )
};