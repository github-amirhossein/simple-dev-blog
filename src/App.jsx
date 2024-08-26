import './App.css';
import Footer from './components/Footer';
import { BrowserRouter  , Route , Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/contact';
import Ourteam from './components/Ourteam';




function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/ourteam' element={<Ourteam />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
