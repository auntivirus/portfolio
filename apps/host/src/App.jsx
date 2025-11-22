import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, ThemeToggle, Loader } from '@portfolio/shared';
import './index.css';

// Lazy load remotes
const MainApp = React.lazy(() => import('mainApp/App'));
const MinimalApp = React.lazy(() => import('minimalApp/App'));

const Landing = () => (
  <div className="landing">
    <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
      <ThemeToggle />
    </div>
    <h1>Select Portfolio Version</h1>
    <div className="options">
      <Link to="/main" className="card main-card">
        <h2>Main Portfolio</h2>
        <p>Full-featured, rich design with animations.</p>
      </Link>
      <Link to="/minimal" className="card minimal-card">
        <h2>Minimal Portfolio</h2>
        <p>Clean, typography-focused, less is more.</p>
      </Link>
    </div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/main/*" element={<MainApp />} />
            <Route path="/minimal/*" element={<MinimalApp />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
