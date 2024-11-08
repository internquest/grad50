"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

