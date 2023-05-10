import { FC } from 'react';

import {
  BsDatabaseFillCheck,
  BsFillSendCheckFill,
  BsShieldFillCheck,
  BsFillCloudCheckFill,
} from 'react-icons/bs';

import bgImg from '../assets/cyber-bg.png';

const Hero: FC<{}> = () => {
  return (
    <section className='relative w-full h-fit flex flex-col justify-between max-sm: pt-20'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
          <p className='text-2xl'>Unique Sequencing & Production</p>
          <h1 className='py-3 text-5xl md:text-7xl font-bold'>
            Cloud Management
          </h1>
          <p className='text-2xl'>This is our Tech brand.</p>
          <button
            type='button'
            className='bg-indigo-500 text-white py-3 px-6 sm:w-[60%] my-4'
          >
            Get Started
          </button>
        </div>
        <img src={bgImg} alt='Background image' className='w-full h-fit' />
        <div className='absolute bottom-[-16%] max-[400px]:bottom-[-35%] flex flex-col justify-center items-center md:min-w-[768px] md:left-1/2 transform md:-translate-x-1/2 py-8 border border-zinc-300  shadow-lg shadow-indigo-500/40 rounded-2xl bg-zinc-200 max-sm: py-4  max-sm:w-[80%]  max-sm:left-[10%]'>
          <h2 className='font-bold text-2xl mb-2'>Data Services</h2>
          <div className='flex flex-wrap justify-between items-center max-sm:justify-center'>
            <p className='flex px-4 py-2 gap-5 items-center'>
              <BsShieldFillCheck className='text-indigo-500 text-lg' /> App
              Security
            </p>
            <p className='flex px-4 py-2 gap-5 items-center'>
              <BsFillCloudCheckFill className='text-indigo-500 text-lg' />
              Dashboard Design
            </p>
            <p className='flex px-4 py-2 gap-5 items-center'>
              <BsDatabaseFillCheck className='text-indigo-500 text-lg' /> Cload
              Database
            </p>
            <p className='flex px-4 py-2 gap-5 items-center'>
              <BsFillSendCheckFill className='text-indigo-500 text-lg' /> API
              Services
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
