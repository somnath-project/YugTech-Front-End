import { Link } from 'react-router-dom';
import React from 'react';

export const PageLayout = ({ title, effectiveDate, children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
        <Link to="/" className="text-gray-600 hover:text-gray-800">
            ← Back to Home
          </Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <div className="border-b border-gray-200 pb-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            <p className="mt-2 text-sm text-gray-500">
              Effective: {effectiveDate}
            </p>
          </div>
          
          <div className="prose max-w-none">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};