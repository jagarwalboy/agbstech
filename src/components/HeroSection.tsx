import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/placeholder.svg"
        >
          <source src="/agb stech.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/20 hover:bg-background/40 text-background border border-background/30"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/20 hover:bg-background/40 text-background border border-background/30"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Content - Left Side Features */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10 space-y-8">
        {/* Quick Response Feature */}
        <div className="bg-background/95 backdrop-blur-sm rounded-lg p-6 max-w-xs shadow-card animate-fade-in">
          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
            <div className="w-6 h-6 bg-background rounded-full" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Quick Response</h3>
          <p className="text-sm text-muted-foreground mb-4">
            We offer a 7x24 hour response time, 24/7 Serving you anytime, anywhere
          </p>
          <Button variant="outline" size="sm">Contact us</Button>
        </div>

        {/* Innovation Feature */}
        <div className="bg-background/95 backdrop-blur-sm rounded-lg p-6 max-w-xs shadow-card animate-fade-in">
          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
            <div className="w-6 h-6 bg-background rounded-full" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Persist in innovation</h3>
          <p className="text-sm text-muted-foreground mb-4">
            By persistently exploring and innovating, keeping up with the times
          </p>
          <Button variant="outline" size="sm">About Us</Button>
        </div>
      </div>

      {/* Content - Right Side Feature */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10">
        <div className="bg-background/95 backdrop-blur-sm rounded-lg p-6 max-w-xs shadow-card animate-fade-in">
          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
            <div className="w-6 h-6 bg-background rounded-full" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Integrity First</h3>
          <p className="text-sm text-muted-foreground mb-4">
            The business philosophy of putting people first and pursuing transcendence
          </p>
          <Button variant="outline" size="sm">Where to buy</Button>
        </div>
      </div>
    </section>
  );
}