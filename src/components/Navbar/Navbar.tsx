import { FC, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

import './Navbar.scss';

const Navbar: FC<{}> = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const handleClick = () => setOpenMenu(!openMenu);

  return (
    <nav className='w-screen z-20 h-[75px] bg-zinc-200 fixed drop-shadow-lg'>
      <div className='w-full h-full flex items-center justify-between'>
        <div className='w-full h-full flex items-center'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl pl-4'>LOGO</h1>
          <ul className='hidden md:flex items-end'>
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platforms</li>
            <li>Price</li>
          </ul>
        </div>
        <div className='hidden md:flex items-center justify-end w-full pr-4'>
          <button type='button' className='bg-transparent px-4 py-3 h-[75px]'>
            Sign In
          </button>
          <button
            type='button'
            className='bg-indigo-500 text-white font-bold px-4 py-3 h-[75px]'
          >
            Sign Up
          </button>
        </div>
        <div className='md:hidden pr-4'>
          {openMenu ? (
            <HiX onClick={handleClick} className='text-4xl' />
          ) : (
            <HiMenu onClick={handleClick} className='text-4xl' />
          )}
        </div>
      </div>
      {openMenu && (
        <ul className='relative overflow-scroll z-20 h-screen py-10 pb-[175px] flex flex-col gap-10 w-full px-8 bg-zinc-200 md:hidden'>
          <li className='text-2xl text-center font-normal border-b-2 border-zinc-300'>
            Home
          </li>
          <li className='text-2xl font-normal text-center border-b-2 border-zinc-300'>
            About
          </li>
          <li className='text-2xl font-normal text-center border-b-2 border-zinc-300'>
            Support
          </li>
          <li className='text-2xl font-normal text-center border-b-2 border-zinc-300'>
            Platforms
          </li>
          <li className='text-2xl font-normal text-center border-b-2 border-zinc-300'>
            Price
          </li>
          <li className='flex flex-col gap-5 w-full'>
            <button
              className='border-2 border-indigo-500 text-indigo-500'
              type='button'
            >
              Sign In
            </button>
            <button className='bg-indigo-500 text-white' type='button'>
              Sign Up
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
