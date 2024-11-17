import "./Productcart.css"

function Productcart({ product, isInCart, addToCart, removeFromCart }) {
  return (
    <div className="Product-cart">
       <img src={product.imageUrl} alt={product.name }   /> 
     <div className=" cart2">
     <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>₹"{product.price}"</p>
      {isInCart ? (
        <button onClick={() => removeFromCart(product.id)}>Remove From Cart</button>
      ) : (
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      )}
     </div>
    </div>
  );
}

export default Productcart;

