import LayoutClientProvider from "@/components/Layout/LayoutClientProvider";
import LoginPageContainer from "@/features/auth/login/components/LoginPageContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BPBJ | E-TAMU LOGIN",
  description:
    "Buku Tamu Elektronik Biro Pengadaan Barang dan Jasa Kalimantan Selatan",
};

const LoginPage = () => {
  return (
    <LayoutClientProvider>
      <LoginPageContainer />
    </LayoutClientProvider>
  );
}

export default LoginPage