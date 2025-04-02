
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-accent py-4 px-6 flex items-center justify-between">
        <h1 className="text-xl font-bold">Video Streamer</h1>
      </header>
      
      <main className="flex-1 container mx-auto p-4 md:p-6">
        {children}
      </main>
      
      <footer className="bg-accent py-3 px-6 text-sm text-center text-muted-foreground">
        <p>Video Streaming App © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
