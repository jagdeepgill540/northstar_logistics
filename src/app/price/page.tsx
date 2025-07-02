import { Metadata } from 'next';
import PriceMain from '@/views/price/price';

export const metadata: Metadata = {
  title: 'Northstar - Pricing Page',
};

const PricePage = () => {
  return <PriceMain />;
};
export default PricePage;
