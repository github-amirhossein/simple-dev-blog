import '@theme-toggles/react/css/Around.css';
import { Around } from '@theme-toggles/react';

export function ButtonDarkMode({ className, size=8, border=false, onToggleDarkMode, isDarkMode }) {
  return (
    <div className={`size-${size} flex items-center justify-center rounded-xl ${border && 'border-2'}`}>
      <Around
        className={className}
        title='toggle theme'
        toggled={isDarkMode}
        toggle={onToggleDarkMode}
        // onToggle={()=> }
        duration={750}
      />
    </div>
  );
}
