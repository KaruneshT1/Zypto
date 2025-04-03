import React, { useRef, useState, useEffect } from 'react';
import '../assets/css/ProductSection.css';

const products = [
  {
    category: "Coffee Lovers",
    items: [
      { name: "Espresso Delight", price: "₹399", image: "coffee/coffee.jpg", desc: "450ml" },
      { name: "Latte Love", price: "₹349", image: "coffee/coldCoffee.jpg", desc: "350ml" },
      { name: "Cappuccino Craze", price: "₹299", image: "coffee/croiWithCoffee.jpg", desc: "250ml" },
      { name: "Espresso Delight", price: "₹399", image: "coffee/coffee.jpg", desc: "450ml" },
      { name: "Latte Love", price: "₹349", image: "coffee/coldCoffee.jpg", desc: "350ml" },
      { name: "Cappuccino Craze", price: "₹299", image: "coffee/croiWithCoffee.jpg", desc: "250ml" },
    ],
  },
  {
    category: "Elevate Yourself",
    items: [
      { name: "Hair Drier", price: "₹549", image: "elevate/head.jpg", desc: "450ml" },
      { name: "Portronics Konnet 4.9", price: "₹649", image: "elevate/konnet.jpg", desc: "350ml" },
      { name: "Resistance Bands", price: "₹499", image: "elevate/plate.jpg", desc: "Set of 3, light to heavy" },
    ],
  },
  {
    category: "Home Needs",
    items: [
      { name: "Home Adapter", price: "₹3,999", image: "HomeNeeds/adapto.jpg", desc: "Compact and powerful" },
      { name: "Air Purifier", price: "₹5,499", image: "HomeNeeds/cord.jpg", desc: "HEPA filter, 20m² coverage" },
      { name: "LED Lamp", price: "₹899", image: "HomeNeeds/konnet.jpg", desc: "Adjustable brightness, USB powered" },
    ],
  },
];

function ProductSection() {
  const importImages = require.context('../assets/image', true, /\.(jpg|jpeg|png|gif)$/);

  return (
    <div id="product-sections">
      {products.map((category, catIndex) => {
        const scrollRef = useRef(null);
        const [showLeftArrow, setShowLeftArrow] = useState(false);
        const [showRightArrow, setShowRightArrow] = useState(true);

        // Scroll Function
        const scroll = (direction) => {
          const scrollAmount = window.innerWidth * 0.4; // Dynamic scrolling
          if (scrollRef.current) {
            scrollRef.current.scrollBy({
              left: direction === "left" ? -scrollAmount : scrollAmount,
              behavior: "smooth",
            });
          }
        };

        // Check Arrow Visibility
        const checkArrows = () => {
          if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
          }
        };

        // Attach Scroll Event Listener
        useEffect(() => {
          const ref = scrollRef.current;
          if (ref) {
            ref.addEventListener("scroll", checkArrows);
            checkArrows(); // Initial Check
          }
          return () => ref && ref.removeEventListener("scroll", checkArrows);
        }, []);

        return (
          <div key={catIndex} className="product-section">
            <h2>{category.category}</h2>
            <div className="product-carousel">

              {/* Left Scroll Button */}
              {showLeftArrow && (
                <button className="scroll-btn left" onClick={() => scroll("left")}>‹</button>
              )}

              <div className="product-row scrollable-row" ref={scrollRef}>
                {category.items.map((item, index) => {
                  const imagePath = importImages(`./${item.image}`);
                  return (
                    <div key={index} className="card text-center">
                      <img src={imagePath} alt={item.name} className="card-img-top" />
                      <div className="card-body">
                        <h5>{item.name}</h5>
                        <p>{item.desc}</p>
                        <p><strong>{item.price}</strong></p>
                        <button className="btn btn-primary">Add to Cart</button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Scroll Button */}
              {showRightArrow && (
                <button className="scroll-btn right" onClick={() => scroll("right")}>›</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductSection;
