import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
    
      <header className="bg-white py-4 shadow-md border-b border-gray-200">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-blue-900">
            Recetas - <span className="font-normal">Gusteau's</span>
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 flex-grow">
        <Outlet />
      </main>

    
      <Footer />
    </div>
  );
};

export default Dashboard;

