import React, { useState } from 'react';

interface Task {
  id: number;
  title: string;
  status: 'Open' | 'In Progress' | 'Closed';
}

export const TaskTracker: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Налаштувати Branch Protection для гілки main', status: 'Closed' },
    { id: 2, title: 'Створити GitHub Issue #1 для розробки компонента', status: 'Closed' },
    { id: 3, title: 'Створити Pull Request та пройти Code Review', status: 'In Progress' },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      title: newTaskTitle,
      status: 'Open',
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
  };

  const handleToggleStatus = (id: number) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        const nextStatus = task.status === 'Open' ? 'In Progress' : task.status === 'In Progress' ? 'Closed' : 'Open';
        return { ...task, status: nextStatus };
      }
      return task;
    }));
  };

  return (
    <div style={{ padding: '24px', fontFamily: 'Arial, sans-serif', maxWidth: '650px', margin: '0 auto', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <h2 style={{ color: '#24292f', borderBottom: '2px solid #fd8c73', paddingBottom: '8px' }}>
        GitHub Issues & PR Tracker
      </h2>
      
      <form onSubmit={handleAddTask} style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Введіть назву завдання або номер Issue..."
          style={{ flex: 1, padding: '10px', fontSize: '14px', borderRadius: '6px', border: '1px solid #d0d7de' }}
        />
        <button type="submit" style={{ padding: '10px 18px', backgroundColor: '#1f883d', color: '#ffffff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
          Додати Issue
        </button>
      </form>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map(task => (
          <li key={task.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', marginBottom: '10px', backgroundColor: '#f6f8fa', border: '1px solid #d0d7de', borderRadius: '6px' }}>
            <span style={{ color: '#1f2328' }}><strong>#{task.id}</strong> {task.title}</span>
            <button
              onClick={() => handleToggleStatus(task.id)}
              style={{
                padding: '6px 14px',
                borderRadius: '20px',
                border: 'none',
                color: '#ffffff',
                fontWeight: 'bold',
                cursor: 'pointer',
                backgroundColor: task.status === 'Closed' ? '#8250df' : task.status === 'In Progress' ? '#9a6700' : '#1a7f37'
              }}
            >
              {task.status}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
