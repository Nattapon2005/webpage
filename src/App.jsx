import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TechFX from './components/TechFX';
import AnimatedRoutes from './AnimatedRoutes';
import './App.scss';

function App() {
  return (
    <Router>
      <TechFX />
      <div className="site-shell">
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#111',
              color: '#fff',
              border: '1px solid rgba(79, 209, 255, 0.35)',
              boxShadow: '0 12px 35px rgba(0, 0, 0, 0.35)',
            }
          }}
        />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
