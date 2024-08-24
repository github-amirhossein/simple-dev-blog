export default function Navbar({ className }) {
  return (
    <nav
      className={`absolute top-0 left-0 w-full flex flex-col p-4 pt-20
        bg-white text-black dark:bg-black dark:text-white border-b-2 border-b-yellow
          text-2xl z-20 transition-transform duration-700
          ${className}`}
    >
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
