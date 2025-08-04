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
    position: "लेखा तथा प्रशासन प्रमुख",
    department: "Administration",
    phone: "9847141208",
    email: "divya@devdahakhanepani.org.np",
    image: "/images/staff/staff1.jpg",
  },
  {
    id: "2",
    name: "विक्रम पौडेल",
    position: "कार्यालय सहायक",
    department: "Administration",
    phone: "9801312404",
    email: "vikram@devdahakhanepani.org.np",
    image: "/images/staff/staff2.jpg",
  },
  {
    id: "3",
    name: "कृष्ण प्रसाद न्यौपाने",
    position: "प्लम्बर प्रमुख",
    department: "Technical",
    phone: "9801312403",
    email: "krishnaprasad@devdahakhanepani.org.np",
    image: "/images/staff/staff3.jpg",
  },
  {
    id: "4",
    name: "जितेन्द्र मल्लाह",
    position: "प्लम्बर",
    department: "Technical",
    phone: "9801312406",
    email: "jitendra@devdahakhanepani.org.np",
    image: "/images/staff/staff4.jpg",
  },
  {
    id: "5",
    name: "राम नारायण केवट",
    position: "अपरेटर",
    department: "Operations",
    phone: "9801312409",
    email: "ramnarayan@devdahakhanepani.org.np",
    image: "/images/staff/staff5.jpg",
  },
  {
    id: "6",
    name: "टिका पराजुली पाण्डे",
    position: "मिटर रिडर",
    department: "Field Services",
    phone: "9801312405",
    email: "tika@devdahakhanepani.org.np",
    image: "/images/staff/staff6.jpg",
  },
  {
    id: "7",
    name: "खिम बहादुर थापा मगर",
    position: "कार्यालय सहयाेगी",
    department: "Support",
    phone: "9801312408",
    email: "khim@devdahakhanepani.org.np",
    image: "/images/staff/staff7.jpg",
  },
];