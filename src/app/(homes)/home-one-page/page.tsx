import { Metadata } from 'next';
import HomeOnePageMain from '@/views/home-1/home-one-page';

export const metadata: Metadata = {
  title: 'Northstar - Home Page',
};

const HomeOnePage = () => {
  return <HomeOnePageMain />;
};
export default HomeOnePage;
