import { useState, useEffect } from "react";

export type DeviceType = "desktop" | "mobile";

export const useDeviceType = (): DeviceType => {
  const [deviceType, setDeviceType] = useState<DeviceType>("desktop");

  useEffect(() => {
    const checkDeviceType = () => {
      // Check for touch capability and screen size
      const isMobile = 
        window.matchMedia("(max-width: 768px)").matches ||
        window.matchMedia("(pointer: coarse)").matches ||
        "ontouchstart" in window;
      
      setDeviceType(isMobile ? "mobile" : "desktop");
    };

    checkDeviceType();

    // Listen for resize events
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleChange = () => checkDeviceType();
    
    mediaQuery.addEventListener("change", handleChange);
    window.addEventListener("resize", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      window.removeEventListener("resize", handleChange);
    };
  }, []);

  return deviceType;
};