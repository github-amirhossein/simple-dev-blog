import { useState } from 'react';
import Navbar from './Navbar';
import { IconMenu } from './Icon';
import { useLockBodyScroll } from '@uidotdev/usehooks';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  }

  return (
    <header className='flex justify-between items-center py-4'>
      <div className='text-yellow'>Code Club</div>

      <Navbar className={isMenuOpen ? 'rotate-0' : 'rotate-90'}>
        <ButtonMenu onToggleMenu={handleToggleMenu} />
      </Navbar>

      <ButtonMenu onToggleMenu={handleToggleMenu} />

      {isMenuOpen && <Layback />}
    </header>
  );
}

export function ButtonMenu({ onToggleMenu }) {
  return (
    <button className='p-2' onClick={onToggleMenu}>
      <IconMenu />
    </button>
  );
}

function Layback() {
  useLockBodyScroll();

  return (
    <div className='absolute top-0 left-0 w-full h-screen z-10 bg-layback'></div>
  );
}
