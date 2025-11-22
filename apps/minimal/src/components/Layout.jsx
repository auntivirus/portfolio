import React from 'react';
import { Link } from 'react-scroll';

const Layout = ({ children }) => {
  const navItems = ['About', 'Experience', 'Skills', 'Projects', 'Contact'];

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar Navigation */}
      <aside style={{ 
        width: '250px', 
        position: 'fixed', 
        height: '100vh', 
        padding: '4rem 2rem',
        borderRight: '1px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'var(--bg-color)',
        zIndex: 10
      }} className="sidebar">
        <div>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '3rem' }}>Smit Joshi.</h1>
          <nav>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {navItems.map((item) => (
                <li key={item}>
                  <Link 
                    to={item.toLowerCase()} 
                    duration={500} 
                    offset={-50}
                    style={{
                      color: 'var(--text-secondary)', 
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      fontSize: '0.85rem'
                    }}
                    activeClass="active-link"
                    spy={true}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          © {new Date().getFullYear()}
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ marginLeft: '250px', width: '100%' }}>
        {children}
      </main>

      <style>{`
        .active-link {
          color: var(--text-primary) !important;
          font-weight: 600;
          border-left: 2px solid var(--text-primary);
          padding-left: 0.5rem;
        }
        @media (max-width: 768px) {
          .sidebar { display: none !important; }
          main { margin-left: 0 !important; }
        }
      `}</style>
    </div>
  );
};

export default Layout;
