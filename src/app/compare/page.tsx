import { Metadata } from 'next';
import CompareMain from '@/views/compare/compare';

export const metadata: Metadata = {
  title: 'Northstar - Compare Page',
};

const ComparePage = () => {
  return <CompareMain />;
};

export default ComparePage;
