import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ items, cart, setCart }) => {
  const addToCart = (id, price, title, description, imgSrc) => {
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
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <main className="container my-5 ">
        <section className="row d-flex justify-content-center align-items-center">
          {items.map((product) => (
            <div
              key={product.id}
              className="col-lg-4 col-md-6 my-3 text-center d-flex justify-content-center align-items-center"
            >
              <div className="card" style={{ width: "18rem" }}>
                <Link
                  aria-label={product.title}
                  to={`/product/${product.id}`}
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={product.imgSrc}
                    className="card-img-top"
                    alt="..."
                  />
                </Link>
                <div className="card-body">
                  <p
                    style={{ fontWeight: "bold", fontSize: "1.3rem" }}
                    className="card-title"
                  >
                    {product.title}
                  </p>
                  <p className="card-text">{product.description}</p>
                  <button className="btn btn-primary mx-3">
                    Rs. {product.price}
                  </button>
                  <button
                    onClick={() =>
                      addToCart(
                        product.id,
                        product.price,
                        product.title,
                        product.description,
                        product.imgSrc
                      )
                    }
                    className="btn btn-warning"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default Product;
