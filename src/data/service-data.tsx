import { IServiceDT } from '@/types/service-d-t';

import serviceImg1 from '@/assets/img/service/service-1-1.jpg';
import serviceImg2 from '@/assets/img/service/service-1-2.jpg';
import serviceImg3 from '@/assets/img/service/service-1-3.jpg';
import serviceImg4 from '@/assets/img/service/service-1-4.jpg';
import serviceImg5 from '@/assets/img/service/service-5-1.jpg';
import serviceDetailsImg from '@/assets/img/service/service-details.jpg';
import {
  ServiceIconEight,
  ServiceIconEleven,
  ServiceIconFive,
  ServiceIconFour,
  ServiceIconNine,
  ServiceIconOne,
  ServiceIconSeven,
  ServiceIconSix,
  ServiceIconTen,
  ServiceIconThree,
  // ServiceIconTwelve,
  ServiceIconTwo,
} from '@/components/svg';

export const serviceDataOne: IServiceDT[] = [
  {
    id: 1,
    image: serviceImg1,
    title: 'Long Distance Moves',
    description: `We provide reliable long-distance moving services, ensuring your goods are transported safely and efficiently across cities or states.`,
    detailsImage: serviceDetailsImg,
  },
  {
    id: 2,
    image: serviceImg2,
    title: 'International Moves',
    description: `Our international moving solutions handle customs, documentation, and secure shipping to make your global relocation seamless.`,
    detailsImage: serviceDetailsImg,
  },
  {
    id: 3,
    image: serviceImg3,
    title: 'Corporate Moves',
    description: `We specialize in corporate relocations, minimizing downtime and ensuring a smooth transition for your business assets and employees.`,
    detailsImage: serviceDetailsImg,
  },
  {
    id: 4,
    image: serviceImg4,
    title: 'Local Moves in Town',
    description: `Our local moving services offer quick and efficient transport for your goods within the city, with careful handling and timely delivery.`,
    detailsImage: serviceDetailsImg,
  },
];

