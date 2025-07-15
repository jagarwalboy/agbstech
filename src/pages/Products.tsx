import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Monitor, HardDrive, Cpu, Smartphone, Laptop, Zap } from "lucide-react";

const Products = () => {
  const productCategories = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Desktop RAM",
      description: "High-performance DDR4 & DDR5 RAM modules for desktop computers",
      products: [
        { name: "8GB DDR4 3200MHz", price: "₹2,500", specs: "CL16, 1.35V" },
        { name: "16GB DDR4 3200MHz", price: "₹4,800", specs: "CL16, 1.35V" },
        { name: "32GB DDR5 5600MHz", price: "₹12,000", specs: "CL40, 1.1V" }
      ]
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      title: "Laptop RAM",
      description: "SO-DIMM memory modules for laptops and compact systems",
      products: [
        { name: "8GB DDR4 2666MHz SO-DIMM", price: "₹2,800", specs: "CL19, 1.2V" },
        { name: "16GB DDR4 3200MHz SO-DIMM", price: "₹5,200", specs: "CL22, 1.2V" },
        { name: "32GB DDR5 4800MHz SO-DIMM", price: "₹13,500", specs: "CL40, 1.1V" }
      ]
    },
    {
      icon: <HardDrive className="h-8 w-8" />,
      title: "Storage Solutions",
      description: "SSDs, HDDs, and memory cards for all your storage needs",
      products: [
        { name: "256GB NVMe SSD", price: "₹3,200", specs: "PCIe 3.0, 2000MB/s" },
        { name: "512GB SATA SSD", price: "₹4,500", specs: "SATA III, 560MB/s" },
        { name: "1TB HDD 7200RPM", price: "₹3,800", specs: "SATA III, 64MB Cache" }
      ]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Memory",
      description: "Memory cards and storage solutions for mobile devices",
      products: [
        { name: "64GB MicroSD Card", price: "₹800", specs: "Class 10, UHS-I" },
        { name: "128GB MicroSD Card", price: "₹1,400", specs: "Class 10, UHS-I" },
        { name: "256GB MicroSD Card", price: "₹2,800", specs: "Class 10, UHS-I" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Products</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of memory solutions designed for performance and reliability
          </p>
        </div>

        <div className="grid gap-12">
          {productCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {category.products.map((product, productIndex) => (
                  <Card key={productIndex} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        <Badge variant="secondary" className="text-primary font-bold">
                          {product.price}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{product.specs}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Zap className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">In Stock</span>
                        </div>
                        <Button size="sm" variant="outline">
                          Inquire Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-muted-foreground mb-6">
            Contact our technical team for custom memory solutions tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button>
              Get Custom Quote
            </Button>
            <Button variant="outline">
              Technical Support
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;