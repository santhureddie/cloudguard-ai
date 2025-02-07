import { Check, Cloud, Lock, Zap, Shield, DollarSign } from "lucide-react";
import { ButtonPremium } from "../ui/button-premium";

const Features = () => {
  return (
    <div id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Everything you need to secure your cloud
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive cloud security and cost management features designed for modern businesses
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="animate-fade-in opacity-0 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/20 transition-all duration-300"
              style={{ animationDelay: `${0.2 * index}s`, animationFillMode: "forwards" }}
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center">
          <ButtonPremium size="lg">
            Start Securing Your Cloud
          </ButtonPremium>
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    icon: Cloud,
    title: "Real-Time Monitoring",
    description: "Continuous monitoring of your entire cloud infrastructure",
    bullets: [
      "24/7 infrastructure monitoring",
      "Custom alert thresholds",
      "Performance metrics tracking",
    ],
  },
  {
    icon: Shield,
    title: "Security Compliance",
    description: "Ensure compliance with industry standards and regulations",
    bullets: [
      "Automated compliance checks",
      "Security best practices",
      "Audit trail and reporting",
    ],
  },
  {
    icon: Zap,
    title: "Auto-Remediation",
    description: "AI-powered automatic issue resolution",
    bullets: [
      "Instant threat response",
      "Automated security fixes",
      "Custom remediation rules",
    ],
  },
  {
    icon: Lock,
    title: "Access Control",
    description: "Granular control over cloud resource access",
    bullets: [
      "Role-based access control",
      "Multi-factor authentication",
      "Access audit logs",
    ],
  },
  {
    icon: DollarSign,
    title: "Cost Optimization",
    description: "Optimize cloud spending with AI recommendations",
    bullets: [
      "Resource utilization insights",
      "Cost allocation tracking",
      "Budget alerts and forecasting",
    ],
  },
  {
    icon: Cloud,
    title: "Multi-Cloud Support",
    description: "Unified management across cloud providers",
    bullets: [
      "AWS, Azure, and GCP support",
      "Centralized dashboard",
      "Cross-cloud optimization",
    ],
  },
];

export default Features;
