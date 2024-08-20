import './../App.css';

export default function Box({ children, className, haveButton = true }) {
  const tailwindClass = `rounded-3xl my-1 py-4 px-5 relative ${className}`;

  return (
    <div className={tailwindClass}>
      {haveButton && (
        <button className='absolute top-2 right-2 size-10 rounded-full text-3xl bg-black pb-1 text-white'>
          +
        </button>
      )}

      {children}
    </div>
  );
}
