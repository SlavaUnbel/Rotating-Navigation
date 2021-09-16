import { Menu } from '@material-ui/icons';
import React from 'react';

interface Props {
  onClick: () => void;
}

const OpenButton: React.FC<Props> = ({ onClick }) => (
  <button id="open" onClick={onClick}>
    <Menu />
  </button>
);

export default OpenButton;
