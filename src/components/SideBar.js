import React from 'react';

const Sidebar = () => {
  return (
    <div className="h-screen w-16 bg-blue-900 flex flex-col items-center py-4 space-y-6">

      <div className="bg-orange-500 p-3 rounded-full">
        <img src="/path/to/top-icon.png" alt="Top Icon" className="w-6 h-6" />
      </div>

      <div className="flex flex-col space-y-6">
        <img src="/path/to/icon1.png" alt="Icon 1" className="w-6 h-6" />
        <img src="/path/to/icon2.png" alt="Icon 2" className="w-6 h-6" />
        <img src="/path/to/icon3.png" alt="Icon 3" className="w-6 h-6" />
        <img src="/path/to/icon4.png" alt="Icon 4" className="w-6 h-6" />
        <img src="/path/to/icon5.png" alt="Icon 5" className="w-6 h-6" />
        <img src="/path/to/icon6.png" alt="Icon 6" className="w-6 h-6" />
        <img src="/path/to/icon7.png" alt="Icon 7" className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Sidebar;
