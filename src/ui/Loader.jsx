import React from 'react';

const Loader = () => {
  return (
    <div className="align-center absolute inset-0 flex justify-center bg-slate-200/20 backdrop-blur-sm ">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
