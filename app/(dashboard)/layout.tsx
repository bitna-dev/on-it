import Sidebar from '@components/layout/Sidebar';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-secondary/10 p-6 ml-64">{children}</main>
    </div>
  );
};

export default layout;
