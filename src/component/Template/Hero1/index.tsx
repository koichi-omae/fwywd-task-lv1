import React from 'react';

export interface Hero1Props {
  title: string;
  text: string;
  button: {
    title: string;
    subtitle1: string;
    subtitle2: string;
    people: string;
    link: string;
  };
}

export const Hero1: React.FC<Hero1Props> = ({ title, text, button }) => (
  <div className='flex h-[800px] items-center bg-hero1-pattern bg-cover text-center'>
    <div className='w-1/2 px-10'>
      <h2 className='text-left text-[4rem] font-bold text-gray-900'>{title}</h2>
      <p className='mb-24 mt-8 text-left text-lg font-bold text-gray-900'>{text}</p>
      <div className='text-left'>
        <p className='text-sm font-bold text-[#F7A60F]'>
          {button.subtitle1}
          <span className='text-lg'>{button.people}</span>
          {button.subtitle2}
        </p>
        <button className='btn-yellow white-base'>{button.title}</button>
      </div>
    </div>
  </div>
);
