"use client";

import { useStepForm } from "@/slice/stepFormSlice";
import { AES, enc } from "crypto-js";
import { Check } from "lucide-react";
import { redirect, useParams } from "next/navigation";
import toast from "react-hot-toast";
import { QRCode } from "react-qrcode-logo";

const SuccessGuest = () => {
  const params = useParams<{
    token: string;
  }>();

  const decodeToken = () => {
    const decodedStr = decodeURIComponent(params.token);
    return AES.decrypt(decodedStr, "12345").toString(enc.Utf8);
  };

  if (decodeToken() === "") {
    redirect("/guest");
  }

  const downloadQRCode = () => {
    const canvas = document.querySelector("canvas");
    const pngUrl = canvas
      ?.toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl || "";
    downloadLink.download = "qr-code.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="container mx-auto pb-[100px]">
      <h1 className="text-lg font-bold">Buku Tamu LPSE</h1>
      <div className="w-full mt-5 md:px-5 py-5 flex flex-col items-center justify-center">
        <div className="w-full md:w-[400px] px-5 flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
            <Check className="text-white h-10 w-10" />
          </div>
          <h1 className="text-lg font-bold mt-5">Terima Kasih</h1>
          <p className="text-sm text-neutral-500">
            Anda telah berhasil mengisi buku tamu
          </p>
          <div
            onClick={() => {
              navigator.clipboard.writeText(decodeToken());
              toast.success("Success copy to clipboard");
            }}
            className="w-max mt-5 cursor-pointer bg-indigo-100 rounded-md border-[1px] border-indigo-500"
          >
            <p className="text-3xl font-bold text-primary tracking-[20px] pl-5">
              {decodeToken()}
            </p>
          </div>
          <div>
            <p className="text-sm text-center text-neutral-500 mt-5">
              Tunjukan kode tersebut pada petugas atau helpdesk kami. Anda juga
              dapat menggunakan QR Code berikut untuk di tunjukan kepetugas.
            </p>
          </div>
          <div className="mt-5">
            <QRCode id="qr-code" value={decodeToken()} />
          </div>
          <button onClick={downloadQRCode} className="ds-btn ds-btn-primary mt-3">Download QR</button>
        </div>
      </div>
    </div>
  );
};

export default SuccessGuest;