export const serviceDataTwo: IServiceDT[] = [
  {
    id: 5,
    icon: <ServiceIconOne />,
    title: 'Biosecurity & Customs',
    description: `Expert handling of biosecurity regulations and customs clearance to ensure your shipments comply with all legal and safety requirements.`,
    descriptioninDetails: `Navigating biosecurity and customs regulations is a critical aspect of international logistics. Our team is dedicated to ensuring your shipments meet all compliance requirements, minimizing the risk of delays, fines, or product holds. We stay current with evolving regulations and proactively manage documentation, inspections, and clearances for your cargo.

From the moment your goods arrive, we coordinate with relevant authorities to facilitate smooth entry and exit processes. Our expertise covers quarantine management, tariff classification, and duty optimization, providing you with a seamless experience across borders. We identify and resolve potential issues before they impact your supply chain, so your business can operate without interruption.

With our comprehensive biosecurity and customs services, you gain peace of mind knowing that your shipments are in expert hands. We offer end-to-end support, transparent communication, and a commitment to protecting your interests at every stage of the import and export process.`,
    detailsImage: serviceDetailsImg,
    btnText: 'More About Us',
  },
  {
    id: 6,
    icon: <ServiceIconTwo />,
    title: 'Warehousing & Distribution',
    description: `Secure, modern warehousing and efficient distribution services to keep your supply chain running smoothly and your goods safe.`,
    descriptioninDetails: `Our warehousing and distribution solutions are designed to provide flexibility, security, and efficiency for businesses of all sizes. We operate state-of-the-art facilities equipped with advanced inventory management systems, ensuring your products are stored safely and tracked in real time. Our team handles everything from bulk storage to order fulfillment, adapting to your unique requirements.

Distribution is at the heart of our service, with a robust network that enables fast and reliable delivery to your customers. We offer pick-and-pack, cross-docking, and last-mile delivery services, all tailored to meet your operational needs. Our integrated approach reduces handling times, minimizes inventory costs, and ensures your goods reach their destination on schedule.

By partnering with us, you benefit from scalable warehousing options and a distribution network built for speed and reliability. We are committed to supporting your growth, optimizing your supply chain, and delivering exceptional value at every step.`,
    detailsImage: serviceDetailsImg,
    btnText: 'More About Us',
  },
  {
    id: 7,
    icon: <ServiceIconThree />,
    title: 'Logistics & CFS',
    description: `Comprehensive logistics management and Container Freight Station (CFS) services for seamless cargo handling and consolidation.`,
    descriptioninDetails: `Efficient logistics and CFS operations are essential for the smooth movement of goods in global trade. Our team manages every aspect of your cargo’s journey, from initial receipt at the Container Freight Station to final delivery. We offer container stuffing and de-stuffing, cargo consolidation, and deconsolidation, all performed with meticulous attention to detail.

Our strategically located facilities near major ports enable quick turnaround and reduced transit times. We coordinate with shipping lines, customs, and transport providers to ensure your cargo moves seamlessly through every stage of the supply chain. Our expertise allows you to optimize container utilization, reduce costs, and maintain full visibility over your shipments.

With our comprehensive logistics and CFS services, you can trust that your cargo is handled efficiently and securely. We are dedicated to providing solutions that meet your business needs, no matter how complex your logistics requirements may be.`,
    detailsImage: serviceDetailsImg,
    btnText: 'More About Us',
  },
  {
    id: 8,
    icon: <ServiceIconFour />,
    title: 'Container Transport',
    description: `Reliable container transport solutions for moving your goods efficiently between ports, warehouses, and final destinations.`,
    descriptioninDetails: `Our container transport services are designed to provide safe, timely, and cost-effective movement of your goods. We operate a modern fleet of vehicles equipped to handle containers of all sizes, including specialized equipment for oversized or sensitive cargo. From port pickups to warehouse deliveries and intermodal transfers, we manage every aspect of the journey.

Our experienced drivers and logistics coordinators monitor each shipment in real time, ensuring prompt delivery and immediate response to any challenges. We offer flexible scheduling and route optimization to minimize transit times and reduce costs. Our commitment to reliability and customer service means your cargo is always in good hands.

By choosing our container transport solutions, you gain a partner dedicated to keeping your supply chain moving without interruption. We focus on safety, efficiency, and transparency, so you can concentrate on growing your business.`,
    detailsImage: serviceDetailsImg,
    btnText: 'More About Us',
  },
  {
    id: 9,
    icon: <ServiceIconOne />,
    title: 'FAK Services',
    description: `Flexible FAK (Freight All Kinds) services to optimize shipping costs by consolidating various cargo types into single containers.`,
    descriptioninDetails: `Our FAK (Freight All Kinds) services are designed to maximize efficiency and reduce shipping expenses by consolidating different types of cargo into a single container. This approach is ideal for businesses with varied or smaller shipments, allowing you to benefit from shared container space and lower per-unit costs.

We handle the entire process, from careful cargo segregation and secure packing to documentation and customs clearance. Our team ensures that each item is protected and tracked throughout its journey, maintaining product integrity and timely delivery. With our FAK solutions, you gain the flexibility to ship what you need, when you need it, without the constraints of traditional full-container loads.

Partnering with us for FAK services means you can optimize your logistics, reduce overhead, and enjoy peace of mind knowing your shipments are managed by experienced professionals. We are committed to delivering value, reliability, and tailored solutions for your unique shipping needs.`,
    detailsImage: serviceDetailsImg,
    btnText: 'More About Us',
  },
  {
    id: 10,
    icon: <ServiceIconFive />,
    title: 'Bulk Services',
    description: `Specialized bulk logistics solutions for transporting large quantities of unpackaged goods efficiently and safely, tailored to your industry needs.`,
    descriptioninDetails: `Handling bulk products like polymers and granular materials requires precision and care to maintain quality and avoid costly setbacks. Our bulk logistics services are designed to ensure safe, contamination-free transfers, whether moving goods from containers to silos or repackaging between bulk formats.

We provide comprehensive solutions that include efficient transfer processes, flexible repackaging options, and strict quality controls at every stage. Our integrated logistics network—featuring specialized vehicles and nationwide warehousing—enables us to deliver reliable, end-to-end service for both raw materials and palletized goods.

With our experienced team and advanced equipment, you can trust us to protect your products, streamline your supply chain, and deliver on time, every time.`,
    detailsImage: serviceDetailsImg,
    btnText: 'More About Us',
  },
];

