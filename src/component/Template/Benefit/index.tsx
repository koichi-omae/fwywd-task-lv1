import Image from 'next/image';
import React from 'react';
import { Icon, IconProps } from '@/component/Atom/Icon/Icon';

export interface BenefitProps {
  title: string;
  result: string;
  cards: BenefitCardProps[];
  message: {
    msg1: string;
    msg2: string;
  };
}

interface BenefitCardProps {
  text: string;
  icon: IconProps;
  result: string;
  image: IconProps;
  message: {
    msg1: string;
    msg2: string;
  };
}

export const Benefit: React.FC<BenefitProps> = ({ title, result, cards, message }) => (
  <div id='解決策' className='bg-covers bg-benefit-pattern py-40'>
    <div className='mb-12 text-center'>
      <h2 className='inline-block border-b-4 border-b-[#F2C94C] text-lg font-bold text-primary-800'>
        {title}
      </h2>
    </div>
    <p className='primary-2xl mb-12 text-center'>{result}</p>
    <div className='flex justify-center gap-12'>
      {cards.map((card, index) => (
        <div
          key={index}
          className='w-[500px] bg-primary-50 py-12 text-center shadow-md shadow-primary-200'
        >
          <p className='primary-base mb-10'>{card.text}</p>
          <div className='mb-5'>
            <Image
              src={card.icon.src}
              alt={card.icon.alt}
              width={card.icon.width}
              height={card.icon.height}
              className='rotate-90'
            />
          </div>
          <p className='inline-block border-b-4 border-b-[#F2C94C] text-lg font-bold text-primary-800'>
            {card.result}
          </p>
          <div className='my-6'>
            <Icon {...card.image} />
          </div>
          <p className='primary-base text-center'>{card.message.msg1}</p>
          <p className='primary-base text-center'>{card.message.msg2}</p>
        </div>
      ))}
    </div>
    <div className='primary-lg mt-12 text-center'>
      <p>{message.msg1}</p>
      <p>{message.msg2}</p>
    </div>
  </div>
);
