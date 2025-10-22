import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Beaker, Package, Microscope, Zap } from "lucide-react";
import qcLab from "@/assets/qc-lab.jpg";
import productionBlock from "@/assets/production-block.jpg";
import warehouse from "@/assets/warehouse.jpg";

const Facilities = () => {
  return (
    // changed: neutral white section so orange/green accents read clearly
    <section id="facilities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* heading: orange -> green gradient to match logo */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">
            Our Facilities
          </h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            World-class infrastructure designed for excellence in pharmaceutical
            manufacturing
          </p>
        </div>

        <Tabs defaultValue="production" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="production">Production</TabsTrigger>
            <TabsTrigger value="quality">Quality Control</TabsTrigger>
            <TabsTrigger value="warehouse">Warehouse</TabsTrigger>
            <TabsTrigger value="utilities">Utilities</TabsTrigger>
          </TabsList>

          <TabsContent value="production" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src={productionBlock}
                  alt="Production Block"
                  className="rounded-2xl shadow-card w-full"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Production Block</h3>
                <p className="text-black/70">
                  Our manufacturing facility is equipped with 110.50 KL capacity,
                  featuring well-equipped reactors of different volumes to suit
                  various batch sizes.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {/* stat cards: emphasize numbers with orange, use light card background */}
                  <Card className="bg-white/90 border border-green-50">
                    <CardContent className="pt-6 text-center">
                      <p className="text-3xl font-bold text-orange-500">16</p>
                      <p className="text-sm text-black/70">SS Reactors</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/90 border border-green-50">
                    <CardContent className="pt-6 text-center">
                      <p className="text-3xl font-bold text-orange-500">8</p>
                      <p className="text-sm text-black/70">GL Reactors</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg">Reaction Capabilities:</h4>
                  <ul className="grid grid-cols-2 gap-2 text-sm text-black/70">
                    <li>• Hydrogenation</li>
                    <li>• Grignard Reaction</li>
                    <li>• Cryogenic Reactions</li>
                    <li>• Oxidation</li>
                    <li>• Halogenations</li>
                    <li>• Suzuki Coupling</li>
                    <li>• Condensation</li>
                    <li>• Carbonylation</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="quality" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Quality Control Laboratory</h3>
                <p className="text-black/70">
                  Modern and well-equipped Quality Control laboratory ensuring our
                  products are pure, safe, and effective. Following GLP & cGMP
                  standards.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Microscope className="w-6 h-6 text-green-600" />
                    <span className="font-medium">2 HPLCs & 1 GC</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Beaker className="w-6 h-6 text-green-600" />
                    <span className="font-medium">UV-vis Spectrophotometer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Microscope className="w-6 h-6 text-green-600" />
                    <span className="font-medium">K.F. Titrator & pH Meter</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Beaker className="w-6 h-6 text-green-600" />
                    <span className="font-medium">Muffle Furnace & Hot Air Oven</span>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={qcLab}
                  alt="Quality Control Lab"
                  className="rounded-2xl shadow-card w-full"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="warehouse" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src={warehouse}
                  alt="Warehouse"
                  className="rounded-2xl shadow-card w-full"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Warehouse Facilities</h3>
                <p className="text-black/70">
                  Warehouse established with appropriate facilities and qualified
                  personnel with established procedures following Schedule M & ICH Q7
                  guidelines.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Package className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-medium">De-dusting Area</p>
                      <p className="text-sm text-black/70">
                        Designated area for raw material reception
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Package className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-medium">Quarantine Area</p>
                      <p className="text-sm text-black/70">
                        Pre-inspection and status labeling
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Package className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-medium">Approved Storage</p>
                      <p className="text-sm text-black/70">
                        Separate facilities for different materials
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Package className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-medium">Dispensing Areas</p>
                      <p className="text-sm text-black/70">
                        Separate areas with exhaust facilities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="utilities" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* utilities: light cards with green icon accents */}
              <Card className="bg-white/90 border border-green-50 hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <Zap className="w-12 h-12 mb-4 text-green-600" />
                  <h4 className="text-xl font-semibold mb-2">Power</h4>
                  <p className="text-black/70 mb-2">APSEB: 500 KVA</p>
                  <p className="text-sm text-black/70">DG Sets: 500 KVA + 380 KVA</p>
                </CardContent>
              </Card>
              <Card className="bg-white/90 border border-green-50 hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <Beaker className="w-12 h-12 mb-4 text-green-600" />
                  <h4 className="text-xl font-semibold mb-2">Cooling</h4>
                  <p className="text-black/70 mb-2">28 TR Chilling</p>
                  <p className="text-sm text-black/70">Cooling Towers: 300 TR & 200 TR</p>
                </CardContent>
              </Card>
              <Card className="bg-white/90 border border-green-50 hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <Zap className="w-12 h-12 mb-4 text-green-600" />
                  <h4 className="text-xl font-semibold mb-2">Air System</h4>
                  <p className="text-black/70 mb-2">Air Compressor</p>
                  <p className="text-sm text-black/70">7 Kg/cm² Pressure</p>
                </CardContent>
              </Card>
              <Card className="bg-white/90 border border-green-50 hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <Beaker className="w-12 h-12 mb-4 text-green-600" />
                  <h4 className="text-xl font-semibold mb-2">Steam</h4>
                  <p className="text-black/70 mb-2">Boiler System</p>
                  <p className="text-sm text-black/70">2 TPH Capacity</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Facilities;
