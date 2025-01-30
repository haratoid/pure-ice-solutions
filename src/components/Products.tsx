import { Check } from "lucide-react";

const Products = () => {
  const products = [
    {
      title: "Bulk Ice Supply",
      description: "Large quantities for commercial use",
      features: ["Food-grade quality", "Custom quantities", "Wholesale pricing"],
    },
    {
      title: "Premium Cocktail Ice",
      description: "Crystal clear cubes for upscale venues",
      features: ["Perfect clarity", "Slow melting", "Custom sizes"],
    },
    {
      title: "Event Services",
      description: "Special occasions and corporate events",
      features: ["Ice sculptures", "On-site delivery", "24/7 support"],
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-ice-primary text-center mb-12">
          Our Products & Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-ice-secondary rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-ice-primary mb-4">
                {product.title}
              </h3>
              <p className="text-ice-text mb-6">{product.description}</p>
              <ul className="space-y-3">
                {product.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-ice-primary mr-2" />
                    <span className="text-ice-text">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;