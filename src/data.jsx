import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.png';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.png';
import Work4 from './assets/project-4.png';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Steve',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Milner',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '27 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Tunisian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Tunis',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+21621184010',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'you@mail.com',
  },

  {
    id: 9,
    title: 'Skype : ',
    description: 'steve.milner',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'French, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '12+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '97+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '81+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '53+',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023 - PRESENT',
    title: 'Web Developer <span> Remote </span>',
    desc: 'I have 1 year experience in Frontend Development.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2013 - 2018',
    title: 'UI/UX Designer <span> Remote </span>',
    desc: 'I have 1 year experience in UI/UX Designing',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2005 - 2013',
    title: 'Social Media Manager <span> SquadTech </span>',
    desc: 'I have 3 month experience in Social Media Manager',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022 - PRESENT',
    title: 'Software Engineering <span> University of Karachi</span>',
    desc: 'I am undergraduate student of University of Karachi',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020 - 2022',
    title: 'Intermediate <span> Federal Govt Boys College Karachi Cantt </span>',
    desc: 'I completed college degree from Federal Govt Boys College Karachi Cantt',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2010 - 2020',
    title: 'Matric <span> Al-Qalam Model Public Secondary School </span>',
    desc: 'I completed matric degree from Al-Qalam Model Public Secondary School',
  },
];

export const skills = [
  {
    id: 1,
    title: 'HTML',
    percentage: '80',
  },

  {
    id: 2,
    title: 'CSS',
    percentage: '70',
  },

  {
    id: 3,
    title: 'JS',
    percentage: '60',
  },

  {
    id: 4,
    title: 'BOOTSTRAP',
    percentage: '75',
  },

  {
    id: 5,
    title: 'TAILWIND CSS',
    percentage: '75',
  },

  {
    id: 6,
    title: 'REACT JS',
    percentage: '60',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Fiverr',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML CSS JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/03554718903?tab=repositories',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/03554718903?tab=repositories',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Sign Up Form',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Form',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML CSS JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/03554718903?tab=repositories',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Registration Form',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Form',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML CSS JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/03554718903?tab=repositories',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Landing Page',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'https://github.com/03554718903?tab=repositories',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Login Form',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Form',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML CSS JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/03554718903?tab=repositories',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
