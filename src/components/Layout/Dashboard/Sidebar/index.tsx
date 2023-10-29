'use client'

import { LogOut } from "lucide-react";
import ItemSidebar from "./ItemSidebar";

const DashboardSidebar = () => {
  
  return (
    <div
      className={`border-r hidden md:flex border-gray-300 pt-8 px-8  flex-col justify-between pb-10 transition-all h-full max-h-[979px] w-[300px]`}
    >
      <div className="flex flex-col items-center w-full">
        <h1 className="text-[28px] font-bold">BUKUTAMU LPSE</h1>
        <div className="mt-5">
          <ItemSidebar />
        </div>
      </div>
      <button className="ds-btn ds-btn-sm ds-btn-error text-white">
        <LogOut size={18} />
        Logout
      </button>
    </div>
  );
}

export default DashboardSidebar;