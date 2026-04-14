import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../store/counterSlice';

const CompoB = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <div style={{ padding: '10px', border: '1px solid green', marginTop: '10px' }}>
      <h2>Component B</h2>
      <p>User: <strong>{user ? user.username : 'Chua dang nhap'}</strong></p>
      <button onClick={() => dispatch(increment())}>Tăng (+)</button>
      <button onClick={() => dispatch(decrement())} style={{ marginLeft: '10px' }}>Giảm (-)</button>
    </div>
  );
};

export default CompoB;