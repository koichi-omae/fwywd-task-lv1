import React from 'react';
import { Icon, IconProps } from '@/component/Atom/Icon/Icon';

export interface CtaProps {
  button: {
    text: string;
    link: string;
  };
  icon: IconProps;
}

export const Cta: React.FC<CtaProps> = ({ button, icon }) => (
  <div className='flex items-center bg-gradient-to-r from-primary-800 to-primary-500'>
    <div className='w-1/2 px-8'>
      <h2 className='white-2xl text-center'>
        <span className='text-[4rem]'>良き仲間</span>との出会いは
        <span className='text-[4rem]'>人生最大</span>の<span className='text-[4rem]'>財産</span>
        である
      </h2>
      <div className='mt-24 text-center'>
        <button className='btn-yellow'>{button.text}</button>
      </div>
    </div>
    <div className='w-1/2 py-10'>
      <div>
        <Icon {...icon} />
      </div>
    </div>
  </div>
);
