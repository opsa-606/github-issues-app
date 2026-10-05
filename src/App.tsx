import React from 'react';
import { TaskTracker } from './components/TaskTracker';

const App: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0d1117', color: '#c9d1d9', padding: '40px 20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#58a6ff', margin: '0 0 10px 0' }}>Практична робота 1.7</h1>
        <p style={{ color: '#8b949e', fontSize: '16px' }}>
          Платформа GitHub: репозиторії, Issues, Pull Requests, захист гілок
        </p>
      </header>
      <main>
        <TaskTracker />
      </main>
    </div>
  );
};

export default App;
