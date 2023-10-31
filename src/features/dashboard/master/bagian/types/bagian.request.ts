import { z } from "zod";

export const addBagianSchema = z.object({
  name: z.string().min(1, {
    message: "Nama bagian tidak boleh kosong",
  }),
  description: z.string().min(1, {
    message: "Deskripsi bagian tidak boleh kosong",
  }),
  linkWA: z.string().min(1, {
    message: "Link WA bagian tidak boleh kosong",
  }),
  namaAlias: z.string().min(1, {
    message: "Nama alias bagian tidak boleh kosong",
  }),
});

export const editBagianSchema = z.object({
  id: z.number().min(1, {
    message: "ID bagian tidak boleh kosong",
  }),
  name: z.string().min(1, {
    message: "Nama bagian tidak boleh kosong",
  }),
  description: z.string().min(1, {
    message: "Deskripsi bagian tidak boleh kosong",
  }),
  linkWA: z.string().min(1, {
    message: "Link WA bagian tidak boleh kosong",
  }),
  namaAlias: z.string().min(1, {
    message: "Nama alias bagian tidak boleh kosong",
  }),
});


export type EditBagianRequest = z.infer<typeof editBagianSchema>;
export type AddBagianRequest = z.infer<typeof addBagianSchema>;
