import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeNotification } from '../store/notificationSlice';

const Toast = ({ notification }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(removeNotification(notification.id));
    }, 3000);

    return () => clearTimeout(timer);
  }, [notification.id, dispatch]);

  return (
    <div className={`toast toast--${notification.type}`}>
      <p>{notification.message}</p>
      <button
        type="button"
        onClick={() => dispatch(removeNotification(notification.id))}
        className="toast-close"
      >
        ×
      </button>
    </div>
  );
};

const NotificationContainer = () => {
  const notifications = useSelector((state) => state.notification.items);

  return (
    <div className="notification-container">
      {notifications.map((notif) => (
        <Toast key={notif.id} notification={notif} />
      ))}
    </div>
  );
};

export default NotificationContainer;
