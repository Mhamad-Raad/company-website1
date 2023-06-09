import { FC } from 'react';

import './About.scss';

const About: FC<{}> = () => {
  return (
    <section
      id='About'
      className='px-2 bg-zinc-200 lg:px-4 w-full mt-56 md:mt-45 max-[400px]:mt-[300px] pb-10'
    >
      <div className='max-w-[1240px] mx-auto'>
        <div className='text-center'>
          <h2 className='text-5xl font-bold'>
            Trusted by developers across the world
          </h2>
          <p className='text-3xl py-6 text-gray-500'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            asperiores earum placeat veritatis dignissimos itaque.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
          <div className='border py-8 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>100%</p>
            <p className='text-gray-400 mt-2'>Completion</p>
          </div>
          <div className='border py-8 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>24/7</p>
            <p className='text-gray-400 mt-2'>Delivery</p>
          </div>
          <div className='border py-8 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>100K</p>
            <p className='text-gray-400 mt-2'>Transactions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
