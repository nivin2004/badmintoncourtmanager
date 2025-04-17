
import React from 'react';
import { motion } from 'framer-motion';
import { Player } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PlayerCardProps {
  player: Player;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  const levelColors = {
    'Beginner': 'bg-green-100 text-green-800',
    'Intermediate': 'bg-blue-100 text-blue-800',
    'Advanced': 'bg-red-100 text-red-800',
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-soft hover:shadow-md transition-all duration-300"
    >
      <div className="p-6 flex items-center gap-4">
        <div className="relative">
          <img 
            src={player.photoUrl} 
            alt={player.name} 
            className="w-16 h-16 rounded-full object-cover border-2 border-badminton-purple-200"
          />
          <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-green-400 border-2 border-white dark:border-gray-800"></div>
        </div>
        
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{player.name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span 
              className={cn(
                "text-xs font-medium px-2 py-1 rounded-full",
                levelColors[player.level]
              )}
            >
              {player.level}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">{player.description}</span>
          </div>
        </div>
      </div>
      
      <div className="px-6 pb-6">
        <Button 
          variant="outline"
          className="w-full border-badminton-purple-200 text-badminton-purple-700 hover:bg-badminton-purple-50 hover:text-badminton-purple-800"
        >
          Connect
        </Button>
      </div>
    </motion.div>
  );
};

export default PlayerCard;
