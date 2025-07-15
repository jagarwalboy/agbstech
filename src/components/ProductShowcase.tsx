import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: "UL-EXSSD-23",
    name: "UL-EXSSD-23",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    features: [
      "256GB 512GB 1TB Capacity",
      "TYPE-C 3.1 Port and M.2 NVMe PCIe 2230 interface",
      "Write speed up to 2000MB/s, read speed up to 1000MB/s"
    ],
    price: "₹ Contact for Price"
  },
  {
    id: "UL-EXSSD-22",
    name: "UL-EXSSD-22",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=300&fit=crop",
    features: [
      "128GB 256GB 512GB 1TB 2TB Capacity",
      "TYPE-C 3.1 Port and M.2 NVMe PCIe interface",
      "Write speed up to 1800MB/s, read speed up to 1400MB/s"
    ],
    price: "₹ Contact for Price"
  },
  {
    id: "UL-EXSSD-21",
    name: "UL-EXSSD-21",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    features: [
      "128GB 256GB 512GB 1TB 2TB Capacity",
      "TYPE-C 3.1 Port and M.2 NVMe PCIe interface",
      "Write speed up to 1800MB/s, read speed up to 1400MB/s"
    ],
    price: "₹ Contact for Price"
  }
];

export function ProductShowcase() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            PRODUCT SERVICES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id}
              className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    NEW
                  </Badge>
                </div>

                <div className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-2">
                      <span className="text-primary mt-1">-</span>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <div className="text-sm text-muted-foreground">
                    Contact for pricing
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}