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
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-ice-primary text-center mb-12">
          Our Business Units
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {units.map((unit, index) => (
            <div 
              key={index}
              className="bg-ice-secondary rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                {unit.icon}
                <h3 className="text-xl font-bold text-ice-primary mb-4">
                  {unit.title}
                </h3>
                <ul className="space-y-2 text-ice-text">
                  {unit.locations ? (
                    unit.locations.map((location, idx) => (
                      <li key={idx} className="text-sm">{location}</li>
                    ))
                  ) : (
                    unit.features?.map((feature, idx) => (
                      <li key={idx} className="text-sm">{feature}</li>
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