import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1439337153520-7082a56a81f4')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-ice-primary/40" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Pure Ice, Perfectly Delivered
          </h1>
          <p className="text-xl md:text-2xl text-ice-secondary mb-8">
            Premium quality ice for businesses and events. Available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-ice-primary px-8 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-ice-secondary transition-colors">
              Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;