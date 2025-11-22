import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon, FaDesktop } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div style={{ 
      display: 'flex', 
      gap: '0.5rem', 
      padding: '0.5rem', 
      backgroundColor: 'var(--surface, #eee)', 
      borderRadius: '2rem',
      border: '1px solid var(--border, #ccc)'
    }}>
      <button
        onClick={() => setTheme('light')}
        style={{
          background: theme === 'light' ? 'var(--primary, #2563eb)' : 'transparent',
          color: theme === 'light' ? '#fff' : 'var(--text-secondary, #666)',
          border: 'none',
          borderRadius: '50%',
          width: '30px',
          height: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        title="Light Mode"
      >
        <FaSun size={14} />
      </button>
      <button
        onClick={() => setTheme('system')}
        style={{
          background: theme === 'system' ? 'var(--primary, #2563eb)' : 'transparent',
          color: theme === 'system' ? '#fff' : 'var(--text-secondary, #666)',
          border: 'none',
          borderRadius: '50%',
          width: '30px',
          height: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        title="System Mode"
      >
        <FaDesktop size={14} />
      </button>
      <button
        onClick={() => setTheme('dark')}
        style={{
          background: theme === 'dark' ? 'var(--primary, #2563eb)' : 'transparent',
          color: theme === 'dark' ? '#fff' : 'var(--text-secondary, #666)',
          border: 'none',
          borderRadius: '50%',
          width: '30px',
          height: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        title="Dark Mode"
      >
        <FaMoon size={14} />
      </button>
    </div>
  );
};

export default ThemeToggle;
