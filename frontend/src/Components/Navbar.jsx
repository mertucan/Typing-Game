import React from 'react';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  return (
    <nav className="bg-white border-purple-200 dark:bg-purple-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Typing Game</span>
        <LanguageSelector></LanguageSelector>
      </div>
    </nav>
  );
};

export default Navbar;
