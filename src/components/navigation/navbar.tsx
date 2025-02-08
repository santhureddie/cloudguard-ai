
import { useState } from "react";
import { ButtonPremium } from "../ui/button-premium";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-primary">
              CloudGuard AI
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <button
                onClick={() => scrollToSection('features')}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Pricing
              </button>
              <ButtonPremium 
                variant="outline" 
                size="sm"
                className="text-primary hover:text-primary/90 font-medium"
              >
                Sign In
              </ButtonPremium>
              <ButtonPremium 
                size="sm"
                className="text-white hover:text-white/90"
              >
                Get Started
              </ButtonPremium>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => {
                scrollToSection('features');
                setIsOpen(false);
              }}
              className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Features
            </button>
            <button
              onClick={() => {
                scrollToSection('pricing');
                setIsOpen(false);
              }}
              className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Pricing
            </button>
            <div className="pt-4 space-y-2">
              <ButtonPremium 
                variant="outline" 
                className="w-full text-primary hover:text-primary/90 font-medium"
              >
                Sign In
              </ButtonPremium>
              <ButtonPremium 
                className="w-full text-white hover:text-white/90"
              >
                Get Started
              </ButtonPremium>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
