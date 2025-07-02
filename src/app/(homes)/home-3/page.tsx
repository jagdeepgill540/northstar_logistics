import { Metadata } from 'next';
import HomeThreeMain from '@/views/home-3/home-3';

export const metadata: Metadata = {
  title: 'Northstar - Home Three Page',
};

const HomeThreePage = () => {
  return <HomeThreeMain />;
};
export default HomeThreePage;
