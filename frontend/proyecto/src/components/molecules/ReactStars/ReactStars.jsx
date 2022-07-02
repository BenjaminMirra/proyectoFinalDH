import React from 'react'
import ReactStars from "react-rating-stars-component";

export const Stars = ({ setRating,productId }) => {

    
    const ratingChanged = (newRating) => {
        console.log(productId);
        console.log(newRating);
        
        setRating("2")
    };

    return (
        <ReactStars
            count={5}
            onChange={ratingChanged}
            size={20}
            activeColor="#ffd700"
        />
    )
}


