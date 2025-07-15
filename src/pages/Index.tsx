import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductCategories } from "@/components/ProductCategories";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FeatureSection } from "@/components/FeatureSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductCategories />
        <ProductShowcase />
        <FeatureSection />
      </main>
    </div>
  );
};

export default Index;
