import React from 'react';

function SummaryCard({ title, count }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-3xl font-semibold">{count}</p>
    </div>
  );
}

export default SummaryCard;
