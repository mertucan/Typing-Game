import React, { useState } from 'react';

const LanguageSelector = ({ disabled, language, onChange }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const getLanguageLabel = (langCode) => {
    switch (langCode) {
      case 'tr':
        return 'Turkish';
      case 'de':
        return 'German';
      case 'es':
        return 'Spanish';
      default:
        return 'English';
    }
  };

  const getFlagSvg = (langCode) => {
    switch (langCode) {
      case 'tr':
        return (
          <svg aria-hidden="true" className="w-5 h-5 rounded-full me-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <rect width="512" height="512" fill="#e30a17" />
            <circle cx="190" cy="256" r="80" fill="#fff" />
            <circle cx="230" cy="256" r="50" fill="#e30a17" />
            <circle cx="315" cy="256" r="35" fill="#fff" />
          </svg>
        );
      case 'de':
        return (
          <svg aria-hidden="true" className="w-5 h-5 rounded-full me-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="#ffce00" d="M0 341.3h512V512H0z" />
            <path d="M0 0h512v170.7H0z" />
            <path fill="#d00" d="M0 170.7h512v170.6H0z" />
          </svg>
        );
      case 'es':
        return (
          <svg aria-hidden="true" className="w-5 h-5 rounded-full me-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="#aa151b" d="M0 0h512v512H0z" />
            <path fill="#f1bf00" d="M0 115.2h512v281.6H0z" />
            <path fill="none" stroke="#000" strokeWidth="1pt" d="M256 256z" />
          </svg>
        );
      case 'en':
      default:
        return (
          <svg aria-hidden="true" className="w-5 h-5 rounded-full me-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3900 3900">
            <path fill="#b22234" d="M0 0h7410v3900H0z" />
            <path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" strokeWidth="300" />
            <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
            <g fill="#fff">
              <g id="d">
                <g id="c">
                  <g id="e">
                    <g id="b">
                      <path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z" />
                      <use xlinkHref="#a" y="420" />
                      <use xlinkHref="#a" y="840" />
                      <use xlinkHref="#a" y="1260" />
                    </g>
                    <use xlinkHref="#a" y="1680" />
                  </g>
                  <use xlinkHref="#b" x="247" y="210" />
                </g>
                <use xlinkHref="#c" x="494" />
              </g>
              <use xlinkHref="#d" x="988" />
              <use xlinkHref="#c" x="1976" />
              <use xlinkHref="#e" x="2470" />
            </g>
          </svg>
        );
    }
  };

  return (
    <div className="relative flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-purple-800 dark:hover:bg-purple-800 dark:hover:text-white"
        disabled={disabled}
      >
        {getFlagSvg(language)}
        {getLanguageLabel(language)}
      </button>

      {dropdownOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50 w-48 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
          <ul className="py-2 font-medium" role="none">
            <li>
              <a
                onClick={() => onChange('en')}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                <div className="inline-flex items-center">
                  {getFlagSvg('en')}
                  English
                </div>
              </a>
            </li>
            <li>
              <a
                onClick={() => onChange('tr')}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                <div className="inline-flex items-center">
                  {getFlagSvg('tr')}
                  Turkish
                </div>
              </a>
            </li>
            <li>
              <a
                onClick={() => onChange('de')}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                <div className="inline-flex items-center">
                  {getFlagSvg('de')}
                  German
                </div>
              </a>
            </li>
            <li>
              <a
                onClick={() => onChange('es')}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                <div className="inline-flex items-center">
                  {getFlagSvg('es')}
                  Spanish
                </div>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
