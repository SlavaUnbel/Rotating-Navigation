import React from 'react';
import Circle from './circle/Circle';
import NavigationBar from './navigationBar/NavigationBar';
import RandomContent from './randomContent/RandomContent';

const App: React.FC = () => {
  return (
    <>
      <div className="container">
        <Circle />

        <RandomContent />
      </div>

      <NavigationBar />
    </>
  );
};

export default App;
