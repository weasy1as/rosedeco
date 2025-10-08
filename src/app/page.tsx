import FeaturedPackages from "./components/FeaturedPackages";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="bg-blush-50">
      <Hero />
      <FeaturedPackages />
    </div>
  );
}
