import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginWithAPI, logout, fetchProtectedData } from '../store/authApiSlice';

const AuthAPISection = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('user@example.com');
  const { token, user, loading, error, protectedData, dataLoading } = useSelector(
    (state) => state.authApi
  );

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginWithAPI({ email }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleFetchProtected = () => {
    dispatch(fetchProtectedData());
  };

  if (token) {
    return (
      <div className="auth-api-section">
        <h3>Authenticated</h3>
        <p>
          Token: <code>{token.slice(0, 30)}...</code>
        </p>
        <p>User: {user?.name}</p>

        <button type="button" className="theme-btn" onClick={handleFetchProtected}>
          {dataLoading ? 'Đang tải...' : 'Gọi Protected API'}
        </button>

        {protectedData.length > 0 && (
          <div className="protected-data">
            <h4>Protected Data (3 posts):</h4>
            <ul>
              {protectedData.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          </div>
        )}

        <button type="button" className="theme-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleLogin} className="auth-api-form">
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="auth-input"
        />
      </div>

      {error && <p className="auth-error">{error}</p>}

      <button type="submit" className="theme-btn" disabled={loading}>
        {loading ? 'Đang đăng nhập...' : 'Login API'}
      </button>
    </form>
  );
};

export default AuthAPISection;
