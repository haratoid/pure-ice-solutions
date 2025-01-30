import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Products from "@/components/Products";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="font-['Inter']">
      <Hero />
      <Stats />
      <Products />
      <Contact />
    </main>
  );
};

export default Index;