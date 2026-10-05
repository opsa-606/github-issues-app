import React, { useState } from 'react';

interface UserProfile {
  id: number;
  name: string;
  details?: {
    email: string;
    address?: {
      city: string;
      zip: string;
    };
  };
  orders?: { id: number; title: string; price: number }[];
}

export default function App() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchUserData = () => {
    setLoading(true);
    setTimeout(() => {
      // Імітація відповіді з сервера з неповною або некоректною структурою
      setUser({
        id: 101,
        name: 'Олексій Іваненко',
        // details відсутній в відповіді сервера!
      });
      setLoading(false);
    }, 800);
  };

  const calculateTotal = () => {
    return (user?.orders ?? []).reduce((sum, item) => sum + item.price, 0);
  };

  return (
    <div style={{ padding: '24px', fontFamily: 'sans-serif', maxWidth: '600px' }}>
      <h2>Панель користувача (AI Debugging Demo)</h2>
      
      <button 
        onClick={fetchUserData}
        style={{ padding: '10px 16px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        {loading ? 'Завантаження...' : 'Завантажити профіль'}
      </button>

      {user && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '16px', borderRadius: '6px' }}>
          <h3>{user.name}</h3>
          
          <p><strong>Місто:</strong> {user.details?.address?.city ?? 'не вказано'}</p>

          <h4>Замовлення:</h4>
          <p>Загальна сума: {calculateTotal()} грн</p>
        </div>
      )}
    </div>
  );
}
