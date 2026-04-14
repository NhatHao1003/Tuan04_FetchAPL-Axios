import { useState } from 'react';

const LoginModal = ({ onClose, onSubmit }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(username.trim() || 'student01');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(event) => event.stopPropagation()}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Nhap username"
            className="modal-input"
          />
          <div className="modal-actions">
            <button type="button" onClick={onClose} className="theme-btn">
              Huy
            </button>
            <button type="submit" className="theme-btn">
              Dang nhap
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
