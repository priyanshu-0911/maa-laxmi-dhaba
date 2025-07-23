// src/components/OpeningStatus.jsx

import { useState, useEffect } from 'react';

export default function OpeningStatus() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkOpeningStatus = () => {
      // Get the current date and time in the Indian Standard Time (IST) timezone
      const now = new Date();
      const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', hour12: false };
      const currentHour = parseInt(new Intl.DateTimeFormat('en-US', options).format(now), 10);

      // Restaurant hours are 11 AM (11) to 11 PM (23)
      if (currentHour >= 11 && currentHour < 23) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    checkOpeningStatus();
    // Check every minute to keep it updated
    const interval = setInterval(checkOpeningStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 text-sm">
      {isOpen ? (
        <>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-green-400">We're Open!</span>
        </>
      ) : (
        <>
          <span className="relative flex h-3 w-3">
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          <span className="text-red-500">Currently Closed</span>
        </>
      )}
    </div>
  );
}