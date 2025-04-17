
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Checkbox } from '@/components/ui/checkbox';
import { LockIcon, UserIcon } from 'lucide-react';

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      if (email && password) {
        toast({
          title: "Login successful",
          description: isAdmin ? "Welcome to Admin Control Panel" : "Welcome back to Badminton Court Manager!",
        });
        
        // Redirect based on login type
        if (isAdmin) {
          navigate('/admin/dashboard');
        } else {
          navigate('/');
        }
      } else {
        toast({
          title: "Login failed",
          description: "Please provide valid credentials",
          variant: "destructive",
        });
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-white">
      <div className="max-w-md w-full overflow-hidden rounded-xl shadow-lg">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-badminton-purple-700">Badminton Court Manager</h1>
            <h2 className="text-2xl font-medium mt-2">Welcome Back!</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <UserIcon className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="pl-10 rounded-lg border-gray-200 py-3"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="text-gray-700 font-medium">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <LockIcon className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="pl-10 rounded-lg border-gray-200 py-3"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="adminLogin" 
                checked={isAdmin} 
                onCheckedChange={() => setIsAdmin(!isAdmin)}
              />
              <label
                htmlFor="adminLogin"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Login as Administrator
              </label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-badminton-purple-600 hover:bg-badminton-purple-700 py-6 rounded-lg"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <Link 
              to="/forgot-password" 
              className="text-gray-500 hover:text-badminton-purple-700 transition-colors"
            >
              Forgot Password?
            </Link>
            <div className="mt-2">
              <span className="text-gray-600">Don't have an account?</span>{' '}
              <Link 
                to="/signup" 
                className="font-medium text-badminton-purple-600 hover:text-badminton-purple-700 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
