import { Camera, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const AgentsFooter = () => {
  return (
    <footer className="py-16 bg-black relative overflow-hidden border-t border-elegant-border">
      <div className="absolute inset-0 bg-noise" />
      
      <div className="container px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <Camera className="w-6 h-6 text-primary" />
              <span className="font-playfair text-xl font-medium">Agents & Scouts</span>
            </div>
            
            <p className="text-body text-muted-foreground max-w-md leading-relaxed">
              Empowering cinematic vision through meticulous location management and 
              uncompromising service in the heart of Scandinavia.
            </p>
            
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Mail className="w-4 h-4" />
              </Button>
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
                <a href="mailto:hello@agentsandscouts.se" className="link-elegant text-sm text-muted-foreground hover:text-primary">
                  hello@agentsandscouts.se
                </a>
              </li>
              <li>
                <a href="tel:+46812345678" className="link-elegant text-sm text-muted-foreground hover:text-primary">
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
            <a href="#" className="link-elegant text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="link-elegant text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AgentsFooter;