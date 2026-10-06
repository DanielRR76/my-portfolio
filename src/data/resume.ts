export type ResumeEntry = {
  title: string
  organization: string
  date: string
  details?: string[]
}

export type ResumeSectionData = {
  title: string
  entries: ResumeEntry[]
}

export const resumeSections: ResumeSectionData[] = [
  {
    title: 'Experiences',
    entries: [
      {
        title: 'Software Developer - DTV+',
        organization: 'Globo',
        date: 'Jul 2025 - Present',
        details: [
          'Develop interactive TV applications for DTV+ using React and TypeScript, building features such as voting systems, live product purchases, and real-time audience engagement.',
          'Build TV-focused interfaces designed for remote-control interaction and spatial navigation, considering the constraints of Smart TV environments and real-world hardware.',
          'Improve application reliability across heterogeneous Smart TV environments through legacy browser compatibility testing, real-device testing, reusable UI components, and Storybook documentation.',
          'Implement and maintain automated testing with Jest, Testing Library, and Cypress, including the introduction of end-to-end testing to validate critical user flows and support regression prevention.',
        ],
      },
      {
        title: 'Software Developer - STAR',
        organization: 'Globo',
        date: 'Dec 2023 - Jul 2025',
        details: [
          'Developed RESTful APIs with C#/.NET for talent and contract management systems, including communication and integration between microservices.',
          'Applied SOLID principles and Clean Architecture to improve separation of responsibilities, reduce coupling, and make backend systems easier to maintain and extend.',
          'Optimized SQL queries and database operations using MySQL and Oracle Database, including views, indexes, CRUD operations, and query-performance improvements.',
          'Reduced a talent allocation search from approximately 3–5 minutes to 40 seconds–1 minute by implementing multithreading and parallel processing.',
          'Contributed to automated testing across frontend and backend applications using Cypress, Jest, and xUnit, including 100% interface test coverage for a React and TypeScript system.',
          'Developed frontend features using Next.js, React, and MUI, as well as Vue.js and PrimeVue, building reusable interfaces for contract-payment and talent-planning systems.',
        ],
      },
    ],
  },
  {
    title: 'Education',
    entries: [
      {
        title: `Bachelor of Information Systems `,
        organization: 'Universidade Federal Fluminense',
        date: 'Mar 2022 - Jul 2026',
      },
    ],
  },
  {
    title: 'Certificates',
    entries: [
      {
        title: 'Node.js Completo',
        organization: 'Udemy',
        date: '2025',
      },
      {
        title: 'C# Completo - OOP',
        organization: 'Udemy',
        date: '2025',
      },
      {
        title: 'React.js e Next.js - Médio e Avançado',
        organization: 'Udemy',
        date: '2024',
      },
      {
        title: 'Desenvolvimento Web Completo',
        organization: 'Udemy',
        date: '2024',
      },
    ],
  },
]
