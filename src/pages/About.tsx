import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Award, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">About AGB STECH</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leading provider of innovative memory product solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                AGB STECH has been at the forefront of memory technology solutions, providing 
                high-quality RAM modules, storage devices, and memory accessories to customers 
                across India. Our commitment to excellence and innovation drives us to deliver 
                products that exceed expectations.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide reliable, high-performance memory solutions that empower businesses 
                and individuals to achieve their technological goals. We strive to be the 
                trusted partner for all memory-related needs.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Why Choose Us</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary" className="w-8 h-8 rounded-full p-0 flex items-center justify-center">
                    ✓
                  </Badge>
                  <span className="text-muted-foreground">Premium quality products</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary" className="w-8 h-8 rounded-full p-0 flex items-center justify-center">
                    ✓
                  </Badge>
                  <span className="text-muted-foreground">Competitive pricing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary" className="w-8 h-8 rounded-full p-0 flex items-center justify-center">
                    ✓
                  </Badge>
                  <span className="text-muted-foreground">Expert technical support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary" className="w-8 h-8 rounded-full p-0 flex items-center justify-center">
                    ✓
                  </Badge>
                  <span className="text-muted-foreground">Fast delivery across India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardHeader>
              <Target className="h-12 w-12 mx-auto text-primary mb-2" />
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                To be India's leading memory solutions provider
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 mx-auto text-primary mb-2" />
              <CardTitle>Team</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Experienced professionals dedicated to excellence
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Award className="h-12 w-12 mx-auto text-primary mb-2" />
              <CardTitle>Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Certified products with warranty assurance
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Zap className="h-12 w-12 mx-auto text-primary mb-2" />
              <CardTitle>Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Latest technology and cutting-edge solutions
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Experience Quality Memory Solutions?
          </h2>
          <p className="text-muted-foreground mb-6">
            Contact us today to discuss your memory requirements and find the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <span className="text-primary font-semibold">📞 +919414131798</span>
            <span className="text-primary font-semibold">✉️ info@abgstech.com</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;