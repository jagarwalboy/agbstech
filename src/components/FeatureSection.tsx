import { Card } from "@/components/ui/card";

const features = [
  {
    title: "High Performance",
    description: "Cutting-edge technology for maximum speed",
    gradient: "bg-gradient-to-r from-blue-500 to-purple-600"
  },
  {
    title: "Reliability",
    description: "Built to last with premium components",
    gradient: "bg-gradient-to-r from-green-500 to-teal-600"
  },
  {
    title: "Innovation",
    description: "Leading the future of memory technology",
    gradient: "bg-gradient-to-r from-purple-500 to-pink-600"
  }
];

export function FeatureSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            FEATURE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`h-3 ${feature.gradient}`} />
              <div className="p-8 text-center bg-gradient-card">
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}