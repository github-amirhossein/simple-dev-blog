export default function Box({ children, color }) {
  let textColor;
  if (color === 'pink') textColor = 'white';
  if (color === 'blue') textColor = 'white';
  if (color === 'white') textColor = 'pink';
  if (color === 'yellow') textColor = 'blue';
  if (color === 'gray') textColor = 'yellow';

  return (
    <div
      className={`rounded-3xl py-4 px-5 bg-${color} text-${textColor} relative`}
    >
      <button className='absolute top-2 right-2 size-10 rounded-full text-3xl bg-black pb-10 text-white'>
        +
      </button>

      {children}
    </div>
  );
}
