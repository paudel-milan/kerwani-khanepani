import HeroSection from '@/components/home/HeroSection';
import NoticeBoard from '@/components/home/NoticeBoard';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import KeyPersonnel from '@/components/home/KeyPersonnel';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <NoticeBoard />
      <AboutSection />
      <ServicesSection />
      <KeyPersonnel />
    </div>
  );
};

export default Home;