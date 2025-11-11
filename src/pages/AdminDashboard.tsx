import React from 'react';

const AdminDashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>
      <div className="p-8 bg-white rounded-lg shadow-md">
        <p>Welcome to the admin panel. Use the sidebar to navigate.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;