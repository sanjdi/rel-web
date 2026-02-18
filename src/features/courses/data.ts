export type Course = {
  slug: string;
  title: string;
  duration: string;
  image: string;
  description: string;
  category: string;
};

export const courses: Course[] = [
  {
    slug: 'intro-to-3d-printing',
    title: 'Introduction to 3D Printing',
    duration: '1 hour',
    image: '/images/course01_3D-Printing.png',
    description:
      'Master the fundamentals of additive manufacturing, materials, slicing software and creating your first printable models.',
    category: '3D PRINTING',
  },
  {
    slug: 'data-analytics-excel',
    title: 'Data Analytics with Excel',
    duration: '1.5 hours',
    image: '/images/course03_Data-Analytics-with-Excel.jpg',
    description:
      'Use formulas, pivot tables and charts to turn raw data into meaningful insights.',
    category: 'DATA ANALYTICS',
  },
  {
    slug: '3d-printing-intermediate',
    title: '3D Printing Intermediate',
    duration: '2 hours',
    image: '/images/course01_3D-Printing.png',
    description:
      'Master the intermediate skills in additive manufacturing, materials, slicing software and creating printable models.',
    category: '3D PRINTING',
  },
  {
    slug: '3d-printing-advanced',
    title: '3D Printing Advanced',
    duration: '3 hours',
    image: '/images/course01_3D-Printing.png',
    description:
      'Master advanced skills in additive manufacturing, materials, and advanced slicing techniques for complex prints.',
    category: '3D PRINTING',
  },
  {
    slug: 'drone-technology-basics',
    title: 'Drone Technology Basics',
    duration: '24 hours',
    image: '/images/course02_Drone-Technology.jpg',
    description:
      'Foundations of drone systems, flight principles, safety and regulatory considerations.',
    category: 'DRONE TECHNOLOGY',
  },
  {
    slug: 'drone-technology-intermediate',
    title: 'Drone Technology Intermediate',
    duration: '24 hours',
    image: '/images/course02_Drone-Technology.jpg',
    description:
      'Intermediate topics including flight planning, sensors, and payload integration.',
    category: 'DRONE TECHNOLOGY',
  },
  {
    slug: 'drone-technology-professional',
    title: 'Drone Technology Professional',
    duration: '24 hours',
    image: '/images/course02_Drone-Technology.jpg',
    description:
      'Professional drone operations, mission planning and advanced applications for commercial use.',
    category: 'DRONE TECHNOLOGY',
  },
  {
    slug: 'data-analytics-power-bi',
    title: 'Data Analytics with Power BI',
    duration: '35 hours',
    image: '/images/course04_Data-Analytics-with-Power-BI.jpg',
    description:
      'Design interactive dashboards and connect to multiple enterprise data sources.',
    category: 'DATA ANALYTICS',
  },
  {
    slug: 'abc-course',
    title: 'ABC Course',
    duration: '35 hours',
    image: '/images/course01_3D-Printing.png',
    description:
      'Practical course covering applied techniques and hands-on projects.',
    category: 'DATA ANALYTICS',
  },
  {
    slug: 'xyz-course',
    title: 'XYZ Course',
    duration: '24 hours',
    image: '/images/course02_Drone-Technology.jpg',
    description:
      'Overview of practical applications and fundamentals for project work.',
    category: 'DATA ANALYTICS',
  },
  {
    slug: 'azure-databricks',
    title: 'Azure Databricks',
    duration: '40 hours',
    image: '/images/course05_Data-engineering-with-Azure-Databricks.jpg',
    description:
      'Build scalable pipelines using Spark, Delta Lake and modern lakehouse patterns.',
    category: 'DATA ENGINEERING',
  },
];
