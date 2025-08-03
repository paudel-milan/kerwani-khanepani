export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "1",
    title: "Water Supply Services",
    description: "Reliable 24/7 water supply to households and commercial establishments",
    icon: "Droplets",
    features: [
      "Clean and safe drinking water",
      "24/7 water supply",
      "Regular quality testing",
      "Pressure maintenance"
    ]
  },
  {
    id: "2",
    title: "New Connection Services",
    description: "Quick and easy new water connection installation process",
    icon: "Wrench",
    features: [
      "Online application process",
      "Quick installation",
      "Transparent fee structure",
      "Technical consultation"
    ]
  },
  {
    id: "3",
    title: "Maintenance & Repair",
    description: "Prompt maintenance and repair services for water infrastructure",
    icon: "Settings",
    features: [
      "Emergency repair services",
      "Scheduled maintenance",
      "Leak detection",
      "Pipeline upgrades"
    ]
  },
  {
    id: "4",
    title: "Customer Support",
    description: "Dedicated customer support for all your water-related queries",
    icon: "Phone",
    features: [
      "24/7 helpline",
      "Online complaint system",
      "Bill inquiry services",
      "Technical assistance"
    ]
  }
];