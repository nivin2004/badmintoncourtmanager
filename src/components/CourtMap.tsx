
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CourtMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // In a real implementation, this would initialize a map using libraries like Mapbox or Google Maps
    // For this example, we'll just create a placeholder
    const initMap = () => {
      if (mapRef.current) {
        // Placeholder for map initialization
        console.log('Map initialized');
      }
    };

    initMap();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-96 bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-soft relative"
    >
      <div ref={mapRef} className="absolute inset-0">
        {/* Mock map UI with gradient background */}
        <div className="w-full h-full bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20">
          {/* Mock map elements */}
          <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-md bg-badminton-purple-500/70 backdrop-blur-sm animate-pulse"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-md bg-badminton-purple-600/70 backdrop-blur-sm animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-10 h-10 rounded-md bg-badminton-purple-400/70 backdrop-blur-sm animate-pulse"></div>
          
          {/* Mock map roads/paths */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-blue-300/50 dark:bg-blue-500/30"></div>
          <div className="absolute top-0 bottom-0 left-1/3 w-[2px] bg-blue-300/50 dark:bg-blue-500/30"></div>
          <div className="absolute top-0 bottom-0 right-1/4 w-[2px] bg-blue-300/50 dark:bg-blue-500/30"></div>
          <div className="absolute bottom-1/4 left-0 right-0 h-[2px] bg-blue-300/50 dark:bg-blue-500/30"></div>
        </div>
      </div>
      
      {/* Map overlay with active point */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="relative">
          <div className="h-6 w-6 rounded-full bg-badminton-purple-600 animate-ping absolute inset-0"></div>
          <div className="h-6 w-6 rounded-full bg-badminton-purple-600 relative z-10"></div>
        </div>
      </div>
      
      {/* Map overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent dark:from-black/20 pointer-events-none"></div>
    </motion.div>
  );
};

export default CourtMap;
