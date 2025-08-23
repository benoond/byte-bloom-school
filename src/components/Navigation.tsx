import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Home, User, Menu } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              ByteBloom
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link
              to="/courses"
              className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary ${
                isActive("/courses") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <BookOpen className="h-4 w-4" />
              <span>Courses</span>
            </Link>
            <Link
              to="/dashboard"
              className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary ${
                isActive("/dashboard") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <User className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-primary shadow-button hover:shadow-card-hover transition-all duration-300">
              Get Started
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className={`flex items-center space-x-2 text-sm font-medium px-2 py-1 rounded transition-colors ${
                  isActive("/") ? "text-primary bg-primary/10" : "text-muted-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
              <Link
                to="/courses"
                className={`flex items-center space-x-2 text-sm font-medium px-2 py-1 rounded transition-colors ${
                  isActive("/courses") ? "text-primary bg-primary/10" : "text-muted-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <BookOpen className="h-4 w-4" />
                <span>Courses</span>
              </Link>
              <Link
                to="/dashboard"
                className={`flex items-center space-x-2 text-sm font-medium px-2 py-1 rounded transition-colors ${
                  isActive("/dashboard") ? "text-primary bg-primary/10" : "text-muted-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <User className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}