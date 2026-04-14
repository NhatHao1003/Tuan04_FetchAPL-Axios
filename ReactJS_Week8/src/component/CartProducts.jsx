import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const SAMPLE_PRODUCTS = [
  { id: 1, name: 'Laptop', price: 10000000 },
  { id: 2, name: 'Phone', price: 5000000 },
  { id: 3, name: 'Tablet', price: 3000000 },
];

const CartProducts = () => {
  const dispatch = useDispatch();

  return (
    <div className="cart-products">
      <h3>Sản phẩm</h3>
      <div className="product-list">
        {SAMPLE_PRODUCTS.map((product) => (
          <div key={product.id} className="product-card">
            <p>{product.name}</p>
            <p className="product-price">{product.price.toLocaleString('vi-VN')} VND</p>
            <button
              type="button"
              className="theme-btn"
              onClick={() => dispatch(addToCart(product))}
            >
              Thêm vào giỏ
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartProducts;
