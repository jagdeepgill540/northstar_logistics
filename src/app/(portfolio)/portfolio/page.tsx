import { Metadata } from 'next';
import PortfolioMain from '@/views/portfolio/portfolio';

export const metadata: Metadata = {
  title: 'Northstar - Portfolio Page',
};

const PortfolioPage = () => {
  return <PortfolioMain />;
};
export default PortfolioPage;
