"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface NavbarProps {
  title: string;
  isNavigation?: boolean;
}

const Navbar = ({ title, isNavigation = true }: NavbarProps) => {
  const router = useRouter()
  return (
    <div className="ds-navbar bg-white px-3 md:px-10  py-2 md:py-3 sticky top-0 z-40">
      <div className="ds-navbar-start">
        {isNavigation && (
          <div className="ds-dropdown">
            <label
              tabIndex={0}
              className="ds-btn ds-btn-ghost ds-btn-sm lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="ds-menu gap-3 ds-menu-sm ds-dropdown-content text-primary mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href={"#home"}>Home</Link>
              </li>
              <li>
                <Link href={"#tata-cara"}>Petunjuk Penggunaan</Link>
              </li>
              <li>
                <Link href={"#kontak"}>Kontak</Link>
              </li>
              <li>
                <button
                  onClick={() => router.push("/guest")}
                  className="ds-btn ds-btn-outline ds-btn-primary ds-btn-sm"
                >
                  Isi Buku Tamu
                </button>
              </li>
            </ul>
          </div>
        )}
        <button
          onClick={() => router.push("/")}
          className="ds-btn ds-btn-ghost flex gap-2 items-center"
        >
          <Image
            alt="-logo-bpjp"
            src={"/images/bpbj.png"}
            width={300}
            height={60}
            className="w-[100px] h-[20px] md:w-[250px] md:h-[40px]"
          />
          <h1 className="text-base md:text-2xl font-bold text-neutral-600">
            {title}
          </h1>
        </button>
      </div>
      {isNavigation && (
        <div className="ds-navbar-end gap-5 items-center">
          <ul className="ds-menu ds-menu-horizontal px-1 hidden lg:flex">
            <li>
              <Link href={"#home"}>Home</Link>
            </li>
            <li>
              <Link href={"#tata-cara"}>Petunjuk Penggunaan</Link>
            </li>
            <li>
              <Link href={"#kontak"}>Kontak</Link>
            </li>
          </ul>
          <button
            onClick={() => router.push("/guest")}
            className="ds-btn ds-btn-primary ds-btn-outline hidden lg:flex"
          >
            Isi Buku Tamu
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
