import React from 'react';
import CloseButton from './closeButton/CloseButton';
import OpenButton from './openButton/OpenButton';

interface Props {
  open: () => void;
  close: () => void;
}

const Circle: React.FC<Props> = ({ open, close }) => (
  <div className="circle-container">
    <div className="circle">
      <CloseButton onClick={close} />

      <OpenButton onClick={open} />
    </div>
  </div>
);

export default Circle;
