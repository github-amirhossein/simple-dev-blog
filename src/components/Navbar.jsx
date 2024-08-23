import { IconClose } from './Icon';

export default function Navbar({ className, onToggleMenu }) {
  return (
    <nav
      className={`absolute top-0 left-0 w-full flex flex-col  p-3 rounded-b-3xl bg-white text-black dark:bg-black dark:text-white border-4 border-yellow text-2xl z-30 
        origin-top-right duration-200
        ${className}`}
    >
      <button className='size-10  self-end' onClick={onToggleMenu}>
        <IconClose />
      </button>

      <ul className='flex flex-col py-8 items-center gap-4'>
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
