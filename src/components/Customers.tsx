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
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Valued Customers</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading pharmaceutical companies across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {customers.map((customer, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6 bg-card rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            >
              <Building2 className="w-8 h-8 text-primary flex-shrink-0" />
              <p className="font-medium">{customer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;
