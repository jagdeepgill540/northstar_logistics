import { ITeamDT } from '@/types/team-d-t';

import teamImg1 from '@/assets/img/team/team-1-1.jpg';
import teamImg2 from '@/assets/img/team/team-1-2.jpg';
import teamImg3 from '@/assets/img/team/team-1-3.jpg';
// import teamImg4 from '@/assets/img/team/team-1-4.jpg';
// import teamImg5 from '@/assets/img/team/team-1-5.jpg';
// import { Dribble, Facebook, Instagram, X } from '@/components/svg';

export const teamDataOne: ITeamDT[] = [
  {
    id: 1,
    name: 'Gurpiar Singh Sandhu',
    designation: 'Managing Director',
    image: teamImg1,
    phone: '(+61) 450 413 113',
    email: 'Northstarinfo@gmail.com',
    address: '73 Pipe Road, Laverton North VIC 3026',
    description: 'At Northstar Logistics, our mission is simple: to deliver freight safely, efficiently, and reliably—every time. As the Director, I’m proud to lead a team that’s committed to raising the bar in the Australian transport and logistics industry.\nWe understand that our customers rely on us not just to move goods, but to support their business goals and maintain their reputations.That’s why we’ve built our operations on a foundation of compliance, integrity, and innovation.Every journey we undertake is backed by strong systems, experienced people, and a culture that prioritizes safety and performance.\nFrom day one, my vision has been to create a company that partners with clients long- term, adapts to their needs, and exceeds expectations.Whether it’s local or interstate, we approach every load with professionalism and care—because we know what’s at stake.\nThank you for considering Northstar Logistics.We look forward to earning your trust.',
    socials: [
      // { platform: <Facebook />, link: 'https://facebook.com' },
      // { platform: <X />, link: 'https://x.com' },
      // { platform: <Dribble />, link: 'https://dribbble.com/' },
      // {
      //   platform: <Instagram />,
      //   link: 'https://www.instagram.com/',
      // },
    ],
    skills: [
      { title: 'Consulting', value: '90' },
      { title: 'Development', value: '75' },
      { title: 'Finance', value: '82' },
    ],
  },
  {
    id: 2,
    name: 'Jakub Foltynowicz',
    designation: 'National Commercial Manager',
    image: teamImg2,
    description: 'National Commercial Manager, Northstar Logistics Group pty ltd\nAt Northstar Logistics Group, our commitment is to delivering dependable, agile, and client-focused logistics solutions that meet the evolving demands of today’s supply chain. With over 7 years of experience in business development within the transport and logistics sector, I’ve seen firsthand how strong partnerships and smart strategy drive long-term success.\nIn my role as National Commercial Manager, I focus on building relationships that are grounded in trust, transparency, and performance. Every client we work with is different—and that’s exactly how we treat them. We take time to understand their unique needs and tailor our services to match, whether it’s local freight movements, national distribution, or complex supply chain coordination.\nNorthstar isn’t just a logistics provider—we’re a growth partner. Our team is agile, data-driven, and committed to continuous improvement. We take pride in not only meeting expectations, but consistently exceeding them.\nI look forward to continuing to lead Northstar into new markets and opportunities, and to helping our clients navigate their logistical challenges with confidence and clarity.',
    phone: '(+61) 450 413 113',
    email: 'Northstarinfo@gmail.com',
    address: '73 Pipe Road, Laverton North VIC 3026',
    socials: [
      // { platform: <Facebook />, link: 'https://facebook.com' },
      // { platform: <X />, link: 'https://x.com' },
      // { platform: <Dribble />, link: 'https://dribbble.com/' },
      // {
      //   platform: <Instagram />,
      //   link: 'https://www.instagram.com/',
      // },
    ],
    skills: [
      { title: 'Consulting', value: '80' },
      { title: 'Development', value: '85' },
      { title: 'Finance', value: '92' },
    ],
  },
  {
    id: 3,
    name: 'Simeon Anastasov',
    designation: 'Director',
    description: "At Northstar Logistics Group, we are driven by a simple yet powerful mission: to deliver smarter, safer, and more reliable logistics solutions that help our clients move forward with confidence. As Director, I am proud to lead a team that is deeply committed to excellence, innovation, and long-term partnerships.\nWith a strong foundation built on industry knowledge, operational discipline, and customer-first thinking, we have positioned Northstar as a trusted logistics provider across Australia. We understand that in this fast-paced industry, reliability and responsiveness are non-negotiable—and that's exactly what we deliver.\nMy vision for Northstar has always been about more than moving freight. It’s about building a business that values integrity, invests in its people, and adapts to change without compromising on quality or compliance. Whether it’s a single pallet or a full-scale logistics project, we treat every job with the same level of care and professionalism.\nAs we continue to grow and expand our network, our focus remains clear: to provide value-driven, tailored transport solutions backed by modern systems, experienced teams, and a forward-thinking mindset.\nThank you for being part of the Northstar journey.",
    image: teamImg3,
    phone: '(+61) 450 413 113',
    email: 'Northstarinfo@gmail.com',
    address: '73 Pipe Road, Laverton North VIC 3026',
    socials: [
      // { platform: <Facebook />, link: 'https://facebook.com' },
      // { platform: <X />, link: 'https://x.com' },
      // { platform: <Dribble />, link: 'https://dribbble.com/' },
      // {
      //   platform: <Instagram />,
      //   link: 'https://www.instagram.com/',
      // },
    ],
    skills: [
      { title: 'Consulting', value: '88' },
      { title: 'Development', value: '75' },
      { title: 'Finance', value: '83' },
    ],
  },
];

export const teamData: ITeamDT[] = [...teamDataOne];
