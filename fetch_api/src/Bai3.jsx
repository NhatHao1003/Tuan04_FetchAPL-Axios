import React, { useState, useEffect } from 'react';

function Bai3() {
  const [userId, setUserId] = useState(1);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (userId < 1 || userId > 10) {
      setError('User not found');
      setUserData(null);
      return; 
    }

    const fetchDetail = async () => {
      try {
        setError('');
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError('Lỗi khi gọi API');
      }
    };

    fetchDetail();
  }, [userId]); 

  return (
    <div>
      <input 
        type="number" 
        value={userId} 
        onChange={(e) => setUserId(Number(e.target.value))} 
      />
      {error && <p style={{ color: 'red' }}>{error}</p>} 
      {userData && (
        <div>
          <h3>Name: {userData.name}</h3>
          <p>Phone: {userData.phone}</p> 
          <p>Website: {userData.website}</p>
        </div>
      )}
    </div>
  );
}
export default Bai3;