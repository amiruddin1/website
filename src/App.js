import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import AboutUsPage from './Components/AboutUsPage/AboutUsPage';
import Gallery from './Components/Gallery/Gallery';
import ContactUs from './Components/Contact Us/ContactUs';
import Product from './Components/Products/Product';

function App() {
  return (
    <div className='parent-div'>
      <BrowserRouter >
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/products" element={<Product />} />
            <Route path="/media-gallery" element={<Gallery />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
