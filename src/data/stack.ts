import css from '../assets/stack/css3-original.svg'
import cypress from '../assets/stack/cypressio-original.svg'
import docker from '../assets/stack/docker-original.svg'
import express from '../assets/stack/express.png'
import git from '../assets/stack/git-original.svg'
import javascript from '../assets/stack/javascript-original.svg'
import jest from '../assets/stack/jest-plain.svg'
import mysql from '../assets/stack/mysql-original.svg'
import node from '../assets/stack/nodejs-original.svg'
import playwright from '../assets/stack/playwright-original.svg'
import postgres from '../assets/stack/postgresql-original.svg'
import prisma from '../assets/stack/prisma-original.svg'
import react from '../assets/stack/react-original.svg'
import tailwind from '../assets/stack/tailwindcss-original.svg'
import typescript from '../assets/stack/typescript-original.svg'
import csharp from '../assets/stack/csharp-original.svg'
import java from '../assets/stack/java-original.svg'
import next from '../assets/stack/nextjs-original.svg'
import vitest from '../assets/stack/vitest-original.svg'
import vue from '../assets/stack/vuejs-original.svg'
import python from '../assets/stack/python-original.svg'
import mongoDB from '../assets/stack/mongodb-original.svg'
import postman from '../assets/stack/postman-original.svg'

export type StackTechnology = { name: string; icon?: string }
export type StackGroup = { category: string; technologies: StackTechnology[] }

export const stack: StackGroup[] = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'JavaScript', icon: javascript },
      { name: 'TypeScript', icon: typescript },
      { name: 'React', icon: react },
      { name: 'Next.js', icon: next },
      { name: 'Vue.js', icon: vue },
      { name: 'Tailwind CSS', icon: tailwind },
      { name: 'CSS Modules', icon: css },
    ],
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'Node.js', icon: node },
      { name: 'Express.js', icon: express },
      { name: 'CSharp', icon: csharp },
      { name: 'Java', icon: java },
      { name: 'Python', icon: python },
    ],
  },
  {
    category: 'Database',
    technologies: [
      { name: 'PostgreSQL', icon: postgres },
      { name: 'MySQL', icon: mysql },
      { name: 'Prisma', icon: prisma },
      { name: 'MongoDB', icon: mongoDB },
    ],
  },
  {
    category: 'Testing',
    technologies: [
      { name: 'Jest', icon: jest },
      { name: 'Testing Library' },
      { name: 'Cypress', icon: cypress },
      { name: 'Playwright', icon: playwright },
      { name: 'Vitest', icon: vitest },
    ],
  },
  {
    category: 'Tools',
    technologies: [
      { name: 'Git', icon: git },
      { name: 'Docker', icon: docker },
      { name: 'Postman', icon: postman },
    ],
  },
]
