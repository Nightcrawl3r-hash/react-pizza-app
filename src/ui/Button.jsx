import React from 'react';

function Button({ children, disabled }) {
  return (
    <button
      disabled={disabled}
      className="inline-block rounded-full bg-yellow-500 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 active:bg-slate-400 disabled:cursor-not-allowed sm:px-6 sm:py-4"
    >
      {children}
    </button>
  );
}

export default Button;
