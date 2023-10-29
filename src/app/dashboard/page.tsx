import DashboardHomeContainer from "@/features/dashboard/home/components/DashboardHomeContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BPBJ | Dahsboard",
  description:
    "Buku Tamu Elektronik Biro Pengadaan Barang dan Jasa Kalimantan Selatan",
};


export default function DashboardPage() {
  return (
    <DashboardHomeContainer />
  )
}