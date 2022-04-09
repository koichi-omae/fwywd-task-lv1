import Link from 'next/link';
import Script from 'next/script';
import React from 'react';
import useSWR from 'swr';
export interface HeroProps {
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

export const Hero: React.FC<HeroProps> = ({ title, text, button }) => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    'https://api.steinhq.com/v1/storages/625176ffbca21f053e898b2c/sample',
    fetcher,
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <Script src='https://unpkg.com/stein-js-client'></Script>
      <div className='flex h-[800px] items-center bg-hero1-pattern bg-cover text-center'>
        <p></p>
        <div className='w-1/2 px-10'>
          <h2 className='text-left text-[4rem] font-bold text-gray-900'>{title}</h2>
          <p className='mb-24 mt-8 text-left text-lg font-bold text-gray-900'>{text}</p>
          <div className='text-left'>
            <p className='text-sm font-bold text-[#F7A60F]'>
              {button.subtitle1}
              <span className='text-lg'>{data.length}</span>
              {button.subtitle2}
            </p>
            <Link href={button.link} passHref>
              <button className='btn-yellow white-base'>{button.title}</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
