import star from './../assets/images/star.svg';
import logout from './../assets/images/logout.svg';

export default function OptionButton({ children, icon='star' }) {
  let iconSrc;
  if (icon === 'star') iconSrc = star
  if (icon === 'logout' ) iconSrc = logout

  return (
    <button className='flex items-center border px-4 py-2 rounded-full'>
      {children}
      <img className='pl-3' src={iconSrc} alt='icon' />
    </button>
  );
}
