import { Email, Home, Person } from '@material-ui/icons';
import React from 'react';

const NavigationBar: React.FC = () => (
  <nav>
    <ul>
      <li>
        <Home /> Home
      </li>

      <li>
        <Person /> About
      </li>

      <li>
        <Email /> Contact
      </li>
    </ul>
  </nav>
);

export default NavigationBar;
