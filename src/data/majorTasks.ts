export interface MajorTask {
  id: string;
  title: string;
  description: string;
  image: string;
  completionDate?: string;
  status: 'completed' | 'ongoing' | 'planned';
}

export const majorTasks: MajorTask[] = [
  {
    id: "1",
    title: "New Water Pipeline Installation",
    description: "Successfully installed 15km of new distribution pipelines in Ward 7, improving water access for over 500 households.",
    image: "/images/tasks/pipeline-installation.jpg",
    completionDate: "2081/03/15",
    status: "completed"
  },
  {
    id: "2",
    title: "Water Quality Testing Campaign",
    description: "Conducted quarterly water quality testing across all distribution points, ensuring compliance with national health standards.",
    image: "/images/tasks/water-testing.jpg",
    completionDate: "2081/04/01",
    status: "completed"
  },
  {
    id: "3",
    title: "Community Awareness Program",
    description: "Organized workshops and public gatherings to educate residents on water conservation and sanitation practices.",
    image: "/images/tasks/community-program.jpg",
    completionDate: "2081/03/20",
    status: "completed"
  },
  {
    id: "4",
    title: "Reservoir Expansion Project",
    description: "Completed the expansion of the main water reservoir, increasing storage capacity by 30% to meet growing demand.",
    image: "/images/tasks/reservoir-expansion.jpg",
    completionDate: "2081/02/28",
    status: "completed"
  },
  {
    id: "5",
    title: "Smart Meter Pilot Project",
    description: "Launched a pilot project for smart water meters in selected areas, enhancing billing accuracy and leak detection.",
    image: "/images/tasks/smart-meters.jpg",
    status: "ongoing"
  },
  {
    id: "6",
    title: "Emergency Water Supply System",
    description: "Developing an emergency water supply system for disaster-prone areas to ensure water availability during emergencies.",
    image: "/images/tasks/emergency-system.jpg",
    status: "planned"
  }
];