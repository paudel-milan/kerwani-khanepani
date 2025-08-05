import { FileText, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TapInstallationForm = () => {
  const requirements = [
    "Copy of citizenship certificate",
    "Copy of land ownership certificate",
    "House map/sketch",
    "Recent passport size photograph",
    "Ward recommendation letter"
  ];

  const fees = [
    { type: "New Connection (Household)", fee: "NPR 5025" },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-teal-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-poppins">
              नयाँ जडान आवेदन / New Tap Installation Application
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
              Apply for a new water connection with our easy online application form. 
              Get reliable water supply for your home or business.
            </p>
          </div>
        </div>
      </section>

      {/* Requirements and Fees */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <FileText className="w-5 h-5 text-teal-700" />
                  Required Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-teal-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <FileText className="w-5 h-5 text-teal-700" />
                  Connection Fees
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {fees.map((fee, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                      <span className="text-gray-600">{fee.type}</span>
                      <span className="font-semibold text-teal-700">{fee.fee}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form Images and Download Button */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8 text-gray-800">Download Application Form</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <img
                src="/images/tap/front.jpeg"
                alt="Application Form Front"
                className="w-full rounded-lg shadow-lg object-cover"
              />
              <img
                src="/images/tap/back.jpeg"
                alt="Application Form Back"
                className="w-full rounded-lg shadow-lg object-cover"
              />
            </div>

            <a href="/documents/tap-installation-form.pdf" download>
              <Button className="bg-teal-700 hover:bg-teal-800 text-white shadow-lg" size="lg">
                <Download className="w-5 h-5 mr-2" />
                Download PDF Form
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TapInstallationForm;
