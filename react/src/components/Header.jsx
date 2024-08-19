import { useState } from 'react';
import Navbar from './Navbar';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  }

  return (
    <header>
      <div>AI Developer Team</div>

      <button onClick={handleToggleMenu}>Menu</button>

      {isMenuOpen && <Navbar />}
    </header>
  );
}


