import React from "react";

const SearchPage = () => {
  const images = Array.from({ length: 30 }, (_, i) => `/assets/images/image${i + 1}.jpg`);

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        {images.map((src, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4">
            <a href={`/product${index + 1}.html`}>
              <img src={src} className="img-fluid rounded shadow" alt={`Product ${index + 1}`} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
