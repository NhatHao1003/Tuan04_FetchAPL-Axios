import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/usersSlice';

const UsersList = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="users-loading">
        <p>Đang tải danh sách user...</p>
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="users-error">
        <p>Lỗi: {error}</p>
      </div>
    );
  }

  return (
    <div className="users-list">
      <ul>
        {data.map((user) => (
          <li key={user.id} className="user-item">
            <p>
              <strong>{user.name}</strong>
            </p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
