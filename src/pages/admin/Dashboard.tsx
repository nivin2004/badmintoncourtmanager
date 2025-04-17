
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, CalendarIcon, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChartContainer } from '@/components/ui/chart';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from 'recharts';

// Sample data for charts
const userActivityData = [
  { name: 'Jan', users: 0 },
  { name: 'Feb', users: 2 },
  { name: 'Mar', users: 3 },
  { name: 'Apr', users: 4 },
  { name: 'May', users: 0 },
  { name: 'Jun', users: 0 },
  { name: 'Jul', users: 0 },
];

const bookingData = [
  { name: 'Mon', courts: 2, equipment: 1 },
  { name: 'Tue', courts: 1, equipment: 9 },
  { name: 'Wed', courts: 3, equipment: 1 },
  { name: 'Thu', courts: 2, equipment: 1 },
  { name: 'Fri', courts: 4, equipment: 2 },
  { name: 'Sat', courts: 6, equipment: 3 },
  { name: 'Sun', courts: 5, equipment: 2 },
];

const chartConfig = {
  users: {
    label: "Users",
    color: "#a855f7"
  },
  courts: {
    label: "Court Bookings",
    color: "#6366f1"
  },
  equipment: {
    label: "Equipment Rentals",
    color: "#14b8a6"
  }
};

const Dashboard = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <div className="text-sm text-gray-500">
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">7</div>
            <p className="text-xs text-gray-500 mt-1">
              +18% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Court Bookings</CardTitle>
            <CalendarIcon className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">5</div>
            <p className="text-xs text-gray-500 mt-1">
              +5% from last week
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Equipment Rentals</CardTitle>
            <svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 3V7M18 11V21M12 3V13M12 17V21M6 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">6</div>
            <p className="text-xs text-gray-500 mt-1">
              +12% from last week
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>User Activity</CardTitle>
            <CardDescription>Monthly active users</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ChartContainer config={chartConfig} className="h-full">
              <AreaChart data={userActivityData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="users" stroke="#a855f7" fillOpacity={1} fill="url(#colorUsers)" />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Booking Analysis</CardTitle>
            <CardDescription>Court and equipment usage by day</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ChartContainer config={chartConfig} className="h-full">
              <BarChart data={bookingData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="courts" fill="#6366f1" name="Court Bookings" />
                <Bar dataKey="equipment" fill="#14b8a6" name="Equipment Rentals" />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
