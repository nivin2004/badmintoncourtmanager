
import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Bell, ChevronRight, Layout, LogOut, Settings, Users, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-badminton-purple-700 text-white flex flex-col">
        <div className="p-6">
          <Link to="/admin/dashboard" className="flex items-center gap-2">
            <Wrench className="h-6 w-6" />
            <span className="font-bold text-lg">AdminControlPanel</span>
          </Link>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 py-4">
          <Link
            to="/admin/dashboard"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
              location.pathname === '/admin/dashboard' 
                ? 'bg-white/10' 
                : 'hover:bg-white/5'
            }`}
          >
            <Layout className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
          
          <Link
            to="/admin/seat-allocation"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
              location.pathname === '/admin/seat-allocation' 
                ? 'bg-white/10' 
                : 'hover:bg-white/5'
            }`}
          >
            <Users className="h-5 w-5" />
            <span>Seat Allocation</span>
          </Link>
          
          <Link
            to="/admin/notifications"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
              location.pathname === '/admin/notifications' 
                ? 'bg-white/10' 
                : 'hover:bg-white/5'
            }`}
          >
            <Bell className="h-5 w-5" />
            <span>Send Notifications</span>
          </Link>
          
          <Link
            to="/admin/settings"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
              location.pathname === '/admin/settings' 
                ? 'bg-white/10' 
                : 'hover:bg-white/5'
            }`}
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </Link>
        </nav>
        
        <div className="p-4 border-t border-white/10">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-white hover:bg-white/10"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5 mr-2" />
            Sign out
          </Button>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
