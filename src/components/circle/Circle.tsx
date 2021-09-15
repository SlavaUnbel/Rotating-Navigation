import React from 'react';
import CloseButton from './closeButton/CloseButton';
import OpenButton from './openButton/OpenButton';

const Circle: React.FC = () => (
  <div className="circle-container">
    <div className="circle">
      <CloseButton />

      <OpenButton />
    </div>
  </div>
);

export default Circle;