export const serviceDataThree: IServiceDT[] = [
  {
    id: 13,
    bgImage: '/assets/img/portfolio/portfolio-3-5.jpg',
    serviceCount: '01',
    title: 'Long Distance Moves',
    detailsImage: serviceDetailsImg,
    description: `Trust us for long-distance moves, with careful planning and secure transport for your belongings across regions.`,
  },
  {
    id: 14,
    bgImage: 'assets/img/portfolio/portfolio-3-2.jpg',
    serviceCount: '02',
    title: 'International Moves',
    detailsImage: serviceDetailsImg,
    description: `We manage every aspect of your international move, from packing to customs clearance and delivery.`,
  },
  {
    id: 15,
    bgImage: '/assets/img/portfolio/portfolio-3-3.jpg',
    serviceCount: '03',
    title: 'Corporate Moves',
    detailsImage: serviceDetailsImg,
    description: `Our corporate moving services ensure a smooth transition for your office or business assets.`,
  },
  {
    id: 16,
    bgImage: 'assets/img/portfolio/portfolio-3-4.jpg',
    serviceCount: '04',
    title: 'Local Moves in Town',
    detailsImage: serviceDetailsImg,
    description: `Quick and reliable local moving services for homes and businesses within your city.`,
  },
];

export const serviceDataFour: IServiceDT[] = [
  {
    id: 18,
    icon: <ServiceIconFive />,
    title: 'Fast Delivery',
    description: `We guarantee fast and timely delivery of your shipments, ensuring your goods reach their destination as scheduled.`,
  },
  {
    id: 19,
    icon: <ServiceIconSix />,
    title: 'Advance technology',
    description: `Our logistics operations leverage advanced technology for real-time tracking and efficient management.`,
  },
  {
    id: 20,
    icon: <ServiceIconSeven />,
    title: 'Shipping Insurance',
    description: `Protect your shipments with our comprehensive shipping insurance options for peace of mind.`,
  },
  {
    id: 21,
    icon: <ServiceIconEight />,
    title: 'Ecological balance',
    description: `We are committed to sustainable logistics practices that minimize environmental impact.`,
  },
  {
    id: 22,
    icon: <ServiceIconNine />,
    title: 'Global Shipping',
    description: `Expand your reach with our global shipping services, connecting you to customers worldwide.`,
  },
  {
    id: 23,
    icon: <ServiceIconTen />,
    title: 'Intermodal Transport',
    description: `Our intermodal transport solutions combine multiple modes of transport for cost-effective and flexible shipping.`,
  },
  {
    id: 24,
    icon: <ServiceIconEleven />,
    title: 'Container Services',
    description: `We provide secure and efficient container services for all types of cargo, ensuring safe transit.`,
  },
  // {
  //   id: 25,
  //   icon: <ServiceIconTwelve />,
  //   title: 'Real-Time Tracking',
  //   description: `Monitor your shipments in real time with our advanced tracking systems for complete visibility.`,
  // },
];

export const serviceDataFive: IServiceDT[] = [
  {
    id: 26,
    image: serviceImg5,
    serviceCount: '01',
    title: 'Long Distance Moves',
    description: `We offer dependable long-distance moving services, ensuring your items are delivered safely and on time.`,
  },
  {
    id: 27,
    image: serviceImg5,
    serviceCount: '02',
    title: 'International Moves',
    description: `Our international moving experts handle every detail, making your overseas relocation stress-free.`,
  },
  {
    id: 28,
    image: serviceImg5,
    serviceCount: '03',
    title: 'Corporate Moves',
    description: `We provide tailored corporate moving solutions to minimize disruption and keep your business running smoothly.`,
  },
  {
    id: 29,
    image: serviceImg5,
    serviceCount: '04',
    title: 'Local Moves in Town',
    description: `Our local moving team ensures quick, safe, and efficient moves within your city or town.`,
  },
  // {
  //   id: 30,
  //   image: serviceImg5,
  //   serviceCount: '05',
  //   title: 'Ocean Freight',
  //   description: `Choose our ocean freight services for reliable and cost-effective international shipping of your goods.`,
  // },
];

export const serviceData: IServiceDT[] = [
  ...serviceDataOne,
  ...serviceDataTwo,
  ...serviceDataThree,
  ...serviceDataFour,
  ...serviceDataFive,
];
