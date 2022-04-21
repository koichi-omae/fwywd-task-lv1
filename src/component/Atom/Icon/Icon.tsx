import Image from 'next/image';
import ArrowImage from '~/img/Arrow.png';
import CheckImage from '~/img/Check.png';
import FacebookImage from '~/img/Facebook.png';
import HatebuImage from '~/img/Hatebu.png';
import LineImage from '~/img/Line.png';
import LogoImage from '~/img/Logo.png';
import NotCheckImage from '~/img/NotCheck.png';
import PinterestImage from '~/img/Pinterest.png';
import TwitterImage from '~/img/Twitter.png';

export interface IconProps {
  type:
    | 'logo'
    | 'arrow'
    | 'check'
    | 'notCheck'
    | 'facebook'
    | 'twitter'
    | 'hatebu'
    | 'line'
    | 'pinterest';
  width?: number;
  height?: number;
}

export const Icon: React.FC<IconProps> = ({ type, width = 30, height = 30 }) => {
  switch (type) {
    case 'logo':
      return <Image alt={type} src={LogoImage} width={width} height={height} />;
    case 'arrow':
      return <Image alt={type} src={ArrowImage} width={width} height={height} />;
    case 'check':
      return <Image alt={type} src={CheckImage} width={width} height={height} />;
    case 'notCheck':
      return <Image alt={type} src={NotCheckImage} width={width} height={height} />;
    case 'facebook':
      return <Image alt={type} src={FacebookImage} width={width} height={height} />;
    case 'twitter':
      return <Image alt={type} src={TwitterImage} width={width} height={height} />;
    case 'hatebu':
      return <Image alt={type} src={HatebuImage} width={width} height={height} />;
    case 'line':
      return <Image alt={type} src={LineImage} width={width} height={height} />;
    case 'pinterest':
      return <Image alt={type} src={PinterestImage} width={width} height={height} />;
  }
};
