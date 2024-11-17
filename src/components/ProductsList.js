import Productcart from "./Productcart";
import "./ProductList.css"

function ProductList({ products, cartItems, addToCart, removeFromCart, isInCart }) {
  return (
    <div className="Product-list">
      {products.map((product) => (
        <Productcart
          key={product.id}
          product={product}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          isInCart={isInCart(product)}
        />
      ))}
    </div>
  );
}

export default ProductList;


