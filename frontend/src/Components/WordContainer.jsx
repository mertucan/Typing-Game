import React from 'react';

const WordContainer = ({ words, isInputCorrect }) => {
  return (
    <div className="max-h-32 overflow-hidden border-indigo-300 border-4 p-3 lg:p-4 leading-9 md:leading-[3rem]">
      <span
        className={`font-medium text-2xl md:text-3xl lg:text-4xl ${
          isInputCorrect ? 'bg-indigo-300' : 'bg-red-500'
        } rounded-md text-gray-900 px-1`}
      >
        {words.length > 0 ? words[0] : 'asdf'}
      </span>
      {words.length > 0 &&
        words.slice(1).map((word, index) => (
          <span
            className="font-medium text-2xl md:text-3xl lg:text-4xl text-gray-900 px-1"
            key={index}
          >
            {word}{' '}
          </span>
        ))}
    </div>
  );
};

export default WordContainer;
