
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import RiskAvatar from '../components/RiskAvatar';
import { CheckCircle, ArrowLeft } from 'lucide-react';

const LowRisk = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-800 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Assessment
          </Link>
          
          <Card className="bg-white/95 backdrop-blur-sm shadow-xl">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-6">
                <RiskAvatar riskLevel="low" />
              </div>
              <CardTitle className="text-3xl font-bold text-green-800">
                Low Risk Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-semibold text-green-800 mb-4">
                  Excellent Security Standing
                </h2>
                <p className="text-green-700 text-lg leading-relaxed">
                  Your risk assessment indicates a very low security risk. Your account shows 
                  excellent security practices and trustworthy patterns.
                </p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">
                  Risk Factors Assessment:
                </h3>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    Established account with good history
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    Minimal failed login attempts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    Good IP reputation score
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    Normal transaction patterns
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-green-800 mb-3">
                  Recommendations:
                </h3>
                <p className="text-green-700 mb-6">
                  Continue maintaining your excellent security practices. Regular monitoring 
                  and keeping your account information updated will help maintain this low-risk status.
                </p>
                
                <Button 
                  asChild 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
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

export default LowRisk;
