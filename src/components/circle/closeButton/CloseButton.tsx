import { Close } from '@material-ui/icons';
import React from 'react';

interface Props {
  onClick: () => void;
}

const CloseButton: React.FC<Props> = ({ onClick }) => (
  <button id="close" onClick={onClick}>
    <Close />
  </button>
);

export default CloseButton;
