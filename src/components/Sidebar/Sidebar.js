import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-blue-600 m-6 rounded-3xl">
          <ul className="space-y-2 font-medium mt-48">
            <li>
              <Link
                to="/profile"
                className="flex items-center p-2 text-white rounded-lg hover:bg-blue-100 hover:text-blue-900 border-b-2"
              >
                <span className="ml-3">Profile</span>
              </Link>
            </li>
            <li>
            <Link
                to="/posts"
                className="flex items-center p-2 border-b-2 text-white rounded-lg group hover:bg-blue-100 hover:text-blue-900"
              >
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Posts
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="flex items-center p-2 border-b-2 text-white rounded-lg group hover:bg-blue-100 hover:text-blue-900"
              >
                <span className="flex-1 ml-3 whitespace-nowrap">Gallery</span>
              </Link>
            </li>
            <li>
              <Link
                to="/todo"
                className="flex items-center p-2 border-b-2 text-white rounded-lg group hover:bg-blue-100 hover:text-blue-900"
              >
                <span className="flex-1 ml-3 whitespace-nowrap">To Do</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
