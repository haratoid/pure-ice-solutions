import { Factory, Truck, Award } from "lucide-react";

const Stats = () => {
  return (
    <div id="statistik" className="bg-ice-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <Factory className="h-12 w-12 text-ice-primary mb-4" />
            <h3 className="text-4xl font-bold text-ice-primary mb-2">50,000+</h3>
            <p className="text-ice-text">Ton Es Per Tahun</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Truck className="h-12 w-12 text-ice-primary mb-4" />
            <h3 className="text-4xl font-bold text-ice-primary mb-2">24/7</h3>
            <p className="text-ice-text">Layanan Pengiriman</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Award className="h-12 w-12 text-ice-primary mb-4" />
            <h3 className="text-4xl font-bold text-ice-primary mb-2">15+</h3>
            <p className="text-ice-text">Tahun Pengalaman</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;