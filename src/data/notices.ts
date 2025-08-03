export interface Notice {
  id: string;
  title: string;
  date: string;
  description?: string;
  pdfUrl?: string;
  isUrgent?: boolean;
}

export const notices: Notice[] = [
  {
    id: "1",
    title: "Public Notice Regarding Water Supply Interruption in Ward No. 5",
    date: "2081/04/10",
    description: "Water supply will be temporarily interrupted in Ward No. 5 for maintenance work.",
    pdfUrl: "/notices/notice-ward5-interruption.pdf",
    isUrgent: true
  },
  {
    id: "2", 
    title: "New Water Bill Payment Procedure Announced",
    date: "2081/04/05",
    description: "We have introduced a new simplified payment procedure for your convenience.",
    pdfUrl: "/notices/notice-bill-payment.pdf"
  },
  {
    id: "3",
    title: "Vacancy Announcement for Technical Assistant",
    date: "2081/03/30",
    description: "We are hiring a technical assistant. Applications are open until further notice.",
    pdfUrl: "/notices/notice-vacancy-tech-assistant.pdf"
  },
  {
    id: "4",
    title: "Emergency Water Outage Due to Pipe Burst in Buddha Chowk",
    date: "2081/03/28",
    description: "Emergency maintenance due to pipe burst. Water supply will be restored within 24 hours.",
    pdfUrl: "/notices/notice-buddha-chowk-emergency.pdf",
    isUrgent: true
  },
  {
    id: "5",
    title: "Monthly Water Quality Report - Chaitra 2081",
    date: "2081/03/25",
    description: "Monthly water quality testing results and compliance report.",
    pdfUrl: "/notices/water-quality-report-chaitra.pdf"
  },
  {
    id: "6",
    title: "New Connection Fee Structure Update",
    date: "2081/03/20",
    description: "Updated fee structure for new water connections effective from next month.",
    pdfUrl: "/notices/new-connection-fees.pdf"
  }
];