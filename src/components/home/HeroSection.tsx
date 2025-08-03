import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage1 from '@/assets/hero-image-1.jpg'; // Replace with your new hero images
import heroImage2 from '@/assets/hero-image-2.jpg';
import heroImage3 from '@/assets/hero-image-3.jpg';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroImage1,
      title: 'सफा र पहुँचयुक्त खानेपानी सबैका लागि',
      subtitle: 'Clean and Accessible Drinking Water for All',
      description:
        'We are committed to providing eco-friendly and equitable water supply solutions to every household.',
    },
    {
      image: heroImage2,
      title: 'स्थायी र नविनतम प्रविधिमा आधारित सेवा',
      subtitle: 'Sustainable Water Services with Innovative Tech',
      description:
        'Empowering our community through modern infrastructure and environmentally conscious solutions.',
    },
    {
      image: heroImage3,
      title: 'हामीसँग सुरक्षित र भरपर्दो सेवा',
      subtitle: 'Safe and Dependable with Us',
      description:
        'From purification to distribution – your safety is our priority, every step of the way.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[620px] lg:h-[720px] overflow-hidden font-sans">
      {/* Carousel */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#003f5c]/70 via-[#2f4b7c]/30 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl text-white space-y-4 animate-fade-in">
            <h1 className="text-3xl lg:text-5xl font-extrabold tracking-wide leading-snug drop-shadow-md">
              {slides[currentSlide].title}
            </h1>
            <h2 className="text-lg lg:text-2xl font-semibold opacity-90">
              {slides[currentSlide].subtitle}
            </h2>
            <p className="text-base lg:text-lg opacity-80 leading-relaxed max-w-2xl">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-blue-700 hover:bg-blue-800 text-white rounded-md shadow-md"
              >
                <Link to="/tap-installation-form">नयाँ जडान आवेदन</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-green-700 hover:bg-white hover:text-blue-900 rounded-md shadow-md"
              >
                <Link to="/about">हाम्रो बारेमा</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-full"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-full"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Quick contact buttons */}
      <div className="absolute bottom-5 right-5 flex gap-2">
        <a
          href="tel:+97771577590"
          className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">Call Us</span>
        </a>
        <a
          href="mailto:kerwani.dwssa@gmail.com"
          className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full shadow"
        >
          <Mail className="w-4 h-4" />
          <span className="hidden sm:inline">Email</span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
