import { useState } from 'react';
import Navbar from './Navbar';
import { IconMenu } from './Icon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  }

  return (
    <header className='flex justify-between items-center py-4'>
      <div className='text-yellow'>Code Club</div>
      {isMenuOpen && <Navbar />}
      <button className='p-2' onClick={handleToggleMenu}>
        <IconMenu className='fill-black dark:fill-white'/>
      </button>
    </header>
  );
}
