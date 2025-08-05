import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage1 from '@/assets/hero-image-1.jpg';
import heroImage2 from '@/assets/hero-image-2.jpg';
import heroImage3 from '@/assets/hero-image-3.jpg';
import heroImage4 from '@/assets/hero-image-4.jpg';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const slides = [
    {
      image: heroImage4, // No content slide (visual-only)
    },
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
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 50) prevSlide();
    else if (deltaX < -50) nextSlide();
    touchStartX.current = null;
  };

  return (
    <section
      className="relative h-[50vh] sm:h-[65vh] md:h-[80vh] lg:h-screen overflow-hidden font-sans"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Carousel Container */}
      <div className="relative w-full h-full overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out h-full"
          style={{
            width: `${slides.length * 100}%`,
            transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 relative"
              style={{ width: `${100 / slides.length}%` }}
            >
              <img
                src={slide.image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#003f5c]/70 via-[#2f4b7c]/30 to-transparent" />
            </div>
          ))}
        </div>
      </div>

      {/* Overlay Content — Hide if no title */}
      {slides[currentSlide].title && (
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-4xl text-white space-y-4 animate-fade-in">
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide leading-snug drop-shadow-md">
                {slides[currentSlide].title}
              </h1>
              <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold opacity-90">
                {slides[currentSlide].subtitle}
              </h2>
              <p className="text-xs sm:text-base md:text-lg opacity-80 leading-relaxed max-w-2xl">
                {slides[currentSlide].description}
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="text-sm sm:text-base bg-blue-700 hover:bg-blue-800 text-white rounded-md shadow-md"
                >
                  <Link to="/tap-installation-form">नयाँ जडान आवेदन</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-sm sm:text-base border-white text-green-700 hover:bg-white hover:text-blue-900 rounded-md shadow-md"
                >
                  <Link to="/about">हाम्रो बारेमा</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-full z-10"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-full z-10"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Contact Buttons */}
      <div className="absolute bottom-4 right-4 flex gap-2 z-10">
        <a
          href="tel:+97771577590"
          className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow text-xs sm:text-sm"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">Call Us</span>
        </a>
        <a
          href="mailto:kerwani.dwssa@gmail.com"
          className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full shadow text-xs sm:text-sm"
        >
          <Mail className="w-4 h-4" />
          <span className="hidden sm:inline">Email</span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
