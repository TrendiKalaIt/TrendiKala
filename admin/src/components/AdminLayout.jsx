// src/components/Layouts/AdminLayout.jsx
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
// import Logo from '../../assets/trendikala_logo_bg.png'

const AdminLayout = () => {
  return (
    <div className=" min-h-screen">
      {/*  Left Sidebar */}
        <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white">
          <a href="/">
            <img
              className="h-9"
              src="/trendikala_logo_bg.png"
              alt="Admin Logo"
            />
          </a>
          <div className="flex items-center gap-5 text-gray-500">
            <p>Hi! Admin</p>
            <button className="border rounded-full text-sm px-4 py-1">Logout</button>
          </div>
        </div>

      <Sidebar />

      {/*  Right Section: Navbar + Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
      
        {/* Main Content */}
        <main className="p-6 bg-white flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
