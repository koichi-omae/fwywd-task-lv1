import React from 'react';
import { Icon, IconProps } from '@/component/atom/Icon';

export interface PageFooterProps {
  title: string;
  icons: IconProps[];
  share: string;
  menuNav: MenuProps[];
}

interface MenuProps {
  title: string;
  menu: string[];
}

export const PageFooter: React.FC<PageFooterProps> = ({ title, icons, share, menuNav }) => (
  <footer className='bg-primary-800'>
    <div className='mx-8 flex items-center justify-between border-b-2 border-white pt-16 pb-8'>
      <div>
        <Icon type='logo' width={156} height={60} />
      </div>
      <p className='white-base'>{title}</p>
      <div className=''>
        <p className='mb-6 text-center text-base text-white'>{share}</p>
        <div className='flex'>
          {icons.map((icon, index) => (
            <div
              key={index}
              className='mr-5 flex h-[60px] w-[60px] items-center justify-center rounded-lg bg-white hover:cursor-pointer hover:opacity-70'
            >
              <Icon {...icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className='mx-8 mt-14 flex'>
      {menuNav.map((nav, index) => (
        <div key={index} className='mr-28'>
          <h3 key={index} className='white-base'>
            {nav.title}
          </h3>
          <div className='mt-5'>
            {nav.menu.map((m, index) => (
              <p key={index} className='text-base text-white hover:cursor-pointer hover:opacity-70'>
                {m}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
    <p className=' pt-24 pb-14 text-center text-white'>
      ©️ 2022, KIKAGAKU, Inc., All right reserved.
    </p>
  </footer>
);
