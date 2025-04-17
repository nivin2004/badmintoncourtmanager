
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserSearch } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavBar = () => {
  const location = useLocation();
  
  return (
    <header className="w-full flex items-center justify-between px-6 py-6">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 3V7M18 11V21M12 3V13M12 17V21M6 3V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="font-bold text-lg">Badminton Court Manager</span>
      </Link>

      <nav className="flex items-center gap-6">
        <Link
          to="/"
          className={`font-medium ${location.pathname === '/' ? 'text-black' : 'text-gray-500'}`}
        >
          Home
        </Link>
        <Link
          to="/find-players"
          className={`font-medium flex items-center gap-1 ${location.pathname === '/find-players' ? 'text-black' : 'text-gray-500'}`}
        >
          Find Players
        </Link>
        <Link
          to="/court-availability"
          className={`font-medium ${location.pathname === '/court-availability' ? 'text-black font-bold' : 'text-gray-500'}`}
        >
          Court Availability
        </Link>
        <Link
          to="/rentals"
          className={`font-medium ${location.pathname === '/rentals' ? 'text-black' : 'text-gray-500'}`}
        >
          Rentals
        </Link>
        <Link
          to="/login"
          className="ml-4"
        >
          <Button className="bg-purple-600 hover:bg-purple-700">
            Login
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
