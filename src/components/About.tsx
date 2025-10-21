import { Factory, MapPin, Calendar, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import adminBuilding from "@/assets/admin-building.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Our Company</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A premier manufacturer of high-quality API Intermediates with cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <img
              src={adminBuilding}
              alt="Administration Building"
              className="rounded-2xl shadow-elegant w-full"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Company Background</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vidhatha Life Sciences Private Limited began operations in 2022 as a full-fledged
              manufacturing company of API Intermediates. Located at Gundlapalli Village, Maddipadu
              Mandal, Prakasam District, Andhra Pradesh, India.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our manufacturing facility is equipped with 24 reactors of various sizes, with a total
              capacity of 110.20 KL. The facility is registered under Factory License Number
              DCIF-LIC(ATD)/56/2023-JA(1)-IOF, PKM.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardContent className="pt-6">
              <Factory className="w-12 h-12 mb-4 text-primary" />
              <h4 className="text-xl font-semibold mb-2">State-of-the-Art Facility</h4>
              <p className="text-muted-foreground">
                Modern manufacturing plant with advanced equipment and technology
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardContent className="pt-6">
              <MapPin className="w-12 h-12 mb-4 text-primary" />
              <h4 className="text-xl font-semibold mb-2">Strategic Location</h4>
              <p className="text-muted-foreground">
                140 km from Gannavaram Airport, easily accessible within 2 hours
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardContent className="pt-6">
              <Calendar className="w-12 h-12 mb-4 text-primary" />
              <h4 className="text-xl font-semibold mb-2">Established 2022</h4>
              <p className="text-muted-foreground">
                Rapidly growing company with proven track record
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardContent className="pt-6">
              <Shield className="w-12 h-12 mb-4 text-primary" />
              <h4 className="text-xl font-semibold mb-2">GMP Compliant</h4>
              <p className="text-muted-foreground">
                Following ICH Q7 guidelines and Schedule M standards
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
