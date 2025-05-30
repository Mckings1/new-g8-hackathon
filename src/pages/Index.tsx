import React from "react";
import RiskForm from "@/components/RiskForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="mb-8">
            <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
              <div className="text-6xl animate-float">🤖</div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Welcome, I am Awari
          </h1>
          <p className="text-xl md:text-2xl text-green-700 max-w-3xl mx-auto leading-relaxed">
            Your AI assistant for risk assessment. To ensure a smooth and secure
            experience, please input the required information below.
          </p>
        </div>

        <RiskForm />
      </div>
    </div>
  );
};

export default Index;
