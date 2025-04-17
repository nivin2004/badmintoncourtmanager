
import React from 'react';
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';
import { Notification } from '@/lib/types';
import { cn } from '@/lib/utils';

interface NotificationBadgeProps {
  notification: Notification;
}

const NotificationBadge: React.FC<NotificationBadgeProps> = ({ notification }) => {
  const iconMap = {
    'court': <svg className="h-5 w-5 text-badminton-purple-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 3V7M18 11V21M12 3V13M12 17V21M6 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    'player': <svg className="h-5 w-5 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    'system': <Bell className="h-5 w-5 text-yellow-500" />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "p-4 rounded-xl bg-white dark:bg-gray-800 shadow-soft flex items-center gap-4 border-l-4 mb-3",
        notification.read ? "border-gray-200" : "border-badminton-purple-500"
      )}
    >
      <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-700">
        {iconMap[notification.type]}
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-gray-900 dark:text-white">{notification.title}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{notification.message}</p>
      </div>
      <div className="text-xs text-gray-400">
        {notification.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
    </motion.div>
  );
};

export default NotificationBadge;
