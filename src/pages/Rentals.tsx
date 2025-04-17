
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import AddEquipmentDialog from '@/components/AddEquipmentDialog';

interface RentalItem {
  id: string;
  name: string;
  condition: string;
  user: string;
  image: string;
}

const Rentals = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [rentalItems, setRentalItems] = useState<RentalItem[]>([
    {
      id: '1',
      name: 'Yonex Badminton Racket',
      condition: 'New',
      user: 'Nivin Prasad',
      image: 'https://images.unsplash.com/photo-1612296727716-d6c69d2a2cbb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJhZG1pbnRvbiUyMHJhY2tldHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: '2',
      name: 'Feather Shuttlecocks',
      condition: 'New',
      user: 'Nivin Prasad',
      image: 'https://images.unsplash.com/photo-1617142689941-9d45017c7ea8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFkbWludG9ufGVufDB8fDB8fHww',
    },
    {
      id: '3',
      name: 'Vintage Tennis Racket',
      condition: 'New',
      user: 'Nivin Prasad',
      image: 'https://images.unsplash.com/photo-1521805103424-d8f8430e8933?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFkbWludG9uJTIwcmFja2V0fGVufDB8fDB8fHww',
    },
  ]);

  const handleAddEquipment = (equipment: { name: string; condition: string; user: string; image: string }) => {
    const newItem: RentalItem = {
      id: Date.now().toString(), // Simple ID generation
      ...equipment
    };
    
    setRentalItems([...rentalItems, newItem]);
  };

  const filteredItems = rentalItems.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Input
            type="text"
            placeholder="Search for rackets or shuttles..."
            className="w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-center">{item.name}</h3>
              <p className="text-gray-700 text-center">Condition: {item.condition}</p>
              <p className="text-gray-700 text-center">User: {item.user}</p>
              <Button
                className="mt-4 w-full bg-purple-600 hover:bg-purple-700 rounded-full"
              >
                Rent Now
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="fixed bottom-10 right-10">
          <Button
            onClick={() => setDialogOpen(true)}
            className="w-14 h-14 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center"
          >
            <Plus size={24} />
          </Button>
        </div>
      </div>

      <AddEquipmentDialog 
        open={dialogOpen} 
        onOpenChange={setDialogOpen} 
        onAddEquipment={handleAddEquipment}
      />

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

export default Rentals;
