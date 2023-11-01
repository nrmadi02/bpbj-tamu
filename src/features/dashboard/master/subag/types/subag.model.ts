import { IBagian } from "../../bagian/types/bagian.model";

export interface ISubag {
  id: number;
  bagian: IBagian;
  subbag: Array<{
    id: number;
    nama: string;
  }>
}