import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { CalendarIcon, Users, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Notification } from '@/lib/types';

const Home = () => {
  const notifications: Notification[] = [
    {
      id: "1",
      title: "Court Maintenance",
      message: "Court 3 will be closed for maintenance on Saturday.",
      timestamp: new Date(),
      read: false,
      type: "court"
    },
    {
      id: "2",
      title: "Tournament Registration",
      message: "Registration for the Spring Tournament is now open!",
      timestamp: new Date(),
      read: false,
      type: "system"
    }
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Welcome to Badminton Center</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Court Availability Card */}
        <Card className="bg-white shadow-md rounded-lg">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <CalendarIcon className="h-6 w-6 text-gray-500" />
              <CardTitle className="text-lg font-semibold">Court Availability</CardTitle>
            </div>
            <p className="text-gray-600 mb-4">Check real-time court availability and make reservations.</p>
            <Link to="/court-availability">
              <Button className="w-full">View Courts</Button>
            </Link>
          </CardContent>
        </Card>

        {/* Find Players Card */}
        <Card className="bg-white shadow-md rounded-lg">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Users className="h-6 w-6 text-gray-500" />
              <CardTitle className="text-lg font-semibold">Find Players</CardTitle>
            </div>
            <p className="text-gray-600 mb-4">Connect with other badminton enthusiasts and find your next match.</p>
            <Link to="/find-players">
              <Button className="w-full">Find Players</Button>
            </Link>
          </CardContent>
        </Card>

        {/* Equipment Rentals Card */}
        <Card className="bg-white shadow-md rounded-lg">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-gray-500"
              >
                <rect width="7" height="7" x="2" y="2" rx="1" ry="1" />
                <rect width="7" height="7" x="15" y="2" rx="1" ry="1" />
                <rect width="7" height="7" x="2" y="15" rx="1" ry="1" />
                <path d="M17 17v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2" />
                <path d="M9 15H7" />
              </svg>
              <CardTitle className="text-lg font-semibold">Equipment Rentals</CardTitle>
            </div>
            <p className="text-gray-600 mb-4">Rent badminton equipment for your games.</p>
            <Link to="/rentals">
              <Button className="w-full">View Rentals</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Notifications Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Notifications</h2>
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <Card key={notification.id} className="mb-4 bg-white shadow-md rounded-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Bell className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <CardTitle className="text-md font-semibold">{notification.title}</CardTitle>
                    <p className="text-gray-700">{notification.message}</p>
                    <p className="text-gray-500 text-sm mt-1">
                      {notification.timestamp.toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-gray-500">No new notifications.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
