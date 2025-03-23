import React, { useState } from "react";
import "../assets/css/SearchPage.css";
import Advertisement from "../components/Advertisement";

// Hardcoded image imports
import img1 from "../assets/image/Search/img1.jpg";
import img2 from "../assets/image/Search/img2.jpg";
import img3 from "../assets/image/Search/img3.jpg";
import img4 from "../assets/image/Search/img4.jpg";
import img5 from "../assets/image/Search/img5.jpg";
import img6 from "../assets/image/Search/img6.jpg";
import img7 from "../assets/image/Search/img7.jpg";
import img8 from "../assets/image/Search/img8.jpg";
import img9 from "../assets/image/Search/img9.jpg";
import img10 from "../assets/image/Search/img10.jpg";
import img11 from "../assets/image/Search/img11.jpg";
import img12 from "../assets/image/Search/img12.jpg";
import img13 from "../assets/image/Search/img13.jpg";
import img14 from "../assets/image/Search/img14.jpg";
import img15 from "../assets/image/Search/img15.jpg";
import img16 from "../assets/image/Search/img16.jpg";
import img17 from "../assets/image/Search/img17.jpg";
import img18 from "../assets/image/Search/img18.jpg";
import img19 from "../assets/image/Search/img19.jpg";
import img20 from "../assets/image/Search/img20.jpg";

// Function to truncate product name
const truncateName = (name, maxLength = 20) => {
  return name.length > maxLength ? name.substring(0, maxLength) + ".." : name;
};

// Store images and product data in an array
const products = [
  { img: img1, name: "India Gate Daily Delight Basmati Rice | Short Grain", quantity: "5 kg", discountPrice: "₹358", actualPrice: "₹405", discount: "11% Off" },
  { img: img2, name: "India Gate Gold Standard Classic Basmati Rice | 2 Years Aged | Extra Long Grains", quantity: "1 kg", discountPrice: "₹228", actualPrice: "₹250", discount: "9% Off" },
  { img: img3, name: "India Gate Flavourful and Fine Super Basmati Rice | Perfectly Aged Rice", quantity: "1.5 kg", discountPrice: "₹250", actualPrice: "₹278", discount: "10% Off" },
  { img: img4, name: "India Gate Flavourful and Fine Dubar Basmati Rice", quantity: "5 kg", discountPrice: "₹674", actualPrice: "₹749", discount: "10% Off" },
  { img: img5, name: "India Gate Regular Choice Basmati Rice | Medium Grain", quantity: "1 kg", discountPrice: "₹95", actualPrice: "₹103", discount: "8% Off" },
  { img: img6, name: "India Gate 1 Cup Serves 5 Mini Mogra Basmati Rice | Aged Rice | Smart Choice", quantity: "5 kg", discountPrice: "₹330", actualPrice: "₹344", discount: "4% Off" },
  { img: img7, name: "India Gate Everyday Basmati Rice | Medium Grain", quantity: "1 kg", discountPrice: "₹92", actualPrice: "₹97", discount: "5% Off" },
  { img: img8, name: "India Gate Classic Basmati Rice | Extra Long Grains", quantity: "500 g", discountPrice: "₹124", actualPrice: "₹135", discount: "8% Off" },
  { img: img9, name: "Kohinoor Extra Long Basmati Rice | Premium Quality", quantity: "5 kg", discountPrice: "₹670", actualPrice: "₹725", discount: "7% Off" },
  { img: img10, name: "Daawat Biryani Basmati Rice | Superior Aroma", quantity: "1 kg", discountPrice: "₹240", actualPrice: "₹260", discount: "8% Off" },
  { img: img11, name: "Tilda Pure Basmati Rice | Premium Fragrance", quantity: "1 kg", discountPrice: "₹280", actualPrice: "₹310", discount: "9% Off" },
  { img: img12, name: "India Gate Basmati Tibar Rice | Aged to Perfection", quantity: "5 kg", discountPrice: "₹520", actualPrice: "₹580", discount: "10% Off" },
  { img: img13, name: "Fortune Special Biryani Basmati Rice | Extra Long", quantity: "5 kg", discountPrice: "₹600", actualPrice: "₹650", discount: "8% Off" },
  { img: img14, name: "Patanjali Traditional Basmati Rice | Organic & Pure", quantity: "5 kg", discountPrice: "₹490", actualPrice: "₹550", discount: "11% Off" },
  { img: img15, name: "Daawat Rozana Gold Basmati Rice | Everyday Cooking", quantity: "5 kg", discountPrice: "₹540", actualPrice: "₹590", discount: "8% Off" },
  { img: img16, name: "Pansari Premium Basmati Rice | Aged for Extra Flavor", quantity: "5 kg", discountPrice: "₹470", actualPrice: "₹530", discount: "11% Off" },
  { img: img17, name: "Lal Qilla Basmati Rice | Supreme Aroma & Fluffiness", quantity: "1 kg", discountPrice: "₹250", actualPrice: "₹275", discount: "9% Off" },
  { img: img18, name: "Organic Tattva Brown Basmati Rice | Healthy Choice", quantity: "1 kg", discountPrice: "₹180", actualPrice: "₹200", discount: "10% Off" },
  { img: img19, name: "India Gate Feast Rozzana Basmati Rice | Premium Aged", quantity: "5 kg", discountPrice: "₹450", actualPrice: "₹500", discount: "10% Off" },
  { img: img20, name: "Double Chabi Basmati Rice | Fragrant & Fluffy", quantity: "5 kg", discountPrice: "₹620", actualPrice: "₹675", discount: "8% Off" },
];

const imagesPerRow = 5;
const SearchPage = () => {
  const [cart, setCart] = useState({});

  const handleQuantityChange = (index, change) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (!newCart[index]) newCart[index] = 0;

      if (change === 1) newCart[index] += 1;
      else if (change === -1) newCart[index] -= 1;

      if (newCart[index] <= 0) delete newCart[index];
      return newCart;
    });
  };

  return (
    <div className="search-page">
      <Advertisement />
      <div className="image-grid">
        {products.map((product, index) => (
          <div key={index} className="image-container">
            <a href="#">
              <img src={product.img} alt={`Product ${index + 1}`} />
              <div className="product-info">
                <div className="product-top">
                  <span title={product.name}>{truncateName(product.name)}</span>
                  <span>{product.discountPrice}</span>
                </div>
                {product.quantity && (
                  <div className="product-bottom">
                    <span>{product.quantity}</span>
                    {product.actualPrice && <span className="striked-price">{product.actualPrice}</span>}
                  </div>
                )}
              </div>
            </a>
            <div className="cart-button">
              {!cart[index] ? (
                <button className="plus-button" onClick={() => handleQuantityChange(index, 1)}>+</button>
              ) : (
                <div className="expanded-cart">
                  <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                  <span>{cart[index]}</span>
                  <button onClick={() => handleQuantityChange(index, 1)}>+</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
