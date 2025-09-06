import React from 'react'
import './product.css'
const ProductCard = ({ data }) => {
    return (
        <div className='wrapper' >
            {
                data.map((value, index) => {
                    return <div key={index}  >
                        <div className="product-card">
                            <img
                                src={value.thumbnail}
                                alt={value.title}
                                className="product-image"
                            />

                            <div className="product-content">
                                <h2 className="product-title">{value.title}</h2>
                                <p className="product-description">{value.description}</p>

                                <div className="product-info">
                                    <span className="product-price">${value.price}</span>
                                </div>
                                <div className="product-extra">
                                    <p>⭐ Rating: {value.rating}</p>
                                    <p>Stock: {value.stock}</p>
                                    <p>Shipping: {value.shippingInformation}</p>
                                    <p>Warranty: {value.warrantyInformation}</p>
                                    <p>Return Policy: {value.returnPolicy}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default ProductCard