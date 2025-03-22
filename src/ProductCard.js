import React from 'react';

function ProductCard({ product }) {
    return (
        <div className="col-md-3 mb-4">
            <div className="card text-center">
                <img src={product.image} alt={product.name} className="card-img-top" style={{ width: '60%', height: 'auto', margin: '0 auto' }} />
                <div className="card-body">
                    <h5>{product.name}</h5>
                    <p>{product.desc}</p>
                    <p><strong>{product.price}</strong></p>
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
