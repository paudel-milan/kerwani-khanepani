export interface Staff {
  id: string;
  name: string;
  position: string;
  department: string;
  phone?: string;
  email?: string;
  image: string;
  experience?: string;
}

export const staff: Staff[] = [
  {
    id: "1",
    name: "दिब्या बराल",
    position: "व्यवस्थापक",
    department: "Administration",
    phone: "9841617208",
    email: "divyabaralsapkota@gmail.com",
    image: "/images/staff/staff1.jpg",
  },
  {
    id: "2",
    name: "विक्रम पौडेल",
    position: "सह-व्यवस्थापक",
    department: "Administration",
    phone: "9703392404",
    email: "missubikram5@gmail.com",
    image: "/images/staff/staff2.jpg",
  },
  {
    id: "3",
    name: "कृष्ण प्रसाद न्यौपाने",
    position: "प्लम्बर प्रमुख",
    department: "Technical",
    phone: "9703392403",
    email: " krishnapneupane16@gmail.com",
    image: "/images/staff/staff3.jpg",
  },
  {
    id: "4",
    name: "जितेन्द्र मल्लाह",
    position: "प्लम्बर",
    department: "Technical",
    phone: "9703392406",
    email: "anilmallah29@gmail.com",
    image: "/images/staff/staff4.jpg",
  },
  {
    id: "5",
    name: "राम नारायण केवट",
    position: "अपरेटर",
    department: "Operations",
    phone: "9703392401",
    email: "ramnarayankewat77@gmail.com",
    image: "/images/staff/staff5.jpg",
  },
  {
    id: "6",
    name: "टिका पराजुली पाण्डे",
    position: "मिटर रिडर",
    department: "Field Services",
    phone: "9703392405",
    email: " tikaparajulipandey61@gmail.com",
    image: "/images/staff/staff6.jpg",
  },
  {
    id: "7",
    name: "खिम बहादुर थापा मगर",
    position: "कार्यालय सहयाेगी",
    department: "Support",
    phone: "9703392402",
    email: " shyamtmagar618@gmail.com",
    image: "/images/staff/staff7.jpg",
  },
];