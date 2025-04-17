
import React, { useState } from 'react';
import { X, AlertTriangle, Upload, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';

const Notifications = () => {
  const { toast } = useToast();
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [urgency, setUrgency] = useState('moderate');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate sending notification
    setTimeout(() => {
      setIsLoading(false);
      
      if (title && message) {
        toast({
          title: "Notification sent",
          description: "Your notification has been sent to all users",
        });
        
        // Reset form
        setTitle('');
        setMessage('');
        setUrgency('moderate');
      } else {
        toast({
          title: "Error",
          description: "Please fill all required fields",
          variant: "destructive",
        });
      }
    }, 1500);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Send Notifications</h1>
      </div>

      <div className="bg-lavender-50 rounded-xl p-8 relative border border-lavender-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Notifications</h2>
          <Button variant="ghost" size="icon">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-base font-medium">Notification Title</Label>
            <Input 
              id="title" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter notification title"
              className="text-base py-6"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              <Label className="text-base font-medium">Urgency level</Label>
            </div>
            
            <RadioGroup 
              value={urgency} 
              onValueChange={setUrgency}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="low" id="low" />
                <Label htmlFor="low">Low</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="moderate" id="moderate" />
                <Label htmlFor="moderate">Moderate</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="high" id="high" />
                <Label htmlFor="high">High</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label className="text-base font-medium">Attached files</Label>
            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-gray-500">
                  <Upload className="h-5 w-5" />
                  <span>No attachments found</span>
                </div>
                <Button variant="secondary" size="sm">
                  Upload
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-base font-medium">Description</Label>
            <Textarea 
              id="description" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter notification details..."
              className="resize-none h-32"
            />
          </div>

          <div className="flex justify-end">
            <Button 
              type="submit" 
              disabled={isLoading}
              className="bg-badminton-purple-600 hover:bg-badminton-purple-700"
            >
              {isLoading ? (
                "Sending..."
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send Notification
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Notifications;
