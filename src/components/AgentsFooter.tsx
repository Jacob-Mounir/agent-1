import { Instagram, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const AgentsFooter = () => {
  return (
    <footer className="py-16 bg-black relative overflow-hidden border-t border-elegant-border">
      <div className="absolute inset-0 bg-noise" />
      
      <div className="container px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-playfair text-xl font-medium">Agents & Scouts</span>
            </div>
            
            <p className="text-body text-muted-foreground max-w-md leading-relaxed">
              Empowering cinematic vision through meticulous location management and 
              uncompromising service in the heart of Scandinavia.
            </p>
            
            <div className="flex gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-primary/10"
                onClick={() => window.open('https://instagram.com/agentsandscouts', '_blank')}
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <a 
                href="mailto:hello@agentsandscouts.com"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 hover:bg-primary/10"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-playfair text-lg font-medium">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="link-elegant text-sm text-muted-foreground hover:text-primary">
                  Location Scouting
                </a>
              </li>
              <li>
                <a href="#services" className="link-elegant text-sm text-muted-foreground hover:text-primary">
                  Production Management
                </a>
              </li>
              <li>
                <a href="#services" className="link-elegant text-sm text-muted-foreground hover:text-primary">
                  Logistics Support
                </a>
              </li>
              <li>
                <a href="#services" className="link-elegant text-sm text-muted-foreground hover:text-primary">
                  Studio Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-playfair text-lg font-medium">Contact</h4>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground">
                Stockholm, Sweden
              </li>
              <li className="text-sm text-muted-foreground">
                Gothenburg, Sweden
              </li>
              <li>
                <a href="mailto:hello@agentsandscouts.com" className="link-elegant text-sm text-muted-foreground hover:text-primary">
                  hello@agentsandscouts.com
                </a>
              </li>
              <li>
                <a href="tel:+46700000081" className="link-elegant text-sm text-muted-foreground hover:text-primary">
                  +46 7 000 000 81
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-elegant-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Agents & Scouts. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="link-elegant text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="link-elegant text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AgentsFooter;