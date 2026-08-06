import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Accessories from './components/Accessories';
import Featured from './components/Featured';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import Delivery from './components/Delivery';
import Reviews from './components/Reviews';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import CursorGlow from './components/CursorGlow';

function App() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <Hero />
      <Accessories />
      <Featured />
      <WhyChooseUs />
      <HowItWorks />
      <Delivery />
      <Reviews />
      <ContactCTA />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
