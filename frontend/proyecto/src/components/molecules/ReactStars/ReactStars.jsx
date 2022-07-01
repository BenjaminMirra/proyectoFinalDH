import React from 'react'
import ReactStars from "react-rating-stars-component";

export const Stars = ({ setRating, firstClick, setFirstClick }) => {


    const ratingChanged = () => {
        if (!firstClick) {
            setRating("2")
            setFirstClick(true)
            console.log(firstClick)
        }
    };

    return (
        <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
        />
    )
}


