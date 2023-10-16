'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

const BannerHome = () => {
  const router = useRouter()
  return (
    <div className="ds-hero-content text-center">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-10 md:leading-[60px]">
          Selamat Datang di Buku Tamu Elektronik Biro Pengadaan Barang dan Jasa
          Setda Provinsi Kalimantan Selatan
        </h1>
        <p className="py-6">
          ETAMU adalah alat bantu untuk mengetahui seberapa banyak pengunjung
          datang ke Biro Pengadaan Barang dan Jasa (BPBJ) Setda Provinsi
          Kalimantan Selatan.
        </p>
        <div className="flex items-center justify-center">
          <Image
            width={500}
            height={500}
            className="w-[500px]"
            alt="ilustration"
            src={"/images/e-tamu-ilus.svg"}
          />
        </div>
        <button
          onClick={() => router.push("/guest")}
          className="ds-btn ds-btn-primary"
        >
          Isi Buku Tamu Sekarang
        </button>
      </div>
    </div>
  );
}

export default BannerHome;