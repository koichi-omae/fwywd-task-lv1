import React from 'react';
import { Icon, IconProps } from '@/component/Atom/Icon/Icon';

export interface SympathyProps {
  title: string;
  checklist: CheckListProps[];
  cards: CardProps[];
}

interface CheckListProps {
  icon: IconProps;
  text: string;
}

interface CardProps {
  tag: string;
  title: {
    title1: string;
    title2: string;
  };
  icon: IconProps;
  text: string;
}

export const Sympathy: React.FC<SympathyProps> = ({ title, checklist, cards }) => (
  <div id='悩み' className='bg-primary-50 py-36'>
    <div className='grid justify-items-center text-center '>
      <h2 className=' mb-12 inline-block border-b-4 border-b-[#F2C94C] text-xl font-bold text-primary-800'>
        {title}
      </h2>
      <div className='mr-16'>
        {checklist.map((check, index) => (
          <div key={index} className='mb-3 flex items-center'>
            <div className=''>
              <Icon {...check.icon} />
            </div>
            <p className='primary-base'>{check.text}</p>
          </div>
        ))}
      </div>
    </div>
    <div className='mt-12 flex justify-center gap-12'>
      {cards.map((card, index) => (
        <div
          key={index}
          className='relative w-[500px] rounded-md bg-white shadow-md shadow-primary-200'
        >
          <span className='white-sm absolute bg-primary-800 px-5 py-1'>{card.tag}</span>
          <div className='my-16 text-center'>
            <h3 className='inline-block border-b-4 border-b-[#F2C94C] text-center text-base font-bold text-primary-800'>
              <span className='text-lg'>{card.title.title1}</span>
              {card.title.title2}
            </h3>
          </div>
          <div className='text-center'>
            <Icon {...card.icon} />
          </div>
          <p className='primary-base px-14 py-12 text-center'>{card.text}</p>
        </div>
      ))}
      <div></div>
    </div>
  </div>
);
