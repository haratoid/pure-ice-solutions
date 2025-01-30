import { Factory, Truck, Building2, Briefcase } from "lucide-react";

const BusinessUnits = () => {
  const units = [
    {
      title: "Ice Crystal Factory",
      icon: <Factory className="h-12 w-12 text-ice-primary mb-4" />,
      locations: [
        "Bukit Tinggi - ES Kristal",
        "Payakumbuh - ES Kristal",
        "Batusangkar - ES Kristal",
        "Padang Panjang - ES Kristal",
        "Agam - ES Kristal",
        "Padang - ES Kristal"
      ]
    },
    {
      title: "Ice Block Factory",
      icon: <Building2 className="h-12 w-12 text-ice-primary mb-4" />,
      features: ["Register", "Joint Venture", "Management Fee"]
    },
    {
      title: "Coldchain Transport",
      icon: <Truck className="h-12 w-12 text-ice-primary mb-4" />,
      features: ["Rent", "Delivery"]
    },
    {
      title: "Other Solutions",
      icon: <Briefcase className="h-12 w-12 text-ice-primary mb-4" />,
      features: ["Coldchain Solution", "Consultant", "Pengadaan"]
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-ice-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-ice-primary text-center mb-16 animate-fade-up">
          Our Business Units
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {units.map((unit, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-scale-up"
              style={{
                animationDelay: `${index * 100}ms`,
                boxShadow: '0 4px 20px rgba(14, 165, 233, 0.1)'
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-ice-secondary p-4 rounded-full mb-6 transform transition-transform duration-300 hover:rotate-12">
                  {unit.icon}
                </div>
                <h3 className="text-2xl font-bold text-ice-dark mb-6">
                  {unit.title}
                </h3>
                <ul className="space-y-3 text-ice-text w-full">
                  {unit.locations ? (
                    unit.locations.map((location, idx) => (
                      <li 
                        key={idx} 
                        className="text-sm py-2 px-4 rounded-lg bg-ice-secondary/50 hover:bg-ice-secondary transition-colors duration-200"
                      >
                        {location}
                      </li>
                    ))
                  ) : (
                    unit.features?.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className="text-sm py-2 px-4 rounded-lg bg-ice-secondary/50 hover:bg-ice-secondary transition-colors duration-200"
                      >
                        {feature}
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessUnits;