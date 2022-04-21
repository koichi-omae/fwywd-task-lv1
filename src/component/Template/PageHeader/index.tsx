import Link from 'next/link';
import React from 'react';
import { Link as Scroll } from 'react-scroll';
import { Logo, LogoProps } from '@/component/Atom/Logo/Logo';

export interface PageHeaderProps {
  logo: LogoProps;
  headerList: string[];
  button: {
    text: string;
    link: string;
  };
}

export const PageHeader: React.FC<PageHeaderProps> = ({ logo, headerList, button }) => (
  <>
    <header className='bg-primary-800 px-9'>
      <div className='flex items-center justify-between'>
        <Link href='/' passHref>
          <a>
            <div className='hover:cursor-pointer hover:opacity-70'>
              <Logo {...logo} />
            </div>
          </a>
        </Link>
        <ul>
          {headerList.map((header, index) => (
            <li
              key={index}
              className='inline-block px-9 py-7 hover:cursor-pointer hover:border-b-4
              hover:border-b-white hover:bg-[#4BAEAE] hover:opacity-70'
            >
              <Scroll to={header} smooth={true}>
                <span className='white-base block border-b-white'>{header}</span>
              </Scroll>
            </li>
          ))}
        </ul>
        <Link href={button.link} passHref>
          <a>
            <button className='btn-yellow'>{button.text}</button>
          </a>
        </Link>
      </div>
    </header>
  </>
);
