import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import BusinessUnits from "@/components/BusinessUnits";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <main className="font-['Inter']">
      <Navigation />
      <Hero />
      <Stats />
      <BusinessUnits />
      <Products />
      <Contact />
    </main>
  );
};

export default Index;