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
        <Hero />
        <Hero />
        <Hero />
        <Hero />
      </main>
    </div>
  );
};

export default App;
