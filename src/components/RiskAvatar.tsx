import React from "react";

interface RiskAvatarProps {
  riskLevel: "low" | "medium" | "high";
  className?: string;
}

const RiskAvatar: React.FC<RiskAvatarProps> = ({
  riskLevel,
  className = "",
}) => {
  const getAvatarContent = () => {
    switch (riskLevel) {
      case "low":
        return (
          <div
            className={`w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg ${className}`}
          >
            <div className="text-white text-6xl animate-float">🛡️</div>
          </div>
        );
      case "medium":
        return (
          <div
            className={`w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg ${className}`}
          >
            <div className="text-white text-6xl animate-float">⚠️</div>
          </div>
        );
      case "high":
        return (
          <div
            className={`w-32 h-32 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-lg ${className}`}
          >
            <div className="text-white text-6xl animate-float">🚨</div>
          </div>
        );
      default:
        return null;
    }
  };

  return getAvatarContent();
};

export default RiskAvatar;
