import { Link, useLocation } from "react-router-dom";
import { Leaf, Recycle, BarChart3, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/", icon: Leaf },
  { name: "About", href: "/about", icon: Recycle },
  { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
  { name: "Data Analysis", href: "/data-analysis", icon: BarChart3 },
];

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <Recycle className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">EcoWaste</span>
            </Link>

            <nav className="hidden md:flex space-x-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-eco"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center space-x-2">
              <Link to="/auth/signin">
                <Button variant="outline" size="sm">
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-br from-primary to-primary-glow rounded-md flex items-center justify-center">
                  <Recycle className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-lg font-semibold">EcoWaste</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Smart waste management for a sustainable future. Tracking, managing, and optimizing waste for cleaner communities.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Email: info@ecowaste.com</p>
                <p>Phone: (555) 123-4567</p>
                <p>Address: 123 Green Street, Eco City</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Our Mission</h4>
              <p className="text-sm text-muted-foreground">
                Empowering communities with intelligent waste management solutions that reduce environmental impact and promote sustainable living practices.
              </p>
            </div>
          </div>
          
          <div className="border-t border-border pt-6 mt-6 text-center text-sm text-muted-foreground">
            © 2024 EcoWaste Management System. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}