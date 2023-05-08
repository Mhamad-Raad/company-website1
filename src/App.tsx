import { FC } from 'react';

import Navbar from './components/Navbar/Navbar';

import './App.scss';

const App: FC<{}> = () => {
  return (
    <div className='app'>
      <Navbar />
      <h1 className='text-3xl font-bold underline'>hello world</h1>
    </div>
  );
};
