import { useState } from 'react';
import { Phone, Mail, User, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Link } from 'react-router-dom';
import { boardMembers } from '@/data/boardMembers';

const BoardMembers = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isProfileDialogOpen, setIsProfileDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const memberCard = (member) => (
    <Card
      key={member.id}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
    >
      <CardHeader className="p-6 pb-4 text-center">
        <div 
          className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-teal-400 shadow-md group cursor-pointer transition-all duration-300 hover:border-teal-600 hover:shadow-xl"
          onClick={() => setSelectedImage(member.image)}
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardTitle className="text-2xl font-bold text-gray-800">
          {member.name}
        </CardTitle>
        <p className="text-teal-700 font-semibold text-lg">{member.position}</p>
      </CardHeader>
      <CardContent className="p-6 pt-0 flex-grow flex flex-col justify-between text-center">
        <div>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {member.description}
          </p>
          <div className="space-y-2">
            {member.phone && (
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <Phone className="w-4 h-4 text-teal-600" />
                <a href={`tel:${member.phone}`} className="hover:text-teal-700 transition-colors">
                  {member.phone}
                </a>
              </div>
            )}
            {member.email && (
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <Mail className="w-4 h-4 text-teal-600" />
                <a href={`mailto:${member.email}`} className="hover:text-teal-700 transition-colors">
                  {member.email}
                </a>
              </div>
            )}
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="w-full mt-4 border-teal-600 text-teal-700 hover:bg-teal-400"
          onClick={() => {
            setSelectedMember(member);
            setIsProfileDialogOpen(true);
          }}
        >
          <User className="w-4 h-4 mr-2" />
          Full Profile
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-teal-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-poppins">
              कार्यसमिति / Our Leadership
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
              Introducing the dedicated board members who guide our organization and ensure exceptional service for our community.
            </p>
          </div>
        </div>
      </section>

      {/* Board Members Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member) => memberCard(member))}
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default BoardMembers;
