import React, { useState, useEffect } from 'react';

function Bai2() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
        if (!response.ok) throw new Error('Lỗi khi tải dữ liệu');
        const data = await response.json();
        setUsers(data); 
      } catch (err) {
        setError(err.message); 
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Lỗi: {error}</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
}
export default Bai2;