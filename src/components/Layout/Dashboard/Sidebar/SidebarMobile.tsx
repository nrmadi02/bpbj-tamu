"use client";

import { LogOut, Menu } from "lucide-react";
import ItemSidebar from "./ItemSidebar";

const SidebarMobile = () => {

  return (
    <div className="ds-drawer md:hidden">
      <input id="my-drawer" type="checkbox" className="ds-drawer-toggle" />
      <div className="ds-drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="ds-btn ds-btn-primary ds-btn-sm ds-drawer-button"
        >
          <Menu size={16} />
        </label>
      </div>
      <div className="ds-drawer-side z-50">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="ds-drawer-overlay"
        ></label>
        <div className="bg-white h-full flex flex-col justify-between py-10 px-5">
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
      </div>
    </div>
  );
};

export default SidebarMobile;
