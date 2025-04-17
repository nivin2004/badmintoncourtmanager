
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { motion } from 'framer-motion';
import { toast } from '@/hooks/use-toast';

interface Player {
  id: string;
  name: string;
  photoUrl: string;
  skill: string;
  gameType: string;
}

const FindPlayers = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample players data
  const players: Player[] = [
    {
      id: '1',
      name: 'Alex Johnson',
      photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
      skill: 'Intermediate',
      gameType: 'Chess'
    },
    {
      id: '2',
      name: 'Jessica Lee',
      photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
      skill: 'Expert',
      gameType: 'Tennis'
    },
    {
      id: '3',
      name: 'Michael Brown',
      photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
      skill: 'Beginner',
      gameType: 'Badminton'
    },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Filter Options Panel */}
      <div className="w-[360px] bg-purple-100 p-6 min-h-screen">
        <h2 className="text-xl font-bold mb-4">Filter Options</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block mb-2">Game Type</label>
            <Input 
              type="text" 
              placeholder="e.g., Chess, Tennis" 
              className="w-full rounded-full"
            />
          </div>
          
          <div>
            <label className="block mb-2">Skill Level</label>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <span>Beginner</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <span>Intermediate</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <span>Expert</span>
              </div>
            </div>
          </div>
          
          <div>
            <label className="block mb-2">Availability</label>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <span>Available now</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {players.map((player) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <img 
                  src={player.photoUrl} 
                  alt={player.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{player.name}</h3>
              <p className="text-gray-600 mb-4">{player.skill}- {player.gameType}</p>
              <Button
                className="w-full bg-purple-600 hover:bg-purple-700 rounded-full py-6"
                onClick={() => {
                  toast({
                    title: "Game Request Sent",
                    description: `You sent a game request to ${player.name}.`,
                    variant: "default",
                  });
                }}
              >
                Send Game Request
              </Button>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 bg-purple-100 p-4 rounded-lg text-center">
          <p>The court is currently unavailable. You have been added to the queue.</p>
        </div>
      </div>
    </div>
  );
};

export default FindPlayers;
