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
    email: "bodhraj@devdaha.org.np",
    image: "/images/board/chairman.jpg",
  },
  {
    id: "2",
    name: "गिता भन्डारि",
    position: "उपाध्यक्ष (कार्य पालिका सदस्य)",
    description: "Passionate about sustainability and local engagement with a focus on water conservation.",
    phone: "+977 9869238201",
    email: "gita@devdaha.org.np",
    image: "/images/board/vice-chairman.jpg",
  },
  {
    id: "3",
    name: "दिपक पौडेल",
    position: "सचिव",
    description: "Organized and detail-oriented, overseeing administrative and operational processes.",
    phone: "+977 9857025580",
    email: "dipak@devdaha.org.np",
    image: "/images/board/secretary.jpg",
  },
  {
    id: "4",
    name: "घनश्याम डुम्रे",
    position: "कोषाध्यक्ष",
    description: "Ensures financial transparency and manages budget allocations effectively.",
    phone: "+977 9857000000",
    email: "ghanshyam@devdaha.org.np",
    image: "/images/board/treasure.jpg",
  },
  {
    id: "5",
    name: "लालमन यादव",
    position: "सदस्य (वडा सदस्य)",
    description: "Advocates for community welfare and participates in outreach programs.",
    phone: "+977 9857011322",
    email: "lalman@devdaha.org.np",
    image: "/images/board/member3.jpg",
  },
  {
    id: "6",
    name: "खुमिसरा न्यौपाने",
    position: "सदस्य",
    description: "Supports infrastructure development and field-level execution.",
    phone: "+977 9857044249",
    email: "khumisara@devdaha.org.np",
    image: "/images/board/member1.jpg",
  },
  {
    id: "7",
    name: "टिका प्रसाद पौडेल",
    position: "सदस्य",
    description: "Dedicated to inclusive participation and community mobilization.",
    phone: "+977 9857090095",
    email: "tika@devdaha.org.np",
    image: "/images/board/member5.jpg",
  },
  {
    id: "8",
    name: "गोमा पौडेल",
    position: "सदस्य",
    description: "Ensures gender representation and women's involvement in governance.",
    phone: "+977 9847424614",
    email: "goma@devdaha.org.np",
    image: "/images/board/member2.jpg",
  },
  {
    id: "9",
    name: "किम बहादुर कामु",
    position: "सदस्य",
    description: "Works towards digital solutions and organizational efficiency.",
    phone: "+977 9864411445",
    email: "kim@devdaha.org.np",
    image: "/images/board/member4.jpg",
  },
  {
    id: "10",
    name: "कुल बहादुर आले",
    position: "सदस्य",
    description: "Experienced in field operations and local engagement initiatives.",
    phone: "+977 9864740465",
    email: "kul@devdaha.org.np",
    image: "/images/board/member7.jpg",
  },
  {
    id: "11",
    name: "मिना नेपाली",
    position: "सदस्य",
    description: "Handles technical planning and maintenance strategy for water systems.",
    phone: "+977 9857112655",
    email: "mina@devdaha.org.np",
    image: "/images/board/member6.jpg",
  }
];