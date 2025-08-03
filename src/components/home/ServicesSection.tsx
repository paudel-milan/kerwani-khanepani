import { Droplets, Wrench, Settings, Phone, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: Droplets,
      title: "Water Supply Services",
      nepali: "खानेपानी आपूर्ति सेवा",
      description: "We ensure a continuous and dependable 24/7 water supply, backed by a commitment to quality assurance and regular monitoring.",
      features: ["Clean drinking water", "Continuous supply", "Quality testing", "Pressure maintenance"]
    },
    {
      icon: Wrench,
      title: "New Connection",
      nepali: "नयाँ जडान सेवा",
      description: "Our seamless and efficient process makes it simple to apply for a new water connection and get it installed quickly.",
      features: ["Online application", "Quick setup", "Transparent fees", "Technical support"]
    },
    {
      icon: Settings,
      title: "Maintenance & Repair",
      nepali: "मर्मत सम्भार सेवा",
      description: "We offer prompt maintenance and expert repair solutions for all water infrastructure to ensure reliable service.",
      features: ["Emergency repairs", "Scheduled maintenance", "Leak detection", "Pipeline upgrades"]
    },
    {
      icon: Phone,
      title: "Customer Support",
      nepali: "ग्राहक सेवा",
      description: "Our dedicated support team is available to assist you with all your water-related inquiries and concerns.",
      features: ["24/7 helpline", "Online complaints", "Bill inquiries", "Technical assistance"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section heading with new wording */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 font-poppins">
            हाम्रा सेवाहरू / Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide a wide range of water management services tailored to the needs of our community, ensuring quality and convenience.
          </p>
        </div>

        {/* Services cards grid - New horizontal structure */}
        <div className="grid grid-cols-1 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-100">
              <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 flex-shrink-0 bg-teal-100 rounded-full flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-teal-700" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-semibold text-xl text-gray-800 mb-1">{service.title}</h3>
                  <p className="text-md text-teal-600 font-semibold mb-2">{service.nepali}</p>
                  <p className="text-gray-600 text-sm leading-relaxed hidden sm:block">{service.description}</p>
                </div>
                <ul className="space-y-1 text-sm text-gray-700 w-full md:w-auto md:max-w-[300px]">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call-to-action with new button styles */}
        <div className="text-center space-y-4">
          <p className="text-lg text-gray-600">
            Need a new water connection or have questions about our services? Our team is ready to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-teal-700 hover:bg-teal-800 text-white shadow-lg">
              <Link to="/tap-installation-form">
                <Wrench className="w-5 h-5 mr-2" />
                नयाँ जडान आवेदन / Apply for New Connection
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-teal-600 text-teal-700 hover:bg-teal-50">
              <Link to="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Contact Support
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
