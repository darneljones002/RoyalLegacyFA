import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Appointments from './pages/Appointments';
import Appearances from './pages/Appearances';
import Reviews from './pages/Reviews';
import ReviewClosed from './pages/ReviewClosed';

const newReviews = JSON.parse(localStorage.getItem('newReviews')) || [];

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-earth-green text-earth-dark">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/appearances" element={<Appearances />} />
            <Route path="/reviews" element={newReviews.length >= 40 ? <ReviewClosed /> : <Reviews />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
