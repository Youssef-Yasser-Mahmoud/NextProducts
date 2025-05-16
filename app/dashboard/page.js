'use client';

import { useState, useEffect } from 'react';
import Nav from '../components/Nav';

export default function DashboardPage() {
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalRevenue: 0,
    activeUsers: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an API call
    const fetchDashboardData = async () => {
      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock data
        setStats({
          totalOrders: 156,
          totalRevenue: 45678.9,
          activeUsers: 89,
        });
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className='min-h-screen bg-gray-50 flex justify-center items-center'>
        <div className='animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600'></div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <Nav />
      <main className='container mx-auto px-4 py-12'>
        <h1 className='text-3xl font-bold text-gray-900 mb-8'>Dashboard</h1>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-white p-6 rounded-xl shadow-md'>
            <h2 className='text-lg font-semibold text-gray-600 mb-2'>Total Orders</h2>
            <p className='text-3xl font-bold text-gray-900'>{stats.totalOrders}</p>
          </div>

          <div className='bg-white p-6 rounded-xl shadow-md'>
            <h2 className='text-lg font-semibold text-gray-600 mb-2'>Total Revenue</h2>
            <p className='text-3xl font-bold text-gray-900'>${stats.totalRevenue.toLocaleString()}</p>
          </div>

          <div className='bg-white p-6 rounded-xl shadow-md'>
            <h2 className='text-lg font-semibold text-gray-600 mb-2'>Active Users</h2>
            <p className='text-3xl font-bold text-gray-900'>{stats.activeUsers}</p>
          </div>
        </div>

        <div className='mt-8 bg-white p-6 rounded-xl shadow-md'>
          <h2 className='text-xl font-semibold text-gray-900 mb-4'>Recent Activity</h2>
          <div className='space-y-4'>
            <div className='flex items-center justify-between p-4 bg-gray-50 rounded-lg'>
              <div>
                <p className='font-medium text-gray-900'>New order received</p>
                <p className='text-sm text-gray-600'>Order #12345</p>
              </div>
              <span className='text-sm text-gray-500'>2 minutes ago</span>
            </div>

            <div className='flex items-center justify-between p-4 bg-gray-50 rounded-lg'>
              <div>
                <p className='font-medium text-gray-900'>User registration</p>
                <p className='text-sm text-gray-600'>New user joined</p>
              </div>
              <span className='text-sm text-gray-500'>15 minutes ago</span>
            </div>

            <div className='flex items-center justify-between p-4 bg-gray-50 rounded-lg'>
              <div>
                <p className='font-medium text-gray-900'>Payment received</p>
                <p className='text-sm text-gray-600'>$299.99</p>
              </div>
              <span className='text-sm text-gray-500'>1 hour ago</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
