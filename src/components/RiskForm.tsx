import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Minus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Transaction {
  amount: number;
  currency: string;
  type: string;
}

interface FormData {
  location: string;
  deviceFingerprint: string;
  recentTransactions: Transaction[];
  accountAgeDays: number;
  failedLoginsLastHour: number;
  ipReputationScore: number;
}

const RiskForm: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [formData, setFormData] = useState<FormData>({
    location: "",
    deviceFingerprint: "-----",
    recentTransactions: [{ amount: 0, currency: "USD", type: "purchase" }],
    accountAgeDays: 0,
    failedLoginsLastHour: 0,
    ipReputationScore: 0,
  });

  const addTransaction = () => {
    setFormData((prev) => ({
      ...prev,
      recentTransactions: [
        ...prev.recentTransactions,
        { amount: 0, currency: "USD", type: "purchase" },
      ],
    }));
  };

  const removeTransaction = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      recentTransactions: prev.recentTransactions.filter((_, i) => i !== index),
    }));
  };

  const updateTransaction = (
    index: number,
    field: keyof Transaction,
    value: string | number
  ) => {
    setFormData((prev) => ({
      ...prev,
      recentTransactions: prev.recentTransactions.map((transaction, i) =>
        i === index ? { ...transaction, [field]: value } : transaction
      ),
    }));
  };

  const calculateRiskScore = (data: FormData): number => {
    let score = 0;

    // Account age factor (older accounts are less risky)
    if (data.accountAgeDays < 30) score += 30;
    else if (data.accountAgeDays < 90) score += 15;
    else if (data.accountAgeDays < 365) score += 5;

    // Failed logins factor
    score += data.failedLoginsLastHour * 15;

    // IP reputation factor (assuming 0-100 scale where 100 is best)
    score += (100 - data.ipReputationScore) * 0.3;

    // Transaction amount factor
    const totalAmount = data.recentTransactions.reduce(
      (sum, tx) => sum + tx.amount,
      0
    );
    if (totalAmount > 10000) score += 20;
    else if (totalAmount > 5000) score += 10;
    else if (totalAmount > 1000) score += 5;

    return Math.min(100, Math.max(0, score));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.location.trim()) {
      toast({
        title: "Error",
        description: "Please enter your location",
        variant: "destructive",
      });
      return;
    }

    const riskScore = calculateRiskScore(formData);

    console.log("Risk assessment:", { formData, riskScore });

    if (riskScore < 25) {
      navigate("/low-risk");
    } else if (riskScore < 60) {
      navigate("/medium-risk");
    } else {
      navigate("/high-risk");
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white/95 backdrop-blur-sm shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-green-800">
          Risk Assessment Form
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData((prev) => ({ ...prev, location: e.target.value }))
              }
              placeholder="Enter your location"
              className="border-green-200 focus:border-green-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="deviceFingerprint">Device Fingerprint</Label>
            <Input
              id="deviceFingerprint"
              value={formData.deviceFingerprint}
              readOnly
              className="bg-gray-100 border-green-200"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label>Recent Transactions</Label>
              <Button
                type="button"
                onClick={addTransaction}
                size="sm"
                className="bg-green-600 hover:bg-green-700"
              >
                <Plus className="w-4 h-4 mr-1" />
                Add
              </Button>
            </div>

            {formData.recentTransactions.map((transaction, index) => (
              <div
                key={index}
                className="flex gap-2 items-end bg-green-50 p-3 rounded-lg"
              >
                <div className="flex-1">
                  <Label className="text-sm">Amount</Label>
                  <Input
                    type="number"
                    value={transaction.amount}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      updateTransaction(index, "amount", Number(e.target.value))
                    }
                    className="border-green-200 focus:border-green-500"
                  />
                </div>
                <div className="flex-1">
                  <Label className="text-sm">Currency</Label>
                  <Select
                    value={transaction.currency}
                    onValueChange={(value: string) =>
                      updateTransaction(index, "currency", value)
                    }
                  >
                    <SelectTrigger className="border-green-200 focus:border-green-500">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD</SelectItem>
                      <SelectItem value="EUR">EUR</SelectItem>
                      <SelectItem value="GBP">GBP</SelectItem>
                      <SelectItem value="NGN">NGN</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <Label className="text-sm">Type</Label>
                  <Select
                    value={transaction.type}
                    onValueChange={(value: string) =>
                      updateTransaction(index, "type", value)
                    }
                  >
                    <SelectTrigger className="border-green-200 focus:border-green-500">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="purchase">Purchase</SelectItem>
                      <SelectItem value="transfer">Transfer</SelectItem>
                      <SelectItem value="withdrawal">Withdrawal</SelectItem>
                      <SelectItem value="deposit">Deposit</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {formData.recentTransactions.length > 1 && (
                  <Button
                    type="button"
                    onClick={() => removeTransaction(index)}
                    size="sm"
                    variant="outline"
                    className="border-red-300 text-red-600 hover:bg-red-50"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <Label htmlFor="accountAgeDays">Account Age (Days)</Label>
            <Input
              id="accountAgeDays"
              type="number"
              value={formData.accountAgeDays}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData((prev) => ({
                  ...prev,
                  accountAgeDays: Number(e.target.value),
                }))
              }
              className="border-green-200 focus:border-green-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="failedLoginsLastHour">
              Failed Logins (Last Hour)
            </Label>
            <Input
              id="failedLoginsLastHour"
              type="number"
              value={formData.failedLoginsLastHour}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData((prev) => ({
                  ...prev,
                  failedLoginsLastHour: Number(e.target.value),
                }))
              }
              className="border-green-200 focus:border-green-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ipReputationScore">
              IP Reputation Score (0-100)
            </Label>
            <Input
              id="ipReputationScore"
              type="number"
              min="0"
              max="100"
              value={formData.ipReputationScore}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData((prev) => ({
                  ...prev,
                  ipReputationScore: Number(e.target.value),
                }))
              }
              className="border-green-200 focus:border-green-500"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
          >
            Assess Risk Profile
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RiskForm;
