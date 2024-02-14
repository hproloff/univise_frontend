import MainContent from '@/components/AboutPage/MainContent';
import OurStory from '@/components/AboutPage/OurStory';
import Features from '@/components/AboutPage/Features';
import Functionality from '@/components/AboutPage/Functionality';
import Footer from '@/components/AboutPage/Footer';

export default function Page() {
  return (
    <div>
      <head>
        <title>Univise - About</title>
      </head>
      <MainContent />
      <OurStory />
      <Features />
      <Functionality />
      <Footer />
    </div>
  );
}
