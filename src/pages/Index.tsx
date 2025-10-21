import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Facilities from "@/components/Facilities";
import Products from "@/components/Products";
import Quality from "@/components/Quality";
import Customers from "@/components/Customers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Facilities />
      <Products />
      <Quality />
      <Customers />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
