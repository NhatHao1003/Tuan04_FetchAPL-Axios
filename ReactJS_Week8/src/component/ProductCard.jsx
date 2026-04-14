import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { addNotification } from '../store/notificationSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authApi.token);

  const handleAddToCart = () => {
    if (!token) {
      dispatch(addNotification({ message: 'Vui lòng đăng nhập trước', type: 'error' }));
      return;
    }

    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
    }));

    dispatch(addNotification({
      message: `${product.name} đã được thêm vào giỏ`,
      type: 'success',
    }));
  };

  return (
    <div className="product-card-mini">
      <h4>{product.name}</h4>
      <p className="product-desc">{product.title}</p>
      <p className="product-price">{product.price.toLocaleString('vi-VN')} VND</p>
      <button
        type="button"
        className="theme-btn"
        onClick={handleAddToCart}
      >
        Thêm vào giỏ
      </button>
    </div>
  );
};

export default ProductCard;
