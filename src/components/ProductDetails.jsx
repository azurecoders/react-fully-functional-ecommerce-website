import React, { lazy, Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Items } from "./Data";
import Product from "./Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({ cart, setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);

  useEffect(() => {
    const filterProduct = Items.filter((product) => id == product.id);
    setProduct(filterProduct[0]);

    const relateProduct = Items.filter(
      (e) => e.category === product.category && e.title != product.title
    );
    setRelatedProduct(relateProduct);
  }, [id, product.category]);

  const addToCartBtn = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setCart([...cart, obj]);
    toast.success("Item Added To Cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <main className="container">
        <section className="detail-container">
          <div className="img">
            <img src={product.imgSrc} alt="" />
          </div>
          <div className="text-center">
            <h2 className="card-title">{product.title}</h2>
            <p className="card-text">{product.description}</p>
            <button className="btn btn-primary mx-3">
              Rs. {product.price}
            </button>
            <button
              className="btn btn-warning"
              onClick={() =>
                addToCartBtn(
                  product.id,
                  product.price,
                  product.title,
                  product.description,
                  product.imgSrc
                )
              }
            >
              Add to Cart
            </button>
          </div>
        </section>
        <section>
          <h3 className="text-center">Recommended Products</h3>
          <Product cart={cart} setCart={setCart} items={relatedProduct} />
        </section>
      </main>
    </>
  );
};

export default ProductDetails;
