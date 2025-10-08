import Contact from "./components/Contact";
import Events from "./components/Events";
import FeaturedPackages from "./components/FeaturedPackages";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="bg-blush-50">
      <Hero />
      <FeaturedPackages />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
}
