
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';

const SignUp = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validate form
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }
    
    if (!agreeToTerms) {
      toast({
        title: "Terms agreement required",
        description: "Please agree to the terms and conditions",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }
    
    // Simulate signup
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account created successfully",
        description: "Welcome to Badminton Court Manager!",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-white">
      <div className="max-w-md w-full overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-purple-700">Badminton Court Manager</h1>
            <h2 className="text-2xl font-medium mt-2">Create an Account</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="name">Full Name</label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder=""
                required
                className="rounded-lg border-gray-200 py-3"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=""
                required
                className="rounded-lg border-gray-200 py-3"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password">Password</label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder=""
                required
                className="rounded-lg border-gray-200 py-3"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder=""
                required
                className="rounded-lg border-gray-200 py-3"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="terms" 
                checked={agreeToTerms}
                onCheckedChange={(checked) => setAgreeToTerms(checked === true)}
                className="data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the{' '}
                <Link 
                  to="/terms" 
                  className="text-purple-600 hover:text-purple-700 transition-colors"
                >
                  terms and conditions
                </Link>
              </label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-purple-600 hover:bg-purple-700 py-6 rounded-lg"
              disabled={isLoading}
            >
              {isLoading ? 'Creating account...' : 'Sign Up'}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <span className="text-gray-600">Already have an account?</span>{' '}
            <Link 
              to="/login" 
              className="font-medium text-purple-600 hover:text-purple-700 transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
