
import { Check } from "lucide-react";
import { ButtonPremium } from "../ui/button-premium";

const Pricing = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`animate-fade-in opacity-0 rounded-2xl p-8 ${
                plan.featured
                  ? "bg-primary text-white border-4 border-primary/20 shadow-xl transform hover:-translate-y-1"
                  : "bg-white border-2 border-gray-100 hover:border-primary/20"
              } transition-all duration-300`}
              style={{ animationDelay: `${0.2 * index}s`, animationFillMode: "forwards" }}
            >
              <div className="mb-8">
                <h3 className={`text-xl font-semibold mb-2 ${plan.featured ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline">
                  <span className={`text-4xl font-bold ${plan.featured ? "text-white" : "text-gray-900"}`}>
                    ${plan.price}
                  </span>
                  <span className={`ml-2 ${plan.featured ? "text-white/80" : "text-gray-600"}`}>/month</span>
                </div>
                <p className={`mt-4 ${plan.featured ? "text-white/80" : "text-gray-600"}`}>{plan.description}</p>
              </div>
              <ul className="mb-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className={`w-5 h-5 mr-3 ${plan.featured ? "text-white" : "text-green-500"}`} />
                    <span className={plan.featured ? "text-white" : "text-gray-600"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <ButtonPremium
                variant={plan.featured ? "default" : "outline"}
                className={`w-full justify-center ${
                  plan.featured
                    ? "bg-white text-primary hover:bg-gray-50"
                    : ""
                }`}
              >
                {plan.buttonText}
              </ButtonPremium>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const plans = [
  {
    name: "Starter",
    price: "0",
    description: "Perfect for trying out CloudGuard AI",
    buttonText: "Start Free Trial",
    features: [
      "Up to 3 cloud resources",
      "Basic monitoring",
      "Email support",
      "7-day data retention",
    ],
  },
  {
    name: "Pro",
    price: "99",
    description: "Ideal for growing businesses",
    buttonText: "Get Started",
    featured: true,
    features: [
      "Unlimited cloud resources",
      "Advanced monitoring",
      "Auto-remediation",
      "24/7 priority support",
      "30-day data retention",
      "Custom alerts",
    ],
  },
  {
    name: "Enterprise",
    price: "499",
    description: "For large-scale operations",
    buttonText: "Contact Sales",
    features: [
      "Everything in Pro",
      "Custom deployment",
      "Dedicated support team",
      "90-day data retention",
      "SLA guarantee",
      "Custom integrations",
    ],
  },
];

export default Pricing;
