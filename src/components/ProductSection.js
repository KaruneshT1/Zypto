import React from 'react';

// List of products, where images are stored in a specific directory
const products = [
  {
    category: "Coffee Lovers",
    items: [
      { name: "Espresso Delight", price: "₹399", image: "coffee/coffee.jpg", desc: "450ml" },
      { name: "Latte Love", price: "₹349", image: "coffee/coldCoffee.jpg", desc: "350ml" },
      { name: "Cappuccino Craze", price: "₹299", image: "coffee/croiWithCoffee.jpg", desc: "250ml" },
    ]
  }
];

function ProductSection() {
  // Dynamically import images
  const importImages = require.context('../assets/image', true, /\.(jpg|jpeg|png|gif)$/);

  return (
    <div id="product-sections">
      {products.map((category, index) => (
        <div key={index} className="product-section mb-5">
          <h2>{category.category}</h2>
          <div className="product-carousel">
            <div className="product-row">
              {category.items.map((item, index) => {
                const imagePath = importImages(`./${item.image}`); // Import image dynamically using the path
                return (
                  <div key={index} className="col-md-3 mb-4">
                    <div className="card text-center">
                      <img src={imagePath} alt={item.name} className="card-img-top" style={{ width: '60%', height: 'auto', margin: '0 auto' }} />
                      <div className="card-body">
                        <h5>{item.name}</h5>
                        <p>{item.desc}</p>
                        <p><strong>{item.price}</strong></p>
                        <button className="btn btn-primary">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductSection;
