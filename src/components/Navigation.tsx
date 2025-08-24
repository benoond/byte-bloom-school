import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Home, User, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-1.5 sm:space-x-2 min-w-0 flex-shrink-0">
            <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold bg-gradient-primary bg-clip-text text-transparent truncate">
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

          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button variant="outline" size="sm" className="hidden lg:inline-flex text-xs sm:text-sm px-2 sm:px-3">
              Sign In
            </Button>
            <Button size="sm" className="hidden lg:inline-flex bg-gradient-primary shadow-button hover:shadow-card-hover transition-all duration-300 text-xs sm:text-sm px-2 sm:px-3">
              Get Started
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-1.5 sm:p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t py-3 sm:py-4 animate-fade-in">
            <nav className="flex flex-col space-y-2 sm:space-y-3">
              <Link
                to="/"
                className={`flex items-center space-x-2 text-sm font-medium px-3 py-3 sm:py-2 rounded-lg transition-all duration-200 hover:bg-muted min-h-[44px] ${
                  isActive("/") ? "text-primary bg-primary/10" : "text-muted-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Home className="h-4 w-4 flex-shrink-0" />
                <span>Home</span>
              </Link>
              <Link
                to="/courses"
                className={`flex items-center space-x-2 text-sm font-medium px-3 py-3 sm:py-2 rounded-lg transition-all duration-200 hover:bg-muted min-h-[44px] ${
                  isActive("/courses") ? "text-primary bg-primary/10" : "text-muted-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <BookOpen className="h-4 w-4 flex-shrink-0" />
                <span>Courses</span>
              </Link>
              <Link
                to="/dashboard"
                className={`flex items-center space-x-2 text-sm font-medium px-3 py-3 sm:py-2 rounded-lg transition-all duration-200 hover:bg-muted min-h-[44px] ${
                  isActive("/dashboard") ? "text-primary bg-primary/10" : "text-muted-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <User className="h-4 w-4 flex-shrink-0" />
                <span>Dashboard</span>
              </Link>
              
              {/* Mobile-only buttons */}
              <div className="pt-2 sm:pt-3 border-t space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start min-h-[44px] text-sm">
                  Sign In
                </Button>
                <Button size="sm" className="w-full bg-gradient-primary shadow-button min-h-[44px] text-sm">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}