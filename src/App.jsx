import './App.css';
import Footer from './components/Footer';
import { BrowserRouter  , Route , Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/about';
import Contact from './components/contact';




function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
