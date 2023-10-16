import { z } from "zod";

export const stepFormOneSchema = z.object({
  nama: z.string().min(1, { message: "Nama harus diisi" }),
  alamat: z.string().min(1, { message: "Alamat harus diisi" }),
  nik: z.string().min(1, { message: "NIK harus diisi" }),
  suhu: z.string().min(1, { message: "Suhu harus diisi" }),
});

export const stepFormTwoSchema = z.object({
  nohp: z.string().min(1, { message: "Nomor HP harus diisi" }),
  nowa: z.string().min(1, { message: "Alamat harus diisi" }),
  email: z.string().email({ message: "Email tidak valid" }),
});

export const stepFormThreeSchema = z.object({
  gambar: z
    .custom<File>((v) => v instanceof File, {
      message: "Qris Static is required",
    })
    .nullable(),
});

export const stepFormFourSchema = z.object({
  instansi: z.string().min(1, { message: "Instansi harus diisi" }),
  unitkerja: z.string().min(1, { message: "Unit Kerja harus diisi" }),
  tanggal: z.string().min(1, { message: "Tanggal harus diisi" }),
  tujuan: z.string().min(1, { message: "Tujuan harus diisi" }),
});

export type StepFormOne = z.infer<typeof stepFormOneSchema>;
export type StepFormTwo = z.infer<typeof stepFormTwoSchema>;
export type StepFormThree = z.infer<typeof stepFormThreeSchema>;
export type StepFormFour = z.infer<typeof stepFormFourSchema>;
