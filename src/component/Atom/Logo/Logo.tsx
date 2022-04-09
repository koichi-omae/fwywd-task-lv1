import Image from 'next/image';
import React from 'react';

export interface LogoProps {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
}

export const Logo: React.FC<LogoProps> = ({ src, alt, width, height }) => (
  <>
    <Image src={src} alt={alt} width={width} height={height} />
  </>
);
