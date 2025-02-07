
import { ButtonPremium } from "../ui/button-premium";
import { Shield, Activity, DollarSign } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-[120px] pb-[80px] lg:pt-[150px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-blue-50 text-primary mb-4">
              <Shield className="w-4 h-4 mr-2" /> AI-Powered Cloud Security
            </span>
          </div>
          <h1 className="animate-fade-in opacity-0 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            Secure & Optimize Your Cloud Infrastructure
          </h1>
          <p className="animate-fade-in opacity-0 text-xl text-gray-600 mb-8 max-w-2xl" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            Monitor, detect, and auto-remediate cloud issues in real-time. Perfect for growing businesses.
          </p>
          <div className="animate-fade-in opacity-0 flex flex-col sm:flex-row gap-4 mb-12" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
            <ButtonPremium size="lg">
              Get Started Free
            </ButtonPremium>
            <ButtonPremium variant="outline" size="lg">
              Schedule Demo
            </ButtonPremium>
          </div>
          <div className="animate-fade-in opacity-0 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
            <div className="flex flex-col items-center p-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Real-Time Monitoring</h3>
              <p className="text-gray-600 text-sm text-center">24/7 cloud infrastructure monitoring with instant alerts</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Auto-Remediation</h3>
              <p className="text-gray-600 text-sm text-center">AI-powered fixes for common security issues</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Cost Optimization</h3>
              <p className="text-gray-600 text-sm text-center">Reduce cloud costs with smart resource management</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
