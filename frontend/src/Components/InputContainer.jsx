import React from 'react';

const InputContainer = (props) => {
  return (
    <div className="flex-initial w-full">
      <input
        type="text"
        aria-label="Insert word"
        className={`w-full border border-solid ${
          props.disabled
            ? "bg-gray-100 cursor-not-allowed border-gray-400"
            : "bg-white cursor-text border-indigo-400"
        } text-gray-900 font-medium md:text-lg p-3 rounded-md focus:outline-none focus:ring-1`}
        autoFocus
        value={props.value || ""}
        onChange={(event) => props.onChange(event.target.value)}
        onKeyUp={(event) => props.onKeyUp(event.key)}
        disabled={props.disabled}
      />
    </div>
  );
};

export default InputContainer;
