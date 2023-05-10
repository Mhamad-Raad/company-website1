import { FC } from 'react';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';

import './App.scss';

const App: FC<{}> = () => {
  return (
    <div className='app'>
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
};

export default App;
