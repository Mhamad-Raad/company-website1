import { FC } from 'react';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Support from './components/Support/Support';
import AllInOne from './components/AllInOne/AllInOne';
import Pricing from './components/Pricing/Pricing';

import './App.scss';

const App: FC<{}> = () => {
  return (
    <div className='app'>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Support />
        <AllInOne />
        <Pricing />
      </main>
    </div>
  );
};

export default App;
