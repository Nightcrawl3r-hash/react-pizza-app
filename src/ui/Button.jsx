import React from 'react';
import { Link } from 'react-router-dom';
function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block text-sm rounded-full bg-yellow-500  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 active:bg-slate-400 disabled:cursor-not-allowed ';
  const styles = {
    primary: base + 'px-4 py-3 md:px-6 md:py-4',
    small: base + 'px-4 text-xs py-2 md:px-5 md:py-2.5 text-xs',
    secondary:
      'inline-block text-sm rounded-full border-2 border-stone-200  font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2  hover:text-stone-800 active:bg-slate-400   px-4 py-2.5 md:px-6 md: py-3.5',
    round:base+'px-2.5 py-1 md:px-3.5 md:py-2.5 text-sm'
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
