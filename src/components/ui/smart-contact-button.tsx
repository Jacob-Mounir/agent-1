import { ReactNode } from "react";
import { useDeviceType } from "@/hooks/useDeviceType";
import { Button } from "./button";

interface SmartContactButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  email?: string;
  subject?: string;
}

const SmartContactButton = ({ 
  children, 
  className = "", 
  variant = "default",
  email = "hello@agentsandscouts.com",
  subject
}: SmartContactButtonProps) => {
  const deviceType = useDeviceType();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const mailtoUrl = `mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;

  if (deviceType === "mobile") {
    return (
      <a href={mailtoUrl} className={className}>
        {children}
      </a>
    );
  }

  // Desktop - scroll to contact form
  const isLuxuryButton = className.includes('button-luxury');
  const buttonVariant = isLuxuryButton ? undefined : variant;
  
  return (
    <Button 
      onClick={scrollToContact}
      variant={buttonVariant}
      className={className.replace(/inline-flex.*?py-2/, "")} // Remove inline styles, keep custom classes
    >
      {children}
    </Button>
  );
};

export default SmartContactButton;