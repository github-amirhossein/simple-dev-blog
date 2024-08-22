import './App.css';
import Footer from './components/Footer';
import { BrowserRouter  , Route , Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/about';




function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<About />} />

        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
