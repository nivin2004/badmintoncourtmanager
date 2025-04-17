
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { TimeSlot } from '@/lib/types';

interface CourtTimeSlotProps {
  timeSlot: TimeSlot;
  onClick?: () => void;
}

const CourtTimeSlot: React.FC<CourtTimeSlotProps> = ({ timeSlot, onClick }) => {
  const isAvailable = timeSlot.status === 'available';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={cn(
        'py-4 px-6 text-center cursor-pointer rounded-lg',
        isAvailable 
          ? 'bg-purple-100 text-purple-800' 
          : 'bg-purple-600 text-white'
      )}
    >
      <span className="text-lg font-medium">{timeSlot.time}</span>
    </motion.div>
  );
};

export default CourtTimeSlot;
