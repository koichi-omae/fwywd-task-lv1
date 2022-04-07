import Image from 'next/image';
import React from 'react';

interface IconProps {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
}

export const Icon: React.FC<IconProps> = ({ src, alt, width, height }) => (
  <>
    <Image src={src} alt={alt} width={width} height={height} />
  </>
);
