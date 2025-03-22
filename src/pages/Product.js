import React from "react";

const Product = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        {/* Product Image */}
        <div className="col-md-6">
          <img src="assets/image/fruit/bottle-gourd.jpg" className="img-fluid rounded shadow" alt="Bottle Gourd" />
        </div>

        {/* Product Details */}
        <div className="col-md-6">
          <h1>Bottle Gourd</h1>
          <p className="text-muted">Net Qty: 1 piece</p>
          <h2 className="text-success">
            ₹34 <small className="text-decoration-line-through text-muted">₹48</small>
          </h2>
          <p className="text-danger">29% Off</p>
          <button className="btn btn-primary btn-lg mb-3">Add To Cart</button>

          {/* Coupons & Offers */}
          <div className="border p-3 mb-3">
            <h5>Coupons & Offers</h5>
            <ul className="list-unstyled">
              <li><i className="fas fa-tag text-warning"></i> Get assured rewards with CRED</li>
              <li><i className="fas fa-tag text-warning"></i> Get flat ₹25 discount with BHIM UPI</li>
              <li><i className="fas fa-tag text-warning"></i> Get up to ₹100 cashback using Amazon Pay Later</li>
              <li><i className="fas fa-tag text-warning"></i> Get up to ₹25 cashback using Amazon Pay Balance</li>
              <li><i className="fas fa-tag text-warning"></i> Flat 20% back, up to ₹75, on a minimum order value of ₹399.</li>
            </ul>
          </div>

          {/* Product Highlights */}
          <div className="border p-3 mb-3">
            <h5>Highlights</h5>
            <ul className="list-unstyled">
              <li><strong>Imported:</strong> No</li>
              <li><strong>Organic:</strong> No</li>
              <li><strong>Brand:</strong> Unbranded</li>
              <li><strong>Good for:</strong> Heart Health</li>
              <li><strong>Product Type:</strong> Bottle Gourd</li>
              <li><strong>Unit:</strong> 1 pc</li>
              <li><strong>Weight:</strong> 350 - 500 g</li>
            </ul>
          </div>

          {/* Additional Information */}
          <div className="border p-3 mb-3">
            <h5>Information</h5>
            <p><strong>Disclaimer:</strong> All images are for representational purposes only. It is advised that you read the batch and manufacturing details, directions for use, allergen information, health and nutritional claims (wherever applicable), and other details mentioned on the label before consuming the product. For combo items, individual prices can be viewed on the page.</p>
            <p><strong>Customer Care:</strong> In case of any issue, contact us at <a href="mailto:support@zeptonow.com">support@zeptonow.com</a></p>
            <p><strong>Seller Name:</strong> Drogheria Sellers Private Limited</p>
            <p><strong>Seller Address:</strong> NB 1001 & NB 1002, North Block, Empire Tower, Cloud City, Plot Gut No 31, Mouje Ejthan, Airoli, Mumbai, Navi Mumbai Municipal Corporation (Thane Zone-2), Maharashtra-400708</p>
            <p><strong>Seller License No.:</strong> 11522998001570</p>
            <p><strong>Country of Origin:</strong> India</p>
            <p><strong>Shelf Life:</strong> 5 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
