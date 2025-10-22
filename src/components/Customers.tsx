import { Building2 } from "lucide-react";

const Customers = () => {
  const customers = [
    "Mylan Laboratories Limited",
    "Symed Labs Limited",
    "Sequent Scientific Limited",
    "Vasista Pharma Chem Private Limited",
    "Hyma Synthesis Private Limited",
    "Satyadeeptha Pharmaceuticals Limited",
    "SSV Pharma Private Limited",
    "Brundavan Laboratories Private Limited",
    "Viyash Life Sciences Pvt.Ltd",
    "Agrisol India Private Limited",
    "DVR Pharma LLP",
    "Sriwen Labs",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">
            Our Valued Customers
          </h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            Trusted by leading pharmaceutical companies across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {customers.map((customer, index) => (
            <div
              key={index}
              tabIndex={0}
              className="flex items-center gap-4 p-6 bg-white/90 rounded-xl border border-green-50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-orange-200"
            >
              <Building2 className="w-8 h-8 text-green-600 flex-shrink-0" aria-hidden="true" />
              <p className="font-medium text-slate-900">{customer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;
