import '@theme-toggles/react/css/Around.css';
import { Around } from '@theme-toggles/react';
import { useEffect, useState } from 'react';

export function ButtonDarkMode({ className, size=8, border=false }) {
  const [isDarkMode, setIsDarkmode] = useState(true);

  useEffect(
    function () {
      isDarkMode
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark');
    },
    [isDarkMode]
  );

  return (
    <div className={`size-${size} flex items-center justify-center rounded-xl ${border && 'border-2'}`}>
      <Around
        className={className}
        title='toggle theme'
        toggled={isDarkMode}
        toggle={setIsDarkmode}
        // onToggle={()=> }
        duration={750}
      />
    </div>
  );
}
