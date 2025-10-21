import { Card, CardContent } from "@/components/ui/card";
import { Award, CheckCircle2, Shield, Users } from "lucide-react";

const Quality = () => {
  const certifications = [
    {
      title: "ISO 9001:2015",
      subtitle: "Quality Management System",
      valid: "06 AUG 2025 - 05 AUG 2028",
    },
    {
      title: "ISO 14001:2015",
      subtitle: "Environmental Management System",
      valid: "06 AUG 2025 - 05 AUG 2028",
    },
    {
      title: "ISO 45001:2018",
      subtitle: "Occupational Health & Safety",
      valid: "06 AUG 2025 - 05 AUG 2028",
    },
  ];

  const qaFunctions = [
    "Review and Approval of Quality Documents (SOPs, BPCRs, Protocols)",
    "Equipment Qualification & Process Validation",
    "Product Release as per Defined Procedures",
    "Deviation Investigation & CAPA Implementation",
    "Internal Audits & Regulatory Compliance",
    "Vendor Qualification & Material Approval",
    "Customer Complaint Handling & Product Recalls",
    "Annual Product Quality Reviews",
  ];

  return (
    <section id="quality" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Quality Assurance</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Committed to the highest standards of quality, safety, and regulatory compliance
          </p>
        </div>

        {/* Quality Policy */}
        <Card className="mb-12 bg-gradient-primary text-white border-0">
          <CardContent className="pt-8 pb-8">
            <div className="flex items-start gap-4 mb-4">
              <Shield className="w-12 h-12 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Quality Policy</h3>
                <p className="text-lg leading-relaxed text-white/90">
                  Quality is defined within GMP, ICH and applicable regulatory and statutory
                  requirements at a reasonable cost and delivery. We are committed to ensuring
                  compliance with these standards. We promote environmental consciousness and
                  awareness, by providing personnel with training to improve their ability to meet
                  standards. Quality is a responsibility of all Vidhatha Life Sciences Private
                  Limited employees.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ISO Certifications */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">ISO Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-6 text-center">
                  <Award className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <h4 className="text-2xl font-bold mb-2">{cert.title}</h4>
                  <p className="text-muted-foreground mb-4">{cert.subtitle}</p>
                  <p className="text-sm text-primary font-semibold">Valid: {cert.valid}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* QA Functions */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8">
            Quality Assurance Functions
          </h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {qaFunctions.map((func, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">{func}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Departments */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">Our Team</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-6xl mx-auto">
            {[
              { dept: "Quality Assurance", count: "02" },
              { dept: "Quality Control", count: "04" },
              { dept: "Warehouse", count: "03" },
              { dept: "Production", count: "30" },
              { dept: "Engineering", count: "11" },
              { dept: "HR", count: "02" },
              { dept: "R & D", count: "03" },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-card transition-all">
                <CardContent className="pt-6 text-center">
                  <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="text-2xl font-bold mb-1">{item.count}</p>
                  <p className="text-xs text-muted-foreground">{item.dept}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-2xl font-bold mt-6">
            Total: <span className="text-primary">55</span> Team Members
          </p>
        </div>
      </div>
    </section>
  );
};

export default Quality;
