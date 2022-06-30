import React from 'react'
import ReactStars from "react-rating-stars-component";

export const Stars = ({ setRating }) => {


    const ratingChanged = (newRating) => {
        console.log(newRating)
        setRating("2")
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


