import { ArrowRight, Award, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-white">
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-slate-900">
          {/* small centered logo for simplicity */}
          <img src={logo} alt="Vidhatha Life Sciences" className="mx-auto h-24 mb-6" />
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Leading Manufacturer of
              {/* subtle headline gradient (orange -> green) */}
              <span className="block bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">
                API Intermediates
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-black/75 max-w-2xl mx-auto">
              Vidhatha Life Sciences — excellence in pharmaceutical manufacturing with state-of-the-art facilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button
                size="lg"
                onClick={() => scrollToSection("about")}
                className="group bg-orange-500 text-white px-5 py-2.5 rounded-md shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-200 transition"
                aria-label="Explore our company"
              >
                Explore Our Company
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform text-white" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="bg-transparent border border-green-600 text-green-700 px-5 py-2.5 rounded-md hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-200 transition"
                aria-label="Contact us"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Stats (simple cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="rounded-xl p-6 border border-green-100 transition-all">
              <Building2 className="w-12 h-12 mb-3 mx-auto text-green-600" aria-hidden="true" />
              <h3 className="text-2xl font-bold mb-2 text-orange-500">110.20 KL</h3>
              <p className="text-slate-700">Total Manufacturing Capacity</p>
            </div>
            <div className="rounded-xl p-6 border border-green-100 transition-all">
              <Award className="w-12 h-12 mb-3 mx-auto text-green-600" aria-hidden="true" />
              <h3 className="text-2xl font-bold mb-2 text-orange-500">ISO Certified</h3>
              <p className="text-slate-700">9001, 14001 & 45001</p>
            </div>
            <div className="rounded-xl p-6 border border-green-100 transition-all">
              <Users className="w-12 h-12 mb-3 mx-auto text-green-600" aria-hidden="true" />
              <h3 className="text-2xl font-bold mb-2 text-orange-500">55+</h3>
              <p className="text-slate-700">Expert Team Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
