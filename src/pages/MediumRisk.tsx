
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import RiskAvatar from '@/components/RiskAvatar';
import { AlertTriangle, ArrowLeft, Shield } from 'lucide-react';

const MediumRisk = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to="/" className="inline-flex items-center text-orange-600 hover:text-orange-800 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Assessment
          </Link>
          
          <Card className="bg-white/95 backdrop-blur-sm shadow-xl">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-6">
                <RiskAvatar riskLevel="medium" />
              </div>
              <CardTitle className="text-3xl font-bold text-orange-800">
                Medium Risk Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <AlertTriangle className="w-8 h-8 text-orange-600" />
                </div>
                <h2 className="text-2xl font-semibold text-orange-800 mb-4">
                  Moderate Security Attention Required
                </h2>
                <p className="text-orange-700 text-lg leading-relaxed">
                  Your risk assessment indicates a moderate security risk. Some factors require 
                  attention to improve your security standing.
                </p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">
                  Areas of Concern:
                </h3>
                <ul className="space-y-2 text-orange-700">
                  <li className="flex items-center">
                    <AlertTriangle className="w-5 h-5 text-orange-600 mr-2" />
                    Some suspicious login patterns detected
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="w-5 h-5 text-orange-600 mr-2" />
                    Transaction amounts may need verification
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="w-5 h-5 text-orange-600 mr-2" />
                    Account age or activity patterns flagged
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="w-5 h-5 text-orange-600 mr-2" />
                    IP reputation could be improved
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Security Recommendations:
                </h3>
                <ul className="space-y-2 text-green-700">
                  <li>• Enable two-factor authentication</li>
                  <li>• Review recent account activity</li>
                  <li>• Update password and security questions</li>
                  <li>• Verify your contact information</li>
                  <li>• Monitor transactions closely</li>
                </ul>
              </div>
              
              <div className="text-center">
                <p className="text-orange-700 mb-6">
                  Taking these security measures will help improve your risk profile and 
                  protect your account from potential threats.
                </p>
                
                <Button 
                  asChild 
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3"
                >
                  <Link to="/">
                    Run Another Assessment
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MediumRisk;
