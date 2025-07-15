import React from 'react';
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Header() {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/agb-logo.png" 
              alt="AGB STECH" 
              className="h-14 w-auto object-contain dark:brightness-200" 
              style={{ maxWidth: '180px' }}
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-primary">AGB STECH</span>
              <span className="text-xs text-muted-foreground">All Memory Product Solutions</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="/products" className="text-foreground hover:text-primary transition-colors font-medium">
              Products
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact Us
            </a>
          </nav>

          {/* Search */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Input
                type="search"
                placeholder="Please enter keyword"
                className="w-64 pl-4 pr-10"
              />
              <Button size="sm" className="absolute right-1 top-1/2 -translate-y-1/2 h-7 px-2">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}