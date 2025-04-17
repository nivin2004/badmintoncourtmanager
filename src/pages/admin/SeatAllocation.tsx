
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

interface Slot {
  id: string;
  title: string;
  time: string;
  assignedTo: string;
}

const SeatAllocation = () => {
  const { toast } = useToast();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [newSlot, setNewSlot] = useState({
    title: '',
    time: '',
    assignedTo: '',
  });

  const [slots, setSlots] = useState<Slot[]>([
    { id: '1', title: 'Yoga Class', time: '10:00 AM', assignedTo: 'Sarah Connor' },
    { id: '2', title: 'Cooking Class', time: '2:00 PM', assignedTo: 'John Smith' },
    { id: '3', title: 'Art Workshop', time: '5:00 PM', assignedTo: 'Emily Davis' },
  ]);

  const handleAddSlot = () => {
    setSlots([...slots, {
      id: (slots.length + 1).toString(),
      title: newSlot.title,
      time: newSlot.time,
      assignedTo: newSlot.assignedTo,
    }]);
    
    setNewSlot({ title: '', time: '', assignedTo: '' });
    setIsAddDialogOpen(false);
    
    toast({
      title: "Slot added",
      description: "New slot has been added successfully",
    });
  };

  const handleEditSlot = () => {
    if (!selectedSlot) return;
    
    setSlots(slots.map(slot => 
      slot.id === selectedSlot.id ? selectedSlot : slot
    ));
    
    setSelectedSlot(null);
    setIsEditDialogOpen(false);
    
    toast({
      title: "Slot updated",
      description: "Slot has been updated successfully",
    });
  };

  const handleDeleteSlot = (id: string) => {
    setSlots(slots.filter(slot => slot.id !== id));
    
    toast({
      title: "Slot deleted",
      description: "Slot has been deleted successfully",
    });
  };

  const handleAssign = (slotId: string) => {
    toast({
      title: "Slot assignment",
      description: "Please configure assignment details in the dialog",
    });
    
    const slot = slots.find(s => s.id === slotId);
    if (slot) {
      setSelectedSlot(slot);
      setIsEditDialogOpen(true);
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Seat Allocation</h1>
        <Button 
          onClick={() => setIsAddDialogOpen(true)}
          className="bg-badminton-purple-600 hover:bg-badminton-purple-700"
        >
          Add Slot
        </Button>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Available Slots</h2>
        
        <div className="space-y-4">
          {slots.map((slot) => (
            <Card key={slot.id} className="bg-lavender-50 border-lavender-100">
              <CardContent className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Slot #{slot.id}: {slot.title} - {slot.time}</h3>
                  <p className="text-sm text-gray-500">Assigned to: {slot.assignedTo}</p>
                </div>
                <Button 
                  onClick={() => handleAssign(slot.id)}
                  variant="secondary"
                  className="bg-badminton-purple-600 text-white hover:bg-badminton-purple-700"
                >
                  Assign
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Add Slot Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Slot</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">Title</label>
              <Input 
                id="title"
                value={newSlot.title}
                onChange={(e) => setNewSlot({...newSlot, title: e.target.value})}
                placeholder="e.g., Badminton Session"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="time" className="text-sm font-medium">Time</label>
              <Input 
                id="time"
                value={newSlot.time}
                onChange={(e) => setNewSlot({...newSlot, time: e.target.value})}
                placeholder="e.g., 3:00 PM"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="assignedTo" className="text-sm font-medium">Assigned To</label>
              <Input 
                id="assignedTo"
                value={newSlot.assignedTo}
                onChange={(e) => setNewSlot({...newSlot, assignedTo: e.target.value})}
                placeholder="e.g., John Smith"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleAddSlot}>Add Slot</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Slot Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Slot</DialogTitle>
          </DialogHeader>
          {selectedSlot && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label htmlFor="edit-title" className="text-sm font-medium">Title</label>
                <Input 
                  id="edit-title"
                  value={selectedSlot.title}
                  onChange={(e) => setSelectedSlot({...selectedSlot, title: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="edit-time" className="text-sm font-medium">Time</label>
                <Input 
                  id="edit-time"
                  value={selectedSlot.time}
                  onChange={(e) => setSelectedSlot({...selectedSlot, time: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="edit-assignedTo" className="text-sm font-medium">Assigned To</label>
                <Input 
                  id="edit-assignedTo"
                  value={selectedSlot.assignedTo}
                  onChange={(e) => setSelectedSlot({...selectedSlot, assignedTo: e.target.value})}
                />
              </div>
            </div>
          )}
          <DialogFooter className="flex justify-between">
            <Button 
              variant="destructive" 
              onClick={() => {
                if (selectedSlot) handleDeleteSlot(selectedSlot.id);
                setIsEditDialogOpen(false);
              }}
            >
              Delete
            </Button>
            <div className="space-x-2">
              <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleEditSlot}>Save Changes</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SeatAllocation;
