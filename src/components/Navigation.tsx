import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-ice-primary font-bold text-xl">Crystal Clear Ice</div>
          <div className="hidden md:flex space-x-8">
            {[
              { id: "beranda", label: "Beranda" },
              { id: "statistik", label: "Statistik" },
              { id: "unit-bisnis", label: "Unit Bisnis" },
              { id: "produk", label: "Produk" },
              { id: "kontak", label: "Kontak" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-ice-text hover:text-ice-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-ice-primary" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;