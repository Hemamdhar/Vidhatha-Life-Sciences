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
      cas: "27673-48-9",
      api: "Nadolol",
    },
    {
      name: "4-Bromo Toluene",
      cas: "106-38-7",
      api: "General Raw Material",
    },
    {
      name: "4-Bromo Benzaldehyde",
      cas: "1122-91-4",
      api: "General Raw Material",
    },
    {
      name: "Lithium Bromide",
      cas: "7550-35-8",
      api: "General Raw Material",
    },
    {
      name: "Lithium Hydroxide mono hydrate",
      cas: "1310-66-3",
      api: "General Raw Material",
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
      api: "Tapentadol and General raw material",
    },
    {
      name: "Phenyl hydrazine hydrochloride",
      cas: "59-88-1",
      api: "General Raw Material",
    },
    {
      name: "Pyridine Hydrobromide",
      cas: "18820-82-1",
      api: "General Raw Material",
    },
    {
      name: "4-Chlorophenylhydrazine Hydrochloride",
      cas: "1073-70-7",
      api: "Caprafen KSM",
    },
  ];

  return (
    // changed: neutral white background to let orange/green accents pop
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* heading: orange -> green gradient to match logo */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">
            Our Products
          </h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            High-quality API Intermediates and Raw Materials for pharmaceutical industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            // changed: light card with green border, orange test-tube icon and green pill/badge accents
            <Card
              key={index}
              className="bg-white/90 border border-green-50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-start gap-3">
                  {/* chemistry/test-tube icon in orange */}
                  <TestTube className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2 text-black">{product.name}</CardTitle>
                    {product.cas !== "N/A" && (
                      <p className="text-sm text-black/70">CAS: {product.cas}</p>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  {/* pill/icon in green */}
                  <Pill className="w-4 h-4 text-green-600" />
                  <Badge className="text-xs bg-green-50 text-green-700 border border-green-100">
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
