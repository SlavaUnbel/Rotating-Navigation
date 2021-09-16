import React, { useEffect, useState } from 'react';
import { services } from '../services/services';
import Circle from './circle/Circle';
import NavigationBar from './navigationBar/NavigationBar';
import RandomContent from './randomContent/RandomContent';

const App: React.FC = () => {
  const [data, setData] = useState<IData>({} as IData);
  const [container, setContainer] = useState<Element | null>();

  useEffect(() => {
    services.dataService
      .getData()
      .then((data) => setData(data))
      .catch((e) => console.error(e))
      .finally(() => setContainer(document.querySelector('.container')));
  }, []);

  const open = () => {
    if (container) container.classList.add('show-nav');
  };

  const close = () => {
    if (container) container.classList.remove('show-nav');
  };

  return (
    <>
      <div className="container">
        <Circle open={open} close={close} />

        <RandomContent data={data} />
      </div>

      <NavigationBar />
    </>
  );
};

export default App;
