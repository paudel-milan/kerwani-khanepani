import { CheckCircle, Users, Droplets, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const features = [
    {
      icon: Droplets,
      title: "24/7 Water Supply",
      description: "Continuous and reliable water supply to all connected households"
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Regular quality testing ensures safe and clean drinking water"
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Serving the community with transparency and dedication"
    }
  ];

  const stats = [
    { number: "5500+", label: "Connected Households" },
    { number: "20+", label: "Years of Service" },
    { number: "99.9%", label: "Service Reliability" },
    { number: "24/7", label: "Customer Support" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 font-poppins">
                हाम्रो बारेमा / About Us
              </h2>
              {/* Description in English */}
              <p className="text-lg text-gray-600 leading-relaxed">
                Kerwani Water Supply Consumers and Sanitation Association is a public institution located in Devdaha Municipality, 
                Lumbini Province, Nepal. We are dedicated to continuously providing pure, safe, and 
                reliable drinking water services to the residents of this area.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600">
                Since its establishment, the Sansthan has aimed to improve the health and living 
                standards of the community. We are fully committed to:
              </p>
              <ul className="space-y-2">
                {/* Bullet points in English */}
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span>Technical improvement and modernization</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span>Transparency in service delivery</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span>Customer satisfaction and community engagement</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span>Water source conservation and quality control</span>
                </li>
              </ul>
            </div>

            <Button asChild size="lg" className="bg-teal-700 hover:bg-teal-800 text-white shadow-lg">
              <Link to="/about">
                थप पढ्नुहोस् / Read More
              </Link>
            </Button>
          </div>

          {/* Features and Stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-2 bg-teal-100 rounded-lg">
                      <feature.icon className="w-6 h-6 text-teal-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-gray-800">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-100 rounded-lg shadow-md">
                  <div className="text-2xl lg:text-3xl font-bold text-teal-700 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
