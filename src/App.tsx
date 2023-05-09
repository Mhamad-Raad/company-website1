import { FC } from 'react';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

import './App.scss';

const App: FC<{}> = () => {
  return (
    <div className='app'>
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default App;
