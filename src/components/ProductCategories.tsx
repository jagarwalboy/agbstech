import { Usb, Cpu, HardDrive, MemoryStick, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const categories = [
  {
    icon: Usb,
    title: "USB Flash Drive",
    subtitle: "USB 2.0 | USB 3.0 | USB 3.1",
    description: "Multi-capacity and multi-style",
    color: "text-blue-600"
  },
  {
    icon: Cpu,
    title: "Memory Chips",
    subtitle: "UDP | MDP | FCBGA",
    description: "Store your memory anywhere",
    color: "text-green-600"
  },
  {
    icon: HardDrive,
    title: "Memory Card",
    subtitle: "SD Card | TF Card",
    description: "Take betterpictures andfull HD videoTake betterpictures",
    color: "text-purple-600"
  },
  {
    icon: MemoryStick,
    title: "DDR RAM",
    subtitle: "DDR2 | DDR3 | DDR4 | DDR5",
    description: "Accelerate shipping to improve your work efficiency",
    color: "text-orange-600"
  },
  {
    icon: Database,
    title: "Solid State Drive",
    subtitle: "SATAIII | M.2 NVMe | M.2",
    description: "Boost your",
    color: "text-teal-600"
  }
];

export function ProductCategories() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.title}
              className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:animate-float">
                  <category.icon className="w-8 h-8 text-background" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {category.subtitle}
                </p>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Arrow Button */}
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="group-hover:text-primary transition-colors"
                >
                  →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}