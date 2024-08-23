import { ButtonDarkMode } from './ButtonDarkMode';

export default function Navbar({ children, className }) {
  return (
    <nav
      className={`absolute top-0 left-0 w-full flex flex-col gap-8 p-3 rounded-b-3xl bg-white text-black dark:bg-black dark:text-white border-4 border-yellow text-2xl z-30 
        origin-top-right duration-200
        ${className}`}
    >
      <div className='flex justify-between'>
        <ButtonDarkMode className='scale-150' />

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
