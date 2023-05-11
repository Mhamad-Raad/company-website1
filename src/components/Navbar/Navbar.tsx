import { FC, useState } from 'react';
import { Link } from 'react-scroll';
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
            <li>
              <Link
                className='hover:cursor-pointer'
                to='Home'
                smooth={true}
                duration={500}
                activeClass='text-slate-500'
                spy={true}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className='hover:cursor-pointer'
                to='About'
                smooth={true}
                duration={500}
                activeClass='text-slate-500'
                spy={true}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className='hover:cursor-pointer'
                to='Support'
                smooth={true}
                duration={500}
                offset={-50}
                activeClass='text-slate-500'
                spy={true}
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                className='hover:cursor-pointer'
                to='Platforms'
                smooth={true}
                duration={500}
                activeClass='text-slate-500'
                spy={true}
              >
                Platforms
              </Link>
            </li>
            <li>
              <Link
                className='hover:cursor-pointer'
                to='Price'
                smooth={true}
                duration={500}
                activeClass='text-slate-500'
                spy={true}
              >
                Price
              </Link>
            </li>
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
        <div className='relative overflow-scroll z-20 h-screen py-10 pb-[175px] flex flex-col gap-10 w-full px-8 bg-zinc-200 md:hidden'>
          <Link
            className='text-2xl pb-4 text-center font-normal border-b-2 border-zinc-300'
            to='Home'
            smooth={true}
            duration={500}
            activeClass='text-slate-500'
            spy={true}
            onClick={handleClick}
          >
            Home
          </Link>

          <Link
            className='text-2xl pb-4 font-normal text-center border-b-2 border-zinc-300'
            to='About'
            smooth={true}
            duration={500}
            activeClass='text-slate-500'
            spy={true}
            onClick={handleClick}
          >
            About
          </Link>
          <Link
            className='text-2xl pb-4 font-normal text-center border-b-2 border-zinc-300'
            to='Support'
            offset={-50}
            smooth={true}
            duration={500}
            activeClass='text-slate-500'
            spy={true}
            onClick={handleClick}
          >
            Support
          </Link>

          <Link
            className='text-2xl pb-4 font-normal text-center border-b-2 border-zinc-300'
            to='Platforms'
            smooth={true}
            duration={500}
            activeClass='text-slate-500'
            spy={true}
            onClick={handleClick}
          >
            Platforms
          </Link>

          <Link
            className='text-2xl pb-4 font-normal text-center border-b-2 border-zinc-300'
            to='Price'
            smooth={true}
            duration={500}
            activeClass='text-slate-500'
            spy={true}
            onClick={handleClick}
          >
            Price
          </Link>

          <div className='flex flex-col gap-5 w-full'>
            <button
              className='border-2 border-indigo-500 text-indigo-500'
              type='button'
            >
              Sign In
            </button>
            <button className='bg-indigo-500 text-white' type='button'>
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
