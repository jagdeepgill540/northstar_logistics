import { Metadata } from 'next';
import AboutMain from '@/views/about/about';

export const metadata: Metadata = {
  title: 'Northstar - About Us Page',
};

const AboutPage = () => {
  return <AboutMain />;
};
export default AboutPage;
