import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlices";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg shadow-md my-2 ">
              <img className="w-[145px] " src={item.image} />
                           <p className="text-gray-600">Product Name: {item.title}</p>
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600">Price: ${item.price}</p>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={() => dispatch(clearCart())}
            className="mt-4 bg-gray-500 text-white px-3 py-1 rounded"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
