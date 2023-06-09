import { FC } from 'react';

import { BsFacebook,BsInstagram, BsTwitter, BsTwitch, BsGithub } from "react-icons/bs";

import './Footer.scss';

const Footer: FC<{}> = () => {
  return (
    <footer className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2'>
      <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
        <div>
          <h6 className='font-bold uppercase pt-2 max-[400px]:text-center'>
            Solutions
          </h6>
          <ul>
            <li className='py-1 text-slate-500 pl-0 max-[400px]:text-center'>Marketing</li>
            <li className='py-1 text-slate-500 pl-0 max-[400px]:text-center'>Analytics</li>
            <li className='py-1 text-slate-500 pl-0 max-[400px]:text-center'>Commerce</li>
            <li className='py-1 text-slate-500 pl-0 max-[400px]:text-center'>Data</li>
            <li className='py-1 text-slate-500 pl-0 max-[400px]:text-center'>Cloud</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercase pt-2 max-[400px]:text-center'>Support</h6>
          <ul>
            <li className='py-1 text-slate-500 pl-0 max-[400px]:text-center'>Pricing</li>
            <li className='py-1 text-slate-500 pl-0 max-[400px]:text-center'>Documentation</li>
            <li className='py-1 text-slate-500 pl-0 max-[400px]:text-center'>Guides</li>
            <li className='py-1 text-slate-500 pl-0 max-[400px]:text-center'>API Status</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercase pt-2 max-[400px]:text-center'>Company</h6>
          <ul>
            <li className='py-1 text-slate-500 pl-0 max-[400px]:text-center'>About</li>
            <li className='py-1 text-slate-500 pl-0 max-[400px]:text-center'>Blog</li>
            <li className='py-1 text-slate-500 pl-0 max-[400px]:text-center'>Jobs</li>
            <li className='py-1 text-slate-500 pl-0 max-[400px]:text-center'>Press</li>
            <li className='py-1 text-slate-500 pl-0 max-[400px]:text-center'>Partners</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercase pt-2 max-[400px]:text-center'>Legal</h6>
          <ul>
            <li className='py-1 text-slate-500 pl-0 max-[400px]:text-center'>Claims</li>
            <li className='py-1 text-slate-500 pl-0 max-[400px]:text-center'>Privacy</li>
            <li className='py-1 text-slate-500 pl-0 max-[400px]:text-center'>Terms</li>
            <li className='py-1 text-slate-500 pl-0 max-[400px]:text-center'>Policies</li>
            <li className='py-1 text-slate-500 pl-0 max-[400px]:text-center'>Conditions</li>
          </ul>
        </div>
        <div className='col-span-2 pt-8 md:pt-2'>
          <p className='font-bold uppercase'>Subscribe to our newsletter</p>
          <p className='py-4'>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className='flex flex-col sm:flex-row'>
            <input
              className='w-full p-2 mr-4 rounded-md mb-4'
              type='email'
              placeholder='Enter email..'
            />
            <button className='p-2 mb-4'>Subscribe</button>
          </form>
        </div>
      </div>

      <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2022 Workflow, LLC. All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
          <BsFacebook />
          <BsInstagram />
          <BsTwitter />
          <BsTwitch />
          <BsGithub />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
