
import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Upload } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface AddEquipmentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddEquipment: (equipment: { name: string; condition: string; user: string; image: string }) => void;
}

const AddEquipmentDialog = ({ open, onOpenChange, onAddEquipment }: AddEquipmentDialogProps) => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [condition, setCondition] = useState('');
  const [user, setUser] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = () => {
    if (!name || !condition || !user) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Normally you would upload the image here
    // For now we'll use a placeholder image
    const imageUrl = image 
      ? URL.createObjectURL(image)
      : "https://images.unsplash.com/photo-1612296727716-d6c69d2a2cbb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJhZG1pbnRvbiUyMHJhY2tldHxlbnwwfHwwfHx8MA%3D%3D";

    onAddEquipment({ 
      name, 
      condition, 
      user,
      image: imageUrl 
    });

    // Reset form
    setName('');
    setCondition('');
    setUser('');
    setImage(null);
    onOpenChange(false);

    toast({
      title: "Equipment Added",
      description: "Your equipment has been successfully added"
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 overflow-hidden max-w-4xl border-none">
        <div className="bg-purple-600 p-6 min-h-[600px] flex flex-col items-center justify-center">
          <div className="bg-gray-300 text-black rounded-full py-2 px-8 mb-10">
            <span className="text-xl font-medium">Add Rental</span>
          </div>
          
          <div className="w-full max-w-md space-y-6">
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
            
            <div className="mt-6 flex justify-center">
              <label className="cursor-pointer">
                <Input 
                  type="file" 
                  className="hidden" 
                  onChange={handleFileChange}
                  accept="image/*"
                />
                <Button type="button" className="bg-gray-300 text-black hover:bg-gray-400">
                  <Upload className="mr-2 h-4 w-4" /> Upload Image
                </Button>
              </label>
            </div>
            
            <div className="mt-8 flex justify-center">
              <Button 
                onClick={handleSubmit} 
                className="rounded-full bg-black text-white p-2 h-12 w-12 flex items-center justify-center"
              >
                <Plus size={24} />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddEquipmentDialog;
