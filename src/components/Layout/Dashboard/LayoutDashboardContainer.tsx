import { PropsWithChildren } from "react";
import DashboardSidebar from "./Sidebar";
import SidebarMobile from "./Sidebar/SidebarMobile";

const LayoutDashboardContainer = ({children}:PropsWithChildren) => {
  return (
    <div className="flex h-screen w-full font-poppins overflow-auto overflow-x-hidden">
      <div className="relative flex h-full w-full flex-col md:flex-row">
        <div className="shrink-0">
          <DashboardSidebar />
        </div>
        <div className="h-full w-full overflow-auto pt-[24px] pb-[30px]">
          <div className="px-5 mb-3">
            <SidebarMobile />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default LayoutDashboardContainer;