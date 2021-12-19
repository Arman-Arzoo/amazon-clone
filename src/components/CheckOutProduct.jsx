import React from 'react'
import './checkoutProduct.css';
import StarIcon from "@material-ui/icons/Star";

export const CheckOutProduct = ({ id, rating, img, price, title }) => {
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={img} alt="product-img" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_, i) => (
                                <StarIcon key={i} />
                            ))
                    }
                </div>
                <button>Remove from busket</button>

            </div>
        </div>
    )
}
