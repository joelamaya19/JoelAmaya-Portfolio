import React from 'react';
import NavTabs from './NavTabs';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavTabs />
      <main className="flex-grow bg-gray-100">
        <div className="container mx-auto px-4 py-8">{children}</div>
      </main>
      <footer className="bg-gray-800 text-white text-center p-4">
        © 2024 Joel Amaya's Portfolio
      </footer>
    </div>
  );
}

export default Layout;
