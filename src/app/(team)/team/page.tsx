import { Metadata } from 'next';
import TeamMain from '@/views/team/team';

export const metadata: Metadata = {
  title: 'Northstar - Team Page',
};

const TeamPage = () => {
  return <TeamMain />;
};
export default TeamPage;
