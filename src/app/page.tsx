import BannerHome from "@/components/BannerHome";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "BPBJ | E-TAMU",
  description:
    "Buku Tamu Elektronik Biro Pengadaan Barang dan Jasa Kalimantan Selatan",
};

export default function Home() {
  return (
    <main>
      <Navbar title="E-TAMU" />
      <div id="home" className="ds-hero h-auto pb-10">
        <BannerHome />
      </div>
      <div
        id="tata-cara"
        className="ds-hero h-auto pb-10 bg-primary text-white pt-10"
      >
        <div className="ds-hero-content flex-col text-center">
          <div className="max-w-3xl">
            <h1 className="text-xl md:text-3xl font-bold">
              Tatacara Penggunaan E-Tamu
            </h1>
            <p className="py-1 text-sm">
              Berikut ini tatacara penggunaan E-Tamu, mudah kok yuk ikuti
              step-stepnya
            </p>
          </div>
          <div className="px-5 md:px-0 grid mt-10 gap-10 grid-cols-1  md:grid-cols-3 ">
            <div className="col-span-1 h-[300px] rounded-xl bg-white w-full md:w-[250px] flex items-center flex-col px-3 py-2">
              <Image
                alt="_ckls-home"
                height={100}
                width={100}
                className="w-[100px] h-auto"
                src={"/images/ceklis.jpg"}
                loading="lazy"
                quality={60}
              />
              <div className="mt-4">
                <p className="text-neutral-700 font-bold px-3">Mengisi Form</p>
                <p className="text-neutral-600 text-justify text-sm px-3 mt-3">
                  Tamu mengisi form yang berisi identitas diri, kontak, photo,
                  dan tujuan bertamu.
                </p>
              </div>
            </div>
            <div className="col-span-1 h-[300px] rounded-xl bg-white w-full md:w-[250px] flex items-center flex-col px-3 py-2">
              <Image
                alt="_ckls-home"
                height={100}
                width={100}
                className="w-[100px] h-auto"
                src={"/images/qr.jpg"}
              />
              <div className="mt-4">
                <p className="text-neutral-700 px-3 font-bold">
                  Mencatat/Mengunduh Tiket
                </p>
                <p className="text-neutral-600 text-justify text-sm px-3 mt-3">
                  Jika pengisian buku tamu selesai. Maka halaman akan
                  menampilkan QrCode yang berisi Token Tiket Untuk ditunjukkan
                  kepada petugas (helpdesk) LPSE.
                </p>
              </div>
            </div>
            <div className="col-span-1 h-[300px] rounded-xl bg-white  w-full md:w-[250px]  flex items-center flex-col px-3 py-2">
              <Image
                alt="_ckls-home"
                height={100}
                width={100}
                className="w-[100px] h-auto"
                src={"/images/service.jpg"}
              />
              <div>
                <p className="text-neutral-700 px-3 font-bold">
                  Memberikan Tanggapan Layanan
                </p>
                <p className="text-neutral-600 text-justify text-sm px-3 mt-2">
                  Jika Kunjungan telah selesai. Maka Tamu akan menerima
                  Email/Whatsapp yang berisi link untuk penilaian kepuasan
                  layanan yang diberikan oleh Heldesk kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="testimoni" className="h-auto pb-10 pt-10">
        <Reviews />
      </div>
      <div id="kontak" className="ds-hero h-auto pb-10 pt-10 px-5">
        <div className="ds-hero-content flex-col text-center">
          <div className="max-w-3xl">
            <h1 className="text-xl md:text-3xl font-bold">Kontak</h1>
            <p className="py-1 text-sm">Kontak Helpdesk Yang Dapat Dihubungi</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-10 mt-5 md:mt-10">
            <div className="col-span-1 bg-base-200 rounded-lg overflow-hidden flex-col justify-between flex">
              <div className="w-full px-5 py-3">
                <p className="text-xl font-bold">TAMU KEPALA BIRO</p>
              </div>
              <div className="flex flex-col items-center mt-5 justify-center">
                <Image
                  alt="wa"
                  height={50}
                  width={50}
                  className="w-[50px] h-auto"
                  src={"/images/icon-wa.webp"}
                />
                <p className="text-center mt-3 font-bold text-sm text-neutral-500">
                  Doni
                </p>
              </div>
              <a
                target="_blank"
                href="https://wa.link/qr9pbl"
                className="ds-btn ds-btn-success text-white mt-5 w-full"
              >
                Hubungi Sekarang
              </a>
            </div>
            <div className="col-span-1 bg-base-200 rounded-lg overflow-hidden flex-col justify-between flex">
              <div className="w-full px-5 py-3">
                <p className="text-xl font-bold">
                  BAGIAN PENGELOLAAN LAYANAN PENGADAAN SECARA ELEKTRONIK
                </p>
              </div>
              <div className="flex flex-col items-center mt-5 justify-center">
                <Image
                  alt="wa"
                  height={50}
                  width={50}
                  className="w-[50px] h-auto"
                  src={"/images/icon-wa.webp"}
                />
                <p className="text-center font-bold mt-3 text-sm text-neutral-500">
                  Dody
                </p>
              </div>
              <a
                target="_blank"
                href="https://wa.link/4hgcu6"
                className="ds-btn ds-btn-success text-white mt-5 w-full"
              >
                Hubungi Sekarang
              </a>
            </div>
            <div className="col-span-1 bg-base-200 rounded-lg overflow-hidden flex-col justify-between flex">
              <div className="w-full px-5 py-3">
                <p className="text-xl font-bold">
                  BAGIAN PEMBINAAN DAN ADVOKASI PENGADAAN BARANG DAN JASA
                </p>
              </div>
              <div className="flex flex-col items-center mt-5 justify-center">
                <Image
                  alt="wa"
                  height={50}
                  width={50}
                  className="w-[50px] h-auto"
                  src={"/images/icon-wa.webp"}
                />
                <p className="text-center font-bold text-sm mt-3 text-neutral-500">
                  Ferdi
                </p>
              </div>
              <a
                target="_blank"
                href="https://wa.link/chgcaq"
                className="ds-btn ds-btn-success text-white mt-5 w-full"
              >
                Hubungi Sekarang
              </a>
            </div>
            <div className="col-span-1 bg-base-200 rounded-lg overflow-hidden flex-col justify-between flex">
              <div className="w-full px-5 py-3">
                <p className="text-xl font-bold ">
                  BAGIAN PENGELOLAAN PENGADAAN BARANG DAN JASA
                </p>
              </div>
              <div className="flex flex-col items-center mt-5 justify-center">
                <Image
                  alt="wa"
                  height={50}
                  width={50}
                  className="w-[50px] h-auto"
                  src={"/images/icon-wa.webp"}
                />
                <p className="text-center font-bold text-sm mt-3 text-neutral-500">
                  Wahyu
                </p>
              </div>
              <a
                target="_blank"
                href="https://wa.link/k9c0w7"
                className="ds-btn ds-btn-success text-white mt-5 w-full"
              >
                Hubungi Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="support" className="ds-hero h-auto pb-10 pt-5">
        <div className="ds-hero-content flex-col text-center">
          <div className="max-w-3xl">
            <h1 className="text-xl md:text-3xl font-bold">Diberdayakan Oleh</h1>
            <div className="flex items-center justify-center">
              <Image
                width={200}
                height={200}
                className="w-[200px]"
                alt="lpse"
                src={"/images/lpse.jpg"}
              />
            </div>
            <p>LPSE Provinsi Kalimantan Selatan</p>
          </div>
        </div>
      </div>
      <Footer />
      <footer className="ds-footer ds-footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>© {new Date().getFullYear()} LPSE - Provinsi Kalimantan Selatan</p>
        </aside>
      </footer>
    </main>
  );
}
