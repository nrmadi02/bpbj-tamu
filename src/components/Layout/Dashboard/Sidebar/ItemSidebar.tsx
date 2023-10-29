'use client'

import {
  BarChart,
  DatabaseIcon,
  HomeIcon,
  User,
  Users2Icon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


const ItemSidebar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "ds-active" : "";
  };
  return (
    <ul className="ds-menu w-60 gap-2 rounded-box">
      <li>
        <Link href={"/dashboard"} className={`${isActive("/dashboard")}`}>
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </Link>
      </li>
      <li>
        <details open={pathname.includes("/dashboard/master")}>
          <summary>
            <DatabaseIcon className="h-5 w-5" />
            Master Data
          </summary>
          <ul>
            <li>
              <Link
                className={`${isActive("/dashboard/master/bagian")}`}
                href={"/dashboard/master/bagian"}
              >
                Bagian
              </Link>
            </li>
            <li className={`${isActive("/dashboard/master/subag")}`}>
              <a>Subag</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a className={`${isActive("/dashboard/laporan")}`}>
          <BarChart className="h-5 w-5" />
          <p>Laporan</p>
        </a>
      </li>
      <li>
        <details>
          <summary>
            <Users2Icon className="h-5 w-5" />
            Users Manage
          </summary>
          <ul>
            <li className={`${isActive("/dashboard/users")}`}>
              <a>Users</a>
            </li>
            <li className={`${isActive("/dashboard/users/ability")}`}>
              <a>Ability</a>
            </li>
            <li className={`${isActive("/dashboard/users/roles")}`}>
              <a>Roles</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a className={`${isActive("/dashboard/profile")}`}>
          <User className="h-5 w-5" />
          <p>Profile</p>
        </a>
      </li>
    </ul>
  );
};

export default ItemSidebar