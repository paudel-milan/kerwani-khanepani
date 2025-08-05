import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react'; // Close icon

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [modalImage, setModalImage] = useState(null);

  const galleryItems = [
    { id: 1, title: "General Assembly 2025", category: "general-assembly", image: "/images/gallery/assembly/assembly1.jpg" },
    { id: 2, title: "General Assembly 2025", category: "general-assembly", image: "/images/gallery/assembly/assembly2.jpg" },
    { id: 3, title: "General Assembly 2025", category: "general-assembly", image: "/images/gallery/assembly/assembly3.jpg" },
    { id: 4, title: "General Assembly 2025", category: "general-assembly", image: "/images/gallery/assembly/assembly4.jpg" },
    { id: 5, title: "General Assembly 2025", category: "general-assembly", image: "/images/gallery/assembly/assembly5.jpg" },
    { id: 6, title: "General Assembly 2025", category: "general-assembly", image: "/images/gallery/assembly/assembly6.jpg" },
    { id: 25, title: "General Assembly 2025", category: "general-assembly", image: "/images/gallery/assembly/assembly7.jpg" },
    { id: 26, title: "General Assembly 2025", category: "general-assembly", image: "/images/gallery/assembly/assembly8.jpg" },
    { id: 27, title: "General Assembly 2025", category: "general-assembly", image: "/images/gallery/assembly/assembly9.jpg" },
    { id: 7, title: "Infrastructure", category: "infrastructure", image: "/images/gallery/infrastructure/infrastructure1.jpg" },
    { id: 8, title: "Infrastructure", category: "infrastructure", image: "/images/gallery/infrastructure/infrastructure2.jpg" },
    { id: 9, title: "Infrastructure", category: "infrastructure", image: "/images/gallery/infrastructure/infrastructure3.jpg" },
    { id: 10, title: "Infrastructure", category: "infrastructure", image: "/images/gallery/infrastructure/infrastructure4.jpg" },
    { id: 11, title: "Infrastructure", category: "infrastructure", image: "/images/gallery/infrastructure/infrastructure5.jpg" },
    { id: 12, title: "Infrastructure", category: "infrastructure", image: "/images/gallery/infrastructure/infrastructure6.jpg" },
    { id: 13, title: "Community Events", category: "community", image: "/images/gallery/community/community1.jpg" },
    { id: 14, title: "Community Events", category: "community", image: "/images/gallery/community/community2.jpg" },
    { id: 15, title: "Community Events", category: "community", image: "/images/gallery/community/community3.jpg" },
    { id: 16, title: "Community Events", category: "community", image: "/images/gallery/community/community4.jpg" },
    { id: 17, title: "Community Events", category: "community", image: "/images/gallery/community/community5.jpg" },
    { id: 18, title: "Community Events", category: "community", image: "/images/gallery/community/community6.jpg" },
    { id: 19, title: "Inauguration Ceremony", category: "inauguration", image: "/images/gallery/inaugration/inaugration1.jpg" },
    { id: 20, title: "Inauguration Ceremony", category: "inauguration", image: "/images/gallery/inaugration/inaugration2.jpg" },
    { id: 21, title: "Inauguration Ceremony", category: "inauguration", image: "/images/gallery/inaugration/inaugration3.jpg" },
    { id: 22, title: "Inauguration Ceremony", category: "inauguration", image: "/images/gallery/inaugration/inaugration4.jpg" },
    { id: 23, title: "Inauguration Ceremony", category: "inauguration", image: "/images/gallery/inaugration/inaugration5.jpg" },
    { id: 24, title: "Inauguration Ceremony", category: "inauguration", image: "/images/gallery/inaugration/inaugration6.jpg" },

  ];

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'general-assembly', label: 'General Assembly' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'community', label: 'Community' },
    { id: 'testing', label: 'Testing' },
    { id: 'training', label: 'Training' },
    {id: 'inauguration', label: 'Inauguration' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-teal-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-poppins">
              ग्यालेरी / Gallery
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
              Explore our work through photos showcasing our infrastructure, community engagement, and water management activities.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <Badge
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 text-sm transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-teal-700 text-white hover:bg-teal-800'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </Badge>
            ))}
          </div>

          {/* Gallery Items - New card-based grid with subtle hover effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card 
                key={item.id}
                className="relative group overflow-hidden rounded-lg shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div 
                  className="aspect-video overflow-hidden cursor-pointer"
                  onClick={() => setModalImage(item.image)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <Badge className="mt-2 text-xs capitalize bg-teal-100 text-teal-700 hover:bg-teal-200">
                    {item.category.replace("-", " ")}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setModalImage(null)}
        >
          <div
            className="relative bg-white rounded-lg p-4 max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
              onClick={() => setModalImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <img src={modalImage} alt="Full View" className="w-full h-auto rounded-md" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
