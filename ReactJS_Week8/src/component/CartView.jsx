import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity, selectCartTotal } from '../store/cartSlice';

const CartView = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = useSelector(selectCartTotal);

  if (items.length === 0) {
    return <p>Giỏ hàng trống.</p>;
  }

  return (
    <div className="cart-view">
      <ul className="cart-items">
        {items.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="cart-item-info">
              <p>{item.name}</p>
              <p>{item.price.toLocaleString('vi-VN')} VND</p>
            </div>
            <div className="cart-item-actions">
              <button
                type="button"
                onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                className="theme-btn"
              >
                -
              </button>
              <span className="quantity">{item.quantity}</span>
              <button
                type="button"
                onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                className="theme-btn"
              >
                +
              </button>
              <button
                type="button"
                onClick={() => dispatch(removeFromCart(item.id))}
                className="theme-btn"
              >
                Xóa
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <strong>Tổng tiền: {total.toLocaleString('vi-VN')} VND</strong>
      </div>
    </div>
  );
};

export default CartView;
