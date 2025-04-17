
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';
import CourtTimeSlot from '@/components/CourtTimeSlot';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { TimeSlot } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';

const CourtAvailability = () => {
  const { toast } = useToast();
  const [notifyWhenAvailable, setNotifyWhenAvailable] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Sample time slots data
  const timeSlots: TimeSlot[] = [
    { id: '1', time: '9:00 AM', status: 'available' },
    { id: '2', time: '10:00 AM', status: 'booked' },
    { id: '3', time: '11:00 AM', status: 'available' },
    { id: '4', time: '12:00 PM', status: 'booked' },
    { id: '5', time: '1:00 PM', status: 'available' },
    { id: '6', time: '2:00 PM', status: 'booked' },
    { id: '7', time: '3:00 PM', status: 'available' },
  ];

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate refresh delay
    setTimeout(() => {
      setIsRefreshing(false);
      toast({
        title: "Court availability refreshed",
        description: "The latest availability information has been loaded.",
      });
    }, 1000);
  };

  const handleTimeSlotClick = (timeSlot: TimeSlot) => {
    if (timeSlot.status === 'available') {
      setSelectedTimeSlot(timeSlot.id);
      toast({
        title: "Slot booked",
        description: `You have successfully booked the ${timeSlot.time} slot.`,
        variant: "default",
      });
    } else {
      toast({
        title: "Time slot unavailable",
        description: `The ${timeSlot.time} slot is already booked.`,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 md:px-10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-row items-center justify-between gap-4 mb-10"
          >
            <h1 className="text-3xl font-bold">Court Availability</h1>
            
            <Button
              onClick={handleRefresh}
              className="rounded-full bg-badminton-purple-600 hover:bg-badminton-purple-700"
              disabled={isRefreshing}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </motion.div>
          
          {/* Time Slots */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-7 gap-4 mb-10"
          >
            {timeSlots.map((slot) => (
              <CourtTimeSlot 
                key={slot.id} 
                timeSlot={slot} 
                onClick={() => handleTimeSlotClick(slot)} 
              />
            ))}
          </motion.div>
          
          {/* Notification Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-gray-50 dark:bg-gray-800 border-0 shadow-sm">
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-4">Notification</h3>
                <div className="flex items-center space-x-2">
                  <Switch 
                    id="notify" 
                    checked={notifyWhenAvailable}
                    onCheckedChange={setNotifyWhenAvailable}
                    className="data-[state=checked]:bg-badminton-purple-600"
                  />
                  <Label htmlFor="notify">Notify me when a slot becomes available</Label>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CourtAvailability;
