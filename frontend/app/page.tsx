import MainContent from '@/components/LandingPage/MainContent';
import OurStory from '@/components/LandingPage/OurStory';
import Features from '@/components/LandingPage/Features';
import Functionality from '@/components/LandingPage/Functionality';
import Footer from '@/components/LandingPage/Footer';

export default function Page() {
  return (
    <div>
      <MainContent />
      <OurStory />
      <Features />
      <Functionality />
      <Footer />
    </div>
  );
}
