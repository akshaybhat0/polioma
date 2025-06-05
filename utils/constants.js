import { FaCode, FaCloud, FaDatabase, FaServer, FaMobile, FaTools } from 'react-icons/fa';
import { 
  SiPython, 
  SiJavascript, 
  SiJava, 
  SiCplusplus, 
  SiGolang, 
  SiHtml5, 
  SiCss3, 
  SiBootstrap, 
  SiPostgresql, 
  SiMysql, 
  SiWindows, 
  SiLinux, 
  SiDocker, 
  SiKubernetes, 
  SiAws, 
  SiGooglecloud, 
  SiTerraform, 
  SiAnsible, 
  SiJenkins, 
  SiGit, 
  SiReact, 
  SiNodedotjs 
} from 'react-icons/si';
import { DiScrum } from 'react-icons/di';

export const navLinks = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Skills' },
  { id: 'projects', title: 'Projects' },
  { id: 'contact', title: 'Contact' }
];

export const skills = [
  {
    name: 'Programming',
    icon: <FaCode />,
    items: [
      { name: 'Python', icon: <SiPython />, level: 85 },
      { name: 'JavaScript', icon: <SiJavascript />, level: 80 },
      { name: 'Java', icon: <SiJava />, level: 75 },
      { name: 'C/C++', icon: <SiCplusplus />, level: 70 },
      { name: 'Go', icon: <SiGolang />, level: 65 }
    ]
  },
  {
    name: 'Web Development',
    icon: <FaCode />,
    items: [
      { name: 'HTML5', icon: <SiHtml5 />, level: 90 },
      { name: 'CSS3', icon: <SiCss3 />, level: 85 },
      { name: 'Bootstrap', icon: <SiBootstrap />, level: 80 },
      { name: 'React', icon: <SiReact />, level: 75 },
      { name: 'Node.js', icon: <SiNodedotjs />, level: 70 }
    ]
  },
  {
    name: 'Database',
    icon: <FaDatabase />,
    items: [
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 80 },
      { name: 'MySQL', icon: <SiMysql />, level: 75 }
    ]
  },
  {
    name: 'DevOps & Cloud',
    icon: <FaCloud />,
    items: [
      { name: 'Docker', icon: <SiDocker />, level: 85 },
      { name: 'Kubernetes', icon: <SiKubernetes />, level: 80 },
      { name: 'AWS', icon: <SiAws />, level: 75 },
      { name: 'GCP', icon: <SiGooglecloud />, level: 70 },
      { name: 'Terraform', icon: <SiTerraform />, level: 75 },
      { name: 'Ansible', icon: <SiAnsible />, level: 70 }
    ]
  },
  {
    name: 'Tools & Platforms',
    icon: <FaTools />,
    items: [
      { name: 'Git', icon: <SiGit />, level: 85 },
      { name: 'Jenkins', icon: <SiJenkins />, level: 75 },
      { name: 'Scrum', icon: <DiScrum />, level: 80 }
    ]
  },
  {
    name: 'Operating Systems',
    icon: <FaServer />,
    items: [
      { name: 'Windows', icon: <SiWindows />, level: 90 },
      { name: 'Linux', icon: <SiLinux />, level: 85 }
    ]
  }
];

export const projects = [
  {
    title: 'Rescue Link',
    description: 'A project that demonstrates emergency situations where users can input the raw location and incident details. The system then dispatches a rescue team to the specified location.',
    technologies: ['Go', 'Cloud', 'DevOps'],
    image: '/assets/images/rescue.png',
    github: '#',
    demo: '#'
  },
  {
    title: 'Peripheral Nerve Imaging using Deep Learning',
    description: 'Detection of the brachial plexus nerve in the human body using deep learning, ensuring precise and accurate location identification.',
    technologies: ['Python', 'Deep Learning', 'Computer Vision', 'CNN'],
    image: '/assets/images/nerve.png',
    github: '#',
    demo: '#'
  },
  {
    title: 'Hostel Management System',
    description: 'Exciting project based on web development for managing hostel student data efficiently and accurately.',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PostgreSQL'],
    image: '/assets/images/hostel.jpeg',
    github: '#',
    demo: '#'
  },
  {
    title: 'Chat-Bot',
    description: 'A chatbot that can answer every question you ask. It is built using Python and utilizes the OpenAI API for natural language processing.',
    technologies: ['Python', 'OpenAI API', 'Natural Language Processing'],
    image: '/assets/images/chatbot.png',
    github: '#',
    demo: '#'
  },
  {
    title: 'Car Purchasing System',
    description: 'A system that assists users in purchasing cars by providing information on various models, prices, and financing options.',
    technologies: ['Go', 'Web Development', 'Database Management(PostgreSQL)'],
    image: '/assets/images/cars.png',
    github: '#',
    demo: '#'
  },
  {
    title: 'IoT Based Smart Water Efficiency System',
    description: 'An IoT-based system designed to monitor and manage water usage efficiently, ensuring optimal water conservation.',
    technologies: ['Go', 'Web Development', 'Database Management(PostgreSQL)'],
    image: '/assets/images/Iot.png',
    github: '#',
    demo: '#'
  }
];