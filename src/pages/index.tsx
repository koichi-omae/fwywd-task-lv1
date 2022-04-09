import { Benefit } from '@/component/Template/Benefit';
import { storyList as BenefitData } from '@/component/Template/Benefit/data';
import { Cta } from '@/component/Template/CTA';
import { storyList as CtaData } from '@/component/Template/CTA/data';
import { Hero } from '@/component/Template/Hero';
import { storyList as HeroData } from '@/component/Template/Hero/data';
import { PageFooter } from '@/component/Template/PageFooter';
import { storyList as PageFooterData } from '@/component/Template/PageFooter/data';
import { PageHeader } from '@/component/Template/PageHeader';
import { storyList as PageHeaderData } from '@/component/Template/PageHeader/data';
import { Pricing } from '@/component/Template/Pricing';
import { storyList as PricingData } from '@/component/Template/Pricing/data';
import { Sympathy } from '@/component/Template/Sympathy';
import { storyList as SympathyData } from '@/component/Template/Sympathy/data';

const Home: React.FC = () => (
  <>
    <PageHeader {...PageHeaderData.default} />
    <Hero {...HeroData.default} />
    <Sympathy {...SympathyData.default} />
    <Benefit {...BenefitData.default} />
    <Pricing {...PricingData.default} />
    <Cta {...CtaData.default} />
    <PageFooter {...PageFooterData.default} />
  </>
);

export default Home;
