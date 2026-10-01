import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedRoutes from './AnimatedRoutes';
import './App.scss';

function App() {
  return (
    <Router>
      <>
        <Toaster 
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#333',
              color: '#fff',
            }
          }}
        />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </>
    </Router>
  );
}

export default App;
