function CartItem() {
  return (
    <div>
      <h1>Shopping Cart</h1>

      <p>
        Snake Plant | ₹200 | Qty: 1 
        <button>+</button>
        <button>-</button>
        <button>Delete</button>
      </p>

      <p>
        Aloe Vera | ₹150 | Qty: 2
        <button>+</button>
        <button>-</button>
        <button>Delete</button>
      </p>

      <h2>Total Cost: ₹500</h2>

      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>

      <button>
        Continue Shopping
      </button>
    </div>
  );
}

export default CartItem;
