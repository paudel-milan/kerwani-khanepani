import { useState } from 'react';
import { Phone, Mail, User, Clock, MapPin, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { staff } from '@/data/staff';

const Staff = () => {
  const departments = [...new Set(staff.map(member => member.department))];
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-teal-700  text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-poppins">
              कर्मचारी / Our Staff
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
              Meet the dedicated professionals who work tirelessly to deliver excellent water management services to our community.
            </p>
          </div>
        </div>
      </section>

      {/* Staff by Department */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {departments.map((department) => (
            <div key={department} className="mb-16">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8 text-center font-poppins">
                {department} Department
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {staff
                  .filter(member => member.department === department)
                  .map((member) => (
                    <Card
                      key={member.id}
                      className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
                    >
                      <CardHeader className="p-6 pb-4 text-center">
                        <div 
                          className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#008080] shadow-md group cursor-pointer transition-all duration-300 hover:border-teal-600 hover:shadow-xl"
                          onClick={() => setSelectedImage(member.image)}
                          title="Click to enlarge"
                        >
                          {member.image ? (
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          ) : (
                            <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                              <User className="w-12 h-12 text-gray-400" />
                            </div>
                          )}
                        </div>
                        <CardTitle className="text-2xl font-bold text-gray-800">
                          {member.name}
                        </CardTitle>
                        <p className="text-[#008080] font-semibold text-lg">{member.position}</p>
                        <Badge variant="secondary" className="mx-auto mt-2 bg-[#e0f2f2] text-[#008080] hover:bg-[#b3d9d9]">
                          {member.department}
                        </Badge>
                      </CardHeader>
                      <CardContent className="p-6 pt-0 flex-grow flex flex-col justify-between text-center">
                        <div className="space-y-3">
                          {member.experience && (
                            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                              <Clock className="w-4 h-4 text-[#008080]" />
                              <span>{member.experience} of experience</span>
                            </div>
                          )}
                          {member.phone && (
                            <div className="flex items-center justify-center gap-2 text-sm">
                              <Phone className="w-4 h-4 text-[#008080]" />
                              <a
                                href={`tel:${member.phone}`}
                                className="text-gray-600 hover:text-[#008080] transition-colors"
                              >
                                {member.phone}
                              </a>
                            </div>
                          )}
                          {member.email && (
                            <div className="flex items-center justify-center gap-2 text-sm">
                              <Mail className="w-4 h-4 text-[#008080]" />
                              <a
                                href={`mailto:${member.email}`}
                                className="text-gray-600 hover:text-[#008080] transition-colors break-all"
                              >
                                {member.email}
                              </a>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for Enlarged Image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden max-w-lg max-h-screen w-full md:max-w-xl md:max-h-[90vh]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="p-4 flex items-center justify-center">
              <img
                src={selectedImage}
                alt="Enlarged staff"
                className="object-contain max-h-[80vh] md:max-h-[85vh] w-auto rounded-md"
              />
            </div>
          </div>
        </div>
      )}

      {/* Contact Staff Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 font-poppins">
                Office Information
              </h2>
              <p className="text-lg text-gray-600">
                Visit our office or contact our staff for any water-related services and inquiries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-800">
                    <MapPin className="w-5 h-5 text-[#008080]" />
                    Office Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-gray-600">
                    Devdaha-7, Rupandehi<br />
                    Lumbini Province, Nepal
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-800">
                    <Clock className="w-5 h-5 text-[#008080]" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-gray-600">
                    Sunday - Friday: 10:00 AM - 5:00 PM<br />
                    Saturday: Closed
                  </p>
                  <p className="text-sm text-red-600 font-medium">
                    Emergency services available 24/7
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Staff;
