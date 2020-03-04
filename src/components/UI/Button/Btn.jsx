import React from 'react';

const Btn = props => {
  return (
    <button
      type={props.type}
      name={props.name}
      value={props.value}
      className="rounded-md shadow-md text-green-700 border-2 border-green-700 font-sans font-semibold py-1 px-10 hover:bg-green-200"
    >
      {props.children}
    </button>
  );
};

export default Btn;
