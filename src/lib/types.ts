
export interface TimeSlot {
  id: string;
  time: string;
  status: 'available' | 'booked';
}

export interface Court {
  id: string;
  name: string;
  location: string;
  timeSlots: TimeSlot[];
}

export interface Player {
  id: string;
  name: string;
  photoUrl: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  type: 'court' | 'player' | 'system';
}
