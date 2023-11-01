import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { IBagian } from "../../../bagian/types/bagian.model";

export interface EditSubagFormProps {
  onCloseModal: () => void;
}

const data: IBagian[] = [
  {
    id: 1,
    nama: "TAMU KEPALA BIRO",
    decriptions: "TAMU KEPALA BIRO",
    linkWA: "https://wa.me/628123456789",
    username: "Doni",
  },
  {
    id: 2,
    nama: "BAGIAN PENGELOLAAN LAYANAN PENGADAAN SECARA ELEKTRONIK",
    decriptions: "BAGIAN PENGELOLAAN LAYANAN PENGADAAN SECARA ELEKTRONIK",
    linkWA: "https://wa.me/628123456789",
    username: "Dody",
  },
  {
    id: 3,
    nama: "BAGIAN PEMBINAAN DAN ADVOKASI PENGADAAN BARANG DAN JASA",
    decriptions: "BAGIAN PEMBINAAN DAN ADVOKASI PENGADAAN BARANG DAN JASA",
    linkWA: "https://wa.me/628123456789",
    username: "Ferdy",
  },
  {
    id: 3,
    nama: "BAGIAN PENGELOLAAN PENGADAAN BARANG DAN JASA",
    decriptions: "BAGIAN PENGELOLAAN PENGADAAN BARANG DAN JASA",
    linkWA: "https://wa.me/628123456789",
    username: "Wahyu",
  },
];

const EditSubagForm = ({ onCloseModal }: EditSubagFormProps) => {
  const form = useForm();

  return (
    <div className="ds-modal-box">
      <h3 className="font-bold text-lg">Edit Data Sub. Bagian</h3>
      <div className="ds-modal-action">
        <Form {...form}>
          {/* if there is a button in form, it will close the modal */}
          <form
            onSubmit={form.handleSubmit((e) => console.log(e))}
            className="flex flex-col w-full gap-5"
          >
            <div className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Sub. Bagian</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Masukkan nama sub. bagian"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bagian"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Bagian</FormLabel>
                    <select
                      onChange={(e) => field.onChange(e)}
                      className="ds-select ds-select-bordered w-full ds-select-sm"
                    >
                      {data.map((item) => {
                        return (
                          <option key={item.id} value={item.id}>
                            {item.nama}
                          </option>
                        );
                      })}
                    </select>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    form.reset();
                    onCloseModal();
                  }}
                  className="ds-btn"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="ds-btn ds-btn-success text-white"
                >
                  Simpan
                </button>
              </div>
              <button
                type="button"
                className="ds-btn ds-btn-error text-white"
              >
                Hapus Data
              </button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default EditSubagForm;
