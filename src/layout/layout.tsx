// src/layout/Layout.tsx
import  type { ReactNode } from "react";
import Navbar from '../components/navbar';
import Footer from '../components/ui/footer';


type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20 px-4 md:px-10">{children}</main>
      <Footer />
    </div>
  );
}
