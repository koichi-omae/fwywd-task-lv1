import React from 'react';
import { Icon, IconProps } from '@/component/Atom/Icon/Icon';

export interface PricingProps {
  title: string;
  text: string;
  recommendation: string;
  cards: PricingCardProps[];
  checklist: CourseProps[];
}

interface PricingCardProps {
  title: string;
  plan: {
    plan1: string;
    plan2: string;
  };
  price: {
    price: string;
    notax: string;
  };
  membership: {
    member: string;
    price: string;
  };
  membertax: string;
  useprice: {
    use: string;
    price: string;
  };
  usetax: string;
  courses: CourseProps[];
  onlines: CourseProps[];
}

interface CourseProps {
  icon: IconProps;
  text: string;
}

export const Pricing: React.FC<PricingProps> = ({
  title,
  text,
  recommendation,
  cards,
  checklist,
}) => (
  <div id='料金' className='bg-primary-50 py-12 text-center'>
    <div className='container mx-auto'>
      <h2 className='primary-2xl mb-3'>{title}</h2>
      <p className='primary-base mb-12'>{text}</p>
      <p className='primary-base'>{recommendation}</p>
      <div className='flex justify-center gap-4'>
        {cards.map((card, index) => (
          <div
            key={index}
            className='w-[410px] rounded-md bg-white py-12 px-3 font-bold text-primary-800 hover:bg-primary-800 hover:text-white'
          >
            <h3 className='mb-3 text-[2.25rem] font-bold '>
              {card.title}
              <span className='text-base '>プラン</span>
            </h3>
            <div className='mb-3 text-base'>
              <p>{card.plan.plan1}</p>
              <p>{card.plan.plan2}</p>
            </div>
            <p className='mb-8 text-lg font-bold'>
              {card.price.price}
              <span className='text-xs'>{card.price.notax}</span>
            </p>
            <div className='flex justify-between px-2 text-base'>
              <p>{card.membership.member}</p>
              <p>{card.membership.price}</p>
            </div>
            <p className='mb-5 px-2 text-right text-xs'>{card.membertax}</p>
            <div className='flex justify-between px-2 text-base'>
              <p>{card.useprice.use}</p>
              <p>{card.useprice.price}</p>
            </div>
            <p className='border-b-4 border-primary-200 px-2 pb-4 text-right text-xs'>
              {card.usetax}
            </p>
            <div className='border-b-4 border-primary-200 py-8'>
              {card.courses.map((course, index) => {
                if (course.icon.alt === 'notcheck') {
                  return (
                    <div key={index} className=' block text-center opacity-50'>
                      <div className='flex items-center justify-center'>
                        <div className='mt-2'>
                          <Icon {...course.icon} />
                        </div>
                        <p className='text-base'>{course.text}</p>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div key={index} className='mb-3'>
                      <div className='flex items-center justify-center'>
                        <div>
                          <Icon {...course.icon} />
                        </div>
                        <p className='text-base'>{course.text}</p>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
            <div className='mt-8'>
              {card.onlines.map((online, index) => {
                if (online.icon.alt === 'notcheck') {
                  return (
                    <div key={index} className=' block text-center opacity-50'>
                      <div className='flex items-center justify-center'>
                        <div className='mt-2'>
                          <Icon {...online.icon} />
                        </div>
                        <p className='text-base'>{online.text}</p>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div key={index} className='mb-3'>
                      <div className='flex items-center justify-center'>
                        <div>
                          <Icon {...online.icon} />
                        </div>
                        <p className='text-base'>{online.text}</p>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        ))}
      </div>
      <div className='mt-12'>
        {checklist.map((check, index) => (
          <div key={index}>
            <div className='flex items-center'>
              <div>
                <Icon {...check.icon} />
              </div>
              <p className='primary-base'>{check.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
