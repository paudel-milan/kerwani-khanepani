import { useState } from 'react';
import { Phone, Mail, User, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Link } from 'react-router-dom';
import { boardMembers } from '@/data/boardMembers';

const KeyPersonnel = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isProfileDialogOpen, setIsProfileDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const keyPersonnel = [
    {
      id: "1",
      name: "Mr. Guman Singh Kunwar",
      position: "Chairman",
      phone: "+977 9856030725",
      image: "/images/personnel/chairman.jpg",
      description: "A visionary leader committed to equitable community development and clean water access."
    },
    {
      id: "2",
      name: "Mrs. Anisha Paudel",
      position: "Vice Chairman",
      phone: "+977 9869928121",
      email: "anisha12kk@gmail.com",
      image: "/images/personnel/vice-chairman.jpg",
      description: "Passionate about sustainability and local engagement with a focus on water conservation."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 font-poppins">
            मुख्य व्यक्तित्व / Key Personnel
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our dedicated leadership team committed to serving the community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
          {keyPersonnel.map((person) => (
            <Card key={person.id} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                {/* Profile image with a clean teal border */}
                <div
                  className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-teal-200 shadow-md group cursor-pointer transition-all duration-300 hover:border-teal-600 hover:shadow-xl"
                  onClick={() => setSelectedImage(person.image)}
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{person.name}</h3>
                <p className="text-teal-700 font-semibold">{person.position}</p>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {person.description}
                </p>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4 text-teal-600" />
                  <a href={`tel:${person.phone}`} className="hover:text-teal-700 transition-colors">
                    {person.phone}
                  </a>
                </div>
                {/* Outlined button consistent with the services section */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-teal-600 text-teal-700 hover:bg-teal-400"
                  onClick={() => {
                    setSelectedMember(person);
                    setIsProfileDialogOpen(true);
                  }}
                >
                  <User className="w-4 h-4 mr-2" />
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          {/* Main button with solid teal style */}
          <Button asChild size="lg" className="bg-teal-700 hover:bg-teal-800 text-white shadow-lg">
            <Link to="/board-members">
              <User className="w-5 h-5 mr-2" />
              सम्पूर्ण कार्यसमिति / View All Board Members
            </Link>
          </Button>
        </div>
      </div>

      {/* Profile Dialog Box */}
      <Dialog open={isProfileDialogOpen} onOpenChange={setIsProfileDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          {selectedMember && (
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-teal-600">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-gray-800">
                  {selectedMember.name}
                </DialogTitle>
                <DialogDescription className="text-teal-700 font-semibold text-base">
                  {selectedMember.position}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 text-sm text-gray-600">
                <p className="mb-4">{selectedMember.description}</p>
                <div className="space-y-2">
                  {selectedMember.phone && (
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4 text-teal-600" />
                      <a href={`tel:${selectedMember.phone}`} className="hover:text-teal-700 transition-colors">
                        {selectedMember.phone}
                      </a>
                    </div>
                  )}
                  {selectedMember.email && (
                    <div className="flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4 text-teal-600" />
                      <a href={`mailto:${selectedMember.email}`} className="hover:text-teal-700 transition-colors">
                        {selectedMember.email}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Full-Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative bg-white rounded-lg shadow-xl overflow-hidden max-w-5xl max-h-screen w-full">
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
                alt="Full view"
                className="object-contain max-h-[90vh] w-auto rounded-md"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default KeyPersonnel;
