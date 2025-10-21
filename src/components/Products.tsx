import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TestTube, Pill } from "lucide-react";

const Products = () => {
  const products = [
    {
      name: "4-(Methylsulfonyl)phenylacetic acid",
      cas: "90536-66-6",
      api: "Etoricoxib",
    },
    {
      name: "1-(6-Methylpyridin-3-yl)-2-(4-(methylsulfonyl)phenyl)ethanone",
      cas: "221615-75-4",
      api: "Etoricoxib",
    },
    {
      name: "3-Chloro-1-phenylpropane-1-one",
      cas: "936-59-4",
      api: "Dapoxetine",
    },
    {
      name: "Trans-4-Methcyclohexyl isocyanate",
      cas: "32175-00-1",
      api: "Glimepiride",
    },
    {
      name: "Phenethyl Isocyanate",
      cas: "1943-82-4",
      api: "Glimepiride",
    },
    {
      name: "5,8-dihydro naphthol",
      cas: "N/A",
      api: "Nadolol",
    },
    {
      name: "3-Amino-1-adamantanol",
      cas: "702-82-9",
      api: "Vildagliptin",
    },
    {
      name: "(S)-1-(2-chloroacetyl)pyrrolidine-2-carbonitrile",
      cas: "207557-35-5",
      api: "Vildagliptin",
    },
    {
      name: "(-)-O,O'-Dibenzoyl-L-tartaric acid monohydrate",
      cas: "62708-56-9",
      api: "Tapentadol",
    },
    {
      name: "4-Bromo Toluene",
      cas: "N/A",
      api: "General Raw Material",
    },
    {
      name: "4-Bromo Benzaldehyde",
      cas: "N/A",
      api: "General Raw Material",
    },
    {
      name: "Lithium Bromide",
      cas: "N/A",
      api: "General Raw Material",
    },
  ];

  return (
    <section id="products" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            High-quality API Intermediates and Raw Materials for pharmaceutical industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-start gap-3">
                  <TestTube className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                    {product.cas !== "N/A" && (
                      <p className="text-sm text-muted-foreground">CAS: {product.cas}</p>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Pill className="w-4 h-4 text-accent" />
                  <Badge variant="secondary" className="text-xs">
                    {product.api}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
