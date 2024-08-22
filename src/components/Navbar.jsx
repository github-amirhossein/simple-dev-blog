import { useEffect, useState } from 'react';
import { IconMoon } from './Icon';

export default function Navbar({ children, className }) {
  const [darkMode, setDarkmode] = useState(true);

  useEffect(
    function () {
      darkMode
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark');
    },
    [darkMode]
  );
  return (
    <nav
      className={`absolute top-0 left-0 w-full flex flex-col gap-8 p-3 rounded-b-3xl bg-white dark:bg-black border-4 border-yellow text-2xl z-30 
        origin-top-right duration-200
        ${className}`}
    >
      <div className='flex justify-between'>
        <button
          onClick={() => setDarkmode((dark) => !dark)}
          className='w-8 text-4xl'
        >
          <IconMoon />
        </button>

        {/* close menu button */}
        {children}
      </div>

      <ul className='flex flex-col items-center gap-4'>
        <li>
          <a href='#'>About</a>
        </li>

        <li>
          <a href='#'>Our team</a>
        </li>

        <li>
          <a href='#'>Projects</a>
        </li>

        <li>
          <a href='#'>Contacts</a>
        </li>
      </ul>
    </nav>
  );
}
