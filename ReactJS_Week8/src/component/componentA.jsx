import {useDispatch, useSelector} from 'react-redux'
import { addNotification } from '../store/notificationSlice';

const CompoA = () =>{
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);
    const user = useSelector((state) => state.auth.user);

    return (
        <div>
            <h2>Component A</h2>
            <p>Gia tri hien tai: <strong>{count}</strong></p>
            <p>User: <strong>{user ? user.username : 'Chua dang nhap'}</strong></p>
            <button
              type="button"
              className="theme-btn"
              onClick={() => dispatch(addNotification({ message: 'Xin chao tu Component A!', type: 'success' }))}
            >
              Test Notification
            </button>
        </div>
    );
};
export default CompoA;