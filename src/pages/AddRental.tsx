
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const AddRental = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [condition, setCondition] = useState('');
  const [user, setUser] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Rental Added",
      description: "Your rental item has been successfully added",
    });
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-purple-600 p-8 rounded-lg min-h-[600px] flex flex-col items-center justify-center">
          <div className="bg-gray-300 text-black rounded-full py-2 px-8 mb-16">
            <span className="text-xl">Add Rental</span>
          </div>
          
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
            <div className="flex items-center justify-between">
              <label className="text-white font-bold text-right w-1/3 pr-4">NAME:</label>
              <Input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-2/3 bg-white"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <label className="text-white font-bold text-right w-1/3 pr-4">CONDITION:</label>
              <Input 
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                className="w-2/3 bg-white"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <label className="text-white font-bold text-right w-1/3 pr-4">USER:</label>
              <Input 
                value={user}
                onChange={(e) => setUser(e.target.value)}
                className="w-2/3 bg-white"
              />
            </div>
            
            <div className="mt-4 flex justify-center">
              <Button type="button" className="bg-gray-300 text-black hover:bg-gray-400">
                Upload Image
              </Button>
            </div>
            
            <div className="mt-8 flex justify-center">
              <Button type="submit" className="rounded-full bg-black text-white p-2">
                <Plus size={24} />
              </Button>
            </div>
          </form>
        </div>
      </div>
      
      <footer className="mt-16 border-t pt-4 flex justify-between text-sm text-gray-500">
        <p>© 2025 BCM. All rights reserved</p>
        <div className="flex gap-4">
          <a href="#" className="text-purple-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href="#" className="text-purple-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
          </a>
          <a href="#" className="text-purple-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default AddRental;
