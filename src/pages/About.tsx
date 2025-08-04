import { Target, Eye, Heart, Users, Award, Droplets, Shield, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Upholding the highest standards of honesty and ethical conduct in all our operations."
    },
    {
      icon: Users,
      title: "Community Partnership",
      description: "Building strong relationships with our community and fostering collaborative decision-making."
    },
    {
      icon: Droplets,
      title: "Stewardship",
      description: "Protecting and managing water resources responsibly for the benefit of future generations."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Adopting modern technologies and creative solutions to enhance service delivery and efficiency."
    }
  ];

  const achievements = [
    "Successfully extended our service to over 5,500 households in Devdaha Municipality",
    "Achieved and maintained a service uptime of 99.9% over the last five years",
    "Successfully executed major infrastructure and pipeline upgrades",
    "Launched collaborative programs for community-driven water management",
    "Earned national certification for meeting stringent water quality standards",
    "Implemented advanced digital systems for billing and customer service"
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-teal-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-poppins">
              हाम्रो बारेमा / About Us
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
              We are dedicated to providing Devdaha Municipality with a clean, reliable, and consistent water supply, guided by our commitment to transparency and community involvement.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* About Text */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4 font-poppins">
                  Our Organizational Identity
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Kerwani Water Supply Consumers and Sanitation Association is a vital public utility situated in Devdaha Municipality, Lumbini Province, Nepal. Our core mission is to provide the community with a dependable supply of pure and safe drinking water, a service we have proudly delivered for over 15 years.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our operations are founded on the core tenets of transparency, accountability, and the active participation of our community members. We firmly believe that access to clean water is a fundamental right, and our tireless efforts are focused on ensuring that every household within our service area enjoys this essential resource.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Core Commitments</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Embracing modern technology and continuous infrastructure upgrades</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Maintaining full transparency in all service and financial matters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Ensuring high customer satisfaction through responsive and timely service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Actively protecting our water sources and the surrounding environment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Implementing rigorous quality control and monitoring protocols</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Encouraging community involvement in all strategic decisions</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Mission, Vision, Values */}
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-green-700" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-green-700">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600 leading-relaxed">
                    Our mission is to deliver dependable, safe, and cost-effective drinking water services to all residents of Devdaha Municipality, while simultaneously promoting water conservation and environmental sustainability for a healthier future.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <Eye className="w-8 h-8 text-green-700" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-green-700">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600 leading-relaxed">
                    We aspire to be the leading water utility in our region, celebrated for our exemplary service, pioneering water management techniques, and unwavering dedication to both community welfare and environmental preservation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 font-poppins">
              Our Guiding Principles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The fundamental beliefs that shape our operational ethos and strategic decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-green-700" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-800">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 font-poppins">
                Our Milestones
              </h2>
              <p className="text-lg text-gray-600">
                Key accomplishments that highlight our dedication to the community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-gray-100 rounded-lg shadow-md">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-700" />
                  </div>
                  <p className="text-gray-700">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
