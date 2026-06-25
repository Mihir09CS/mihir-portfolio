import {
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiNpm,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';
import { TbBinaryTree2, TbBrandVscode, TbDatabase, TbNetwork, TbServerCog } from 'react-icons/tb';
import { LuBox, LuDatabaseZap } from 'react-icons/lu';

export const techCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'UI engineering',
    accent: 'rgba(56, 189, 248, 0.36)',
    items: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss, color: '#1572B6' },
      { name: 'JavaScript (ES6+)', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'API development',
    accent: 'rgba(168, 85, 247, 0.34)',
    items: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#6DA55F' },
      { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    description: 'Persistence layer',
    accent: 'rgba(16, 185, 129, 0.34)',
    items: [
      { name: 'MongoDB', icon: SiMongodb, color: '#4EA94B' },
      { name: 'SQL', icon: TbDatabase, color: '#60A5FA' },
    ],
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    description: 'Problem solving',
    accent: 'rgba(245, 158, 11, 0.34)',
    items: [
      { name: 'Java', icon: FaJava, color: '#ED8B00' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    ],
  },
  {
    id: 'tools',
    title: 'Development Tools',
    description: 'Daily workflow',
    accent: 'rgba(244, 63, 94, 0.32)',
    items: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
      { name: 'VS Code', icon: TbBrandVscode, color: '#22A6F2' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'npm', icon: SiNpm, color: '#CB3837' },
    ],
  },
  {
    id: 'core-cs',
    title: 'Core CS',
    description: 'Foundational knowledge',
    accent: 'rgba(99, 102, 241, 0.34)',
    items: [
      { name: 'DSA', fullName: 'Data Structures & Algorithms', icon: TbBinaryTree2, color: '#C4B5FD' },
      { name: 'DBMS', fullName: 'Database Management Systems', icon: LuDatabaseZap, color: '#93C5FD' },
      { name: 'OOP', fullName: 'Object-Oriented Programming', icon: LuBox, color: '#F9A8D4' },
      { name: 'Operating Systems', icon: TbServerCog, color: '#86EFAC' },
      { name: 'Computer Networks', icon: TbNetwork, color: '#67E8F9' },
    ],
  },
];
