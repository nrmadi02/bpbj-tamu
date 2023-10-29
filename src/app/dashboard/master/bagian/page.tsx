import MasterBagianContainer from "@/features/dashboard/master/bagian/components/MasterBagianContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BPBJ | Master-Bagian",
  description:
    "Buku Tamu Elektronik Biro Pengadaan Barang dan Jasa Kalimantan Selatan",
};

export default function DashboardPage() {
  return <MasterBagianContainer />;
}
