import { Metadata } from 'next';
import HomeOnePage from './(homes)/home-1/page';

export const metadata: Metadata = {
  title: 'Northstar - Home Page',
};

export default function Home() {
  return (
    <>
      <HomeOnePage />
    </>
  );
}
