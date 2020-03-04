import React from 'react';

const Input = props => {
  return (
    <input
      className="bg-gray-600 opacity-25 rounded-lg w-full px-32 py-1 placeholder-gray-900 font-bold"
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
