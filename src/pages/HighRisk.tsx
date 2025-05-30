
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, ArrowLeft, Lock, Phone } from 'lucide-react';
import RiskAvatar from '../components/RiskAvatar';

const HighRisk = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to="/" className="inline-flex items-center text-red-600 hover:text-red-800 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Assessment
          </Link>
          
          <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-red-200">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-6">
                <RiskAvatar riskLevel="high" />
              </div>
              <CardTitle className="text-3xl font-bold text-red-800">
                High Risk Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <AlertCircle className="w-8 h-8 text-red-600" />
                </div>
                <h2 className="text-2xl font-semibold text-red-800 mb-4">
                  Immediate Security Action Required
                </h2>
                <p className="text-red-700 text-lg leading-relaxed">
                  Your risk assessment indicates a high security risk. Multiple factors suggest 
                  potential security threats that require immediate attention.
                </p>
              </div>
              
              <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                <h3 className="text-lg font-semibold text-red-800 mb-3">
                  Critical Risk Factors:
                </h3>
                <ul className="space-y-2 text-red-700">
                  <li className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                    Multiple failed login attempts detected
                  </li>
                  <li className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                    Suspicious transaction patterns
                  </li>
                  <li className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                    New account or unusual activity
                  </li>
                  <li className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                    Poor IP reputation score
                  </li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center">
                  <Lock className="w-5 h-5 mr-2" />
                  Immediate Actions Required:
                </h3>
                <ul className="space-y-2 text-red-700 font-medium">
                  <li>🔒 Change your password immediately</li>
                  <li>📱 Enable two-factor authentication</li>
                  <li>📧 Verify all recent transactions</li>
                  <li>🛡️ Review account access logs</li>
                  <li>📞 Contact support if suspicious activity found</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <Phone className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold text-blue-800">
                    Need Help?
                  </h3>
                </div>
                <p className="text-blue-700 mb-4">
                  If you believe this assessment is incorrect or need assistance securing your account, 
                  please contact our security team immediately.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Contact Security Team
                </Button>
              </div>
              
              <div className="text-center">
                <Button 
                  asChild 
                  variant="outline"
                  className="border-red-300 text-red-600 hover:bg-red-50 px-8 py-3"
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

export default HighRisk;