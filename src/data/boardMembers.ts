export interface BoardMember {
  id: string;
  name: string;
  position: string;
  description: string;
  phone?: string;
  email?: string;
  image: string;
}

export const boardMembers: BoardMember[] = [
  {
    id: "1",
    name: "बोधराज गौडेल",
    position: "अध्यक्ष",
    description: "A visionary leader committed to equitable community development and clean water access.",
    phone: "+977 9857022031",
    email: "bodhraj@gmail.com",
    image: "/images/board/chairman.jpg",
  },
  {
    id: "2",
    name: "गिता भण्डारी",
    position: "उपाध्यक्ष",
    description: "Passionate about sustainability and local engagement with a focus on water conservation.",
    phone: "+977 9869278201",
    email: "gita@gmail.com",
    image: "/images/board/vice-chairman.jpg",
  },
  {
    id: "3",
    name: "दिपक पौडेल",
    position: "सचिव",
    description: "Organized and detail-oriented, overseeing administrative and operational processes.",
    phone: "+977 9857058880",
    email: "dipakpaudelji@gmail.com",
    image: "/images/board/secretary.jpg",
  },
  {
    id: "4",
    name: "घनश्याम डुम्रे",
    position: "कोषाध्यक्ष",
    description: "Ensures financial transparency and manages budget allocations effectively.",
    phone: "+977 9847049753",
    email: "ghanshyam@gmail.com",
    image: "/images/board/treasure.jpg",
  },
  {
    id: "5",
    name: "लालमन यादव",
    position: "सदस्य",
    description: "Advocates for community welfare and participates in outreach programs.",
    phone: "+977 9857077322",
    email: "lalman@gmail.com",
    image: "/images/board/member3.jpg",
  },
  {
    id: "6",
    name: "खुमिसरा न्यौपाने",
    position: "सदस्य",
    description: "Supports infrastructure development and field-level execution.",
    phone: "+977 9857044249",
    email: "khumisara@gmail.com",
    image: "/images/board/member1.jpg",
  },
  {
    id: "7",
    name: "टिका प्रसाद पौडेल",
    position: "सदस्य",
    description: "Dedicated to inclusive participation and community mobilization.",
    phone: "+977 9857010095",
    email: "tika@gmail.com",
    image: "/images/board/member5.jpg",
  },
  {
    id: "8",
    name: "गोमा पौडेल",
    position: "सदस्य",
    description: "Ensures gender representation and women's involvement in governance.",
    phone: "+977 9847268514",
    email: "goma@gmail.com",
    image: "/images/board/member2.jpg",
  },
  {
    id: "9",
    name: "किम बहादुर कामु",
    position: "सदस्य",
    description: "Works towards digital solutions and organizational efficiency.",
    phone: "+977 9825411145",
    email: "kim@gmail.com",
    image: "/images/board/member4.jpg",
  },
  {
    id: "10",
    name: "कुल बहादुर आले",
    position: "सदस्य",
    description: "Experienced in field operations and local engagement initiatives.",
    phone: "+977 9816420565",
    email: "kul@gmail.com",
    image: "/images/board/member7.jpg",
  },
  {
    id: "11",
    name: "मिना नेपाली",
    position: "सदस्य",
    description: "Handles technical planning and maintenance strategy for water systems.",
    phone: "+977 9812965865",
    email: "mina@gmail.com",
    image: "/images/board/member6.jpg",
  }
];
