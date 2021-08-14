import { Wrapper } from "./Cart.styles";
import CartItem from "../CartItem/CartItem";

import { CartItemType } from "../App";
import Item from "../Item/Item";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: CartItemType[]) =>
    items
      .reduce(
        (accumaltor: number, item) => accumaltor + item.amount * item.price,
        0
      )
      .toFixed(2);

  return (
    <Wrapper>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No Items</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Cart Total: ${calculateTotal(cartItems)}</h2>
    </Wrapper>
  );
};

export default Cart;
