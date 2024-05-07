import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  return (
    <main>
      <section className="cart-section">
        <div className="cart-container">
          {cart.length == 0 ? (
            <>
              <h3>Cart is Empty</h3>
              <Link aria-label="continue" to="/" className="btn btn-warning">
                Contiune Shopping
              </Link>
            </>
          ) : (
            cart.map((product) => (
              <div className="cart-card">
                <div className="image-container">
                  <img src={product.imgSrc} alt="" />
                </div>
                <div className="content">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            ))
          )}
        </div>
        {cart.length != 0 && (
          <section>
            <div className="button-section my-5">
              <button className="btn btn-success">Check Out</button>
              <button
                onClick={() => setCart([])}
                className="btn btn-danger mx-4"
              >
                Clear Cart
              </button>
            </div>
          </section>
        )}
      </section>
    </main>
  );
};

export default Cart;
