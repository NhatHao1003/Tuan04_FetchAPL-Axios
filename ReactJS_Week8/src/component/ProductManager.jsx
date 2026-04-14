import { useSelector } from 'react-redux';
import AuthAPISection from './AuthAPISection';
import ProductList from './ProductList';
import CartView from './CartView';

const ProductManager = () => {
  const token = useSelector((state) => state.authApi.token);
  const user = useSelector((state) => state.authApi.user);
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="product-manager">
      <div className="pm-header">
        <h3>Product Manager Mini App</h3>
        {token && (
          <p className="pm-user-info">
            Logged in as: <strong>{user?.name}</strong> | Cart items: {cartItems.length}
          </p>
        )}
      </div>

      <div className="pm-layout">
        <div className="pm-auth">
          <h4>Authentication</h4>
          <AuthAPISection />
        </div>

        {token && (
          <>
            <div className="pm-products">
              <h4>Sản phẩm</h4>
              <ProductList />
            </div>

            <div className="pm-cart">
              <h4>Giỏ hàng</h4>
              <CartView />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductManager;
