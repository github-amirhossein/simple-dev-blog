import { useState } from 'react';
import Navbar from './Navbar';
import { IconMenu } from './Icon';
import { useLockBodyScroll } from '@uidotdev/usehooks';
import { ButtonDarkMode } from './ButtonDarkMode';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  }

  return (
    <header className='fixed text-2xl top-0 left-0 z-30 bg-[#eee] dark:bg-black w-full flex justify-between items-center py-4 px-3 border-b-0 dark:border-b-2'>
      <div className=' flex gap-4 items-center'>
        <span className='text-yellow'>Code Club</span>
          <ButtonDarkMode className='scale-125 border-spacing-2' />
      </div>

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
