import { FC } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

import './Navbar.scss';

const Navbar: FC<{}> = () => {
  return (
    <nav className='w-screen h-[75px] bg-zinc-200 fixed drop-shadow-lg px-4'>
      <div className='w-full h-full flex items-center justify-between'>
        <div className='w-full h-full flex items-center'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>LOGO</h1>
          <ul className='hidden md:flex items-end'>
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platforms</li>
            <li>Price</li>
          </ul>
        </div>
        <div className='hidden md:flex items-center justify-end w-full '>
          <button type='button' className='bg-transparent px-4 py-3 h-[75px]'>
            Sign In
          </button>
          <button
            type='button'
            className='bg-zinc-300 text-zinc-500 font-bold px-4 py-3 h-[75px]'
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
