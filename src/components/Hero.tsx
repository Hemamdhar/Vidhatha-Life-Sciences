import { ArrowRight, Award, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Pharmaceutical Manufacturing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Leading Manufacturer of
              <span className="block bg-gradient-to-r from-accent to-primary-light bg-clip-text text-transparent">
                API Intermediates
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Vidhatha Life Sciences - Excellence in pharmaceutical manufacturing with
              state-of-the-art facilities and ISO certifications
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button size="lg" onClick={() => scrollToSection("about")} className="group">
                Explore Our Company
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <Building2 className="w-12 h-12 mb-3 mx-auto text-accent" />
              <h3 className="text-3xl font-bold mb-2">110.20 KL</h3>
              <p className="text-white/80">Total Manufacturing Capacity</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <Award className="w-12 h-12 mb-3 mx-auto text-accent" />
              <h3 className="text-3xl font-bold mb-2">ISO Certified</h3>
              <p className="text-white/80">9001, 14001 & 45001</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <Users className="w-12 h-12 mb-3 mx-auto text-accent" />
              <h3 className="text-3xl font-bold mb-2">55+</h3>
              <p className="text-white/80">Expert Team Members</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
