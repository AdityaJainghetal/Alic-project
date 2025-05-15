import React, { useState } from 'react';
import {
  FiHome,
  FiBook,
  FiHelpCircle,
  FiMail,
  FiUserPlus,
  FiFileText,
  FiChevronLeft,
  FiChevronRight,
  FiSettings,
  FiLogOut,
  FiUser
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('Dashboard');

  const menuItems = [
    { to: "/dashboard", name: 'Dashboard', icon: <FiHome /> },
    {
      name: 'Courses',
      icon: <FiBook />,
      subItems: [
        { name: 'My Courses', to: '/courses' },
        { name: 'All Courses', to: '/allcourse' },

      ]
    },
   
  
   



    
    {
      name: 'Banner',
      icon: <FiHelpCircle />,
      subItems: [
        { to: "/banner", name: 'Banner', icon: <FiFileText /> },
        { to: "/allbanner", name: 'AllBanner', icon: <FiFileText /> },

      ]
    },
    {
      name: 'SucessStory',
      icon: <FiMail />,
      subItems: [
        { name: 'SucessStory', to: '/sucessStory' },
        { name: 'SuccessStory Display', to: '/sucessStorydisplay' },
      ]
    }
  ];

  const toggleSidebar = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div className={`flex flex-col h-screen bg-gray-800 text-white transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'}`}>
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {!collapsed && <h1 className="text-xl font-bold">EduPortal</h1>}
        <button onClick={toggleSidebar} className="p-1 rounded-lg hover:bg-gray-700">
          {collapsed ? <FiChevronRight size={20} /> : <FiChevronLeft size={20} />}
        </button>
      </div>

      {/* Sidebar Menu */}
      <nav className="flex-1 overflow-y-auto scrollbar-hide">
        <ul className="space-y-2 p-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              {item.to ? (
                <Link
                  to={item.to}
                  className={`flex items-center p-3 rounded-lg cursor-pointer hover:bg-gray-700 ${activeItem === item.name ? 'bg-gray-700' : ''}`}
                  onClick={() => setActiveItem(item.name)}
                >
                  <span className="text-lg">{item.icon}</span>
                  {!collapsed && <span className="ml-3">{item.name}</span>}
                </Link>
              ) : (
                <div
                  className={`flex items-center p-3 rounded-lg cursor-pointer hover:bg-gray-700 ${activeItem === item.name ? 'bg-gray-700' : ''}`}
                  onClick={() => setActiveItem(item.name)}
                >
                  <span className="text-lg">{item.icon}</span>
                  {!collapsed && <span className="ml-3">{item.name}</span>}
                </div>
              )}

              {/* Sub-items */}
              {!collapsed && item.subItems && (
                <ul className="ml-8 mt-1 space-y-1">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.name}>
                      <Link
                        to={subItem.to}
                        className="block p-2 text-sm rounded-lg hover:bg-gray-700"
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
            <FiUser />
          </div>
          {!collapsed && (
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-400">Student</p>
            </div>
          )}
        </div>

        {!collapsed && (
          <div className="flex justify-between mt-4">
            <button className="p-2 rounded-lg hover:bg-gray-700">
              <FiSettings />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-700">
              <FiLogOut />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
