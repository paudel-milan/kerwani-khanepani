import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage1 from '@/assets/hero-image-1.jpg';
import heroImage2 from '@/assets/hero-image-2.jpg';
import heroImage3 from '@/assets/hero-image-3.jpg';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const slides = [
    {
      type: 'text',
      title: 'केरवानी खानेपानी उपभोक्ता तथा सरसफाइ संस्था',
      subtitle: 'देवदह १, राजबारी, रूपन्देही',
      background: 'bg-gradient-to-tr from-teal-900 via-teal-700 to-teal-500',
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

  // --- MODIFIED: Auto-play timer now resets to 0 from the last slide ---
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        // If on the last slide, go back to the first, otherwise go to the next
        return prev === slides.length - 1 ? 0 : prev + 1;
      });
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, currentSlide]); // currentSlide dependency is kept to reset timer on manual nav

  // --- MODIFIED: nextSlide stops at the end ---
  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  };

  // --- MODIFIED: prevSlide stops at the beginning ---
  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    // We still call prev/nextSlide, which now have built-in limits
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
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute w-full h-full transition-opacity duration-1000 ease-in-out"
            style={{ opacity: currentSlide === index ? 1 : 0 }}
          >
            {slide.type === 'text' ? (
              <div
                className={`w-full h-full flex flex-col items-center justify-center text-white text-center px-4 ${slide.background}`}
              >
                <div className="animate-slide-in-from-right">
                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold drop-shadow-lg leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl mt-4 opacity-90">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            ) : (
              <>
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#003f5c]/70 via-[#2f4b7c]/30 to-transparent" />
              </>
            )}
          </div>
        ))}
      </div>

      {/* Overlay Content for image-based slides */}
      {slides[currentSlide].type !== 'text' && (
        <div className="absolute inset-0 flex items-center">
          <div
            key={currentSlide}
            className="container mx-auto px-4 sm:px-6 lg:px-12 animate-slide-in-from-right"
          >
            <div className="max-w-4xl text-white space-y-4">
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
                  className="text-sm sm:text-base border-white text-white hover:bg-white hover:text-blue-900 rounded-md shadow-md"
                >
                  <Link to="/about">हाम्रो बारेमा</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- MODIFIED: Navigation Arrows are now disabled at ends --- */}
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-full z-10 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        disabled={currentSlide === slides.length - 1}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-full z-10 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
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