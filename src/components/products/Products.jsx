/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Products = () => {
  return (
    <section className="products">
      <div className="products-heading">
        <h1 className="products-heading-text">Featured Products</h1>
      </div>
      <div className="products-wrapper">
        <div className="product">
          <img
            src={require("../../images/product1.png")}
            alt="product-1"
            className="product-img"
          />
          <div className="product-description">
            <h2 className="product-description-heading">Dress</h2>
            <p className="product-description-price">
              Price: <span>$150</span>
            </p>
            <a href="#" className="product-description-btn">
              Buy Now
            </a>
          </div>
        </div>
        <div className="product">
          <img
            src={require("../../images/product2.png")}
            alt="product-2"
            className="product-img"
          />
          <div className="product-description">
            <h2 className="product-description-heading">Pants</h2>
            <p className="product-description-price">
              Price: <span>$100</span>
            </p>
            <a href="#" className="product-description-btn">
              Buy Now
            </a>
          </div>
        </div>
        <div className="product">
          <img
            src={require("../../images/product3.png")}
            alt="product-3"
            className="product-img"
          />
          <div className="product-description">
            <h2 className="product-description-heading">Shirt</h2>
            <p className="product-description-price">
              Price: <span>$50</span>
            </p>
            <a href="#" className="product-description-btn">
              Buy Now
            </a>
          </div>
        </div>
      </div>
      <div className="products-btn">
        <a href="#" className="btn">
          <div className="btn-bg"></div>
          <div className="arrow">
            <div className="arrow-line arrow-line-1"></div>
            <div className="arrow-line arrow-line-2"></div>
            <div className="arrow-line arrow-line-3"></div>
          </div>
          <span className="btn-text">See More</span>
        </a>
      </div>
    </section>
  );
};

export default Products;
