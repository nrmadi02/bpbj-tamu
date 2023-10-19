import { IBidang } from "@/types/bidang.model";
import { GuestRequest } from "@/types/guest.model";
import { Response } from "@/types/response";
import axios from "axios";

export const getBidangGuest = async () => {
  const response = await axios.get<Response<Array<IBidang>>>(
    "/api/bidang",
    {
      headers: {
        "Content-Type": "application/json",
      }
    }
  );

  return response.data;
};

export const addGuest = async (data: GuestRequest) => {
  const form = new FormData();

  form.append("nama", data.nama);
  form.append("nik", data.nik.toString());
  form.append("email", data.email);
  form.append("instansi", data.instansi);
  form.append("hp", data.hp);
  form.append("whatsapp", data.whatsapp);
  form.append("bagian_id", data.bagian_id.toString());
  form.append("tujuan", data.tujuan);
  form.append("alamat", data.alamat);
  form.append("tanggal", data.tanggal);
  form.append("suhu", data.suhu.toString());
  
  data.image && form.append("image", data.image);

  const response = await axios.post<Response<string>>(
    "/api/guest",
    form,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};
