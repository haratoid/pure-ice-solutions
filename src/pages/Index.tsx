import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import BusinessUnits from "@/components/BusinessUnits";

const Index = () => {
  return (
    <main className="font-['Inter']">
      <Hero />
      <Stats />
      <BusinessUnits />
      <Products />
      <Contact />
    </main>
  );
};

export default Index;