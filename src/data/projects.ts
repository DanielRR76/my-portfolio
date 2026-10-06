import clikpets from '../assets/projects/ClikPets.png'
import clikbank from '../assets/projects/ClikBank.png'
import crimeflow from '../assets/projects/CrimeFlow.png'

export type ProjectCategory = 'Frontend' | 'Backend' | 'Others'
export type Project = {
  id: string
  title: string
  description: string
  category: ProjectCategory
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

export const projectCategories = [
  'All',
  'Frontend',
  'Backend',
  'Others',
] as const
export type ProjectFilter = (typeof projectCategories)[number]

export const projects: Project[] = [
  {
    id: 'ClikPet-Frontend',
    title: 'ClikPet',
    description:
      'It is a project for a website where users can adopt pets and put a pet up for adoption.',
    category: 'Frontend',
    image: clikpets,
    technologies: ['React', 'TypeScript', 'CSS Modules', 'TanStack Query'],
    githubUrl: 'https://github.com/DanielRR76/ClikPets-Frontend',
    liveUrl: 'https://clik-pets-frontend.vercel.app/',
  },
  {
    id: 'ClikPet-Backend',
    title: 'ClikPet - Node.js',
    description:
      'It is a project for a website where users can adopt pets and put a pet up for adoption.',
    category: 'Backend',
    image: clikpets,
    technologies: [
      'Node.js',
      'Express',
      'PostgreSQL',
      'TypeScript',
      'Docker',
      'Prisma',
    ],
    liveUrl: 'https://clik-pets-backend.vercel.app/docs/',
    githubUrl: 'https://github.com/DanielRR76/ClikPets-Backend',
  },
  {
    id: 'ClikPet-Backend-java',
    title: 'ClikPet - Java',
    description:
      'It is a project for a website where users can adopt pets and put a pet up for adoption.',
    category: 'Backend',
    image: clikpets,
    technologies: ['Java', 'MongoDB'],
    githubUrl: 'https://github.com/DanielRR76/ClikPets-Backend-java',
  },
  {
    id: 'ClikBank',
    title: 'ClikBank',
    description: "It's a financial banking project called ClikBank.",
    category: 'Frontend',
    image: clikbank,
    technologies: ['JavaScript'],
    githubUrl: 'https://github.com/DanielRR76/ClikBank',
  },
  {
    id: 'crimeFlow',
    title: 'CrimeFlow',
    description:
      'CrimeFlow is a criminal data analysis system from the United States.',
    category: 'Others',
    image: crimeflow,
    technologies: ['Python', 'AI', 'LangGraph', 'Docker', 'CockroachDB', 'RAG'],
    githubUrl: 'https://github.com/RyanSerraa/crimeFlow',
  },
]
