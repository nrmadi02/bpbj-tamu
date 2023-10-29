import LayoutDashboardContainer from "@/components/Layout/Dashboard/LayoutDashboardContainer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutDashboardContainer>{children}</LayoutDashboardContainer>;
}
