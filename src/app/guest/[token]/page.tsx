import LayoutClientProvider from "@/components/Layout/LayoutClientProvider";
import Navbar from "@/components/Navbar";
import SuccessGuest from "@/components/SuccessGuest";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BPBJ | Buku Tamu",
  description:
    "Buku Tamu Elektronik Biro Pengadaan Barang dan Jasa Kalimantan Selatan",
};

export default function GuestSuccess() {
  return (
    <LayoutClientProvider>
      <main className="min-h-screen relative">
        <Navbar title="BPBJ - BUKU TAMU" isNavigation={false} />
        <div className="pt-5 md:pt-10 pb-20">
          <SuccessGuest />
        </div>
        <footer className="ds-footer absolute bottom-0 ds-footer-center p-4 bg-base-300 text-base-content">
          <aside>
            <p>
              © {new Date().getFullYear()} LPSE - Provinsi Kalimantan Selatan
            </p>
          </aside>
        </footer>
      </main>
    </LayoutClientProvider>
  );
}
