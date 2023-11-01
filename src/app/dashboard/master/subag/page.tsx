import MasterSubagContainer from "@/features/dashboard/master/subag/components/MasterSubagContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BPBJ | Master-Subag",
  description:
    "Buku Tamu Elektronik Biro Pengadaan Barang dan Jasa Kalimantan Selatan",
};

export default function DashboardPage() {
  return <MasterSubagContainer />;
}
