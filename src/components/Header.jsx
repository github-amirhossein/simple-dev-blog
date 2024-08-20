import { useState } from 'react';
import Navbar from './Navbar';
import './../App.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  }

  return (
    <header className=''>
      <div className='text-yellow'>Code Club</div>

      <button onClick={handleToggleMenu}>Menu</button>

      {isMenuOpen && <Navbar />}
    </header>
  );
}
