import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { AddBagianRequest, addBagianSchema } from "../../types/bagian.request";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";

export interface AddFormBagianProps {
  onCloseModal: () => void;
}

const AddFormBagian = ({ onCloseModal }: AddFormBagianProps) => {
  const form = useForm<AddBagianRequest>({
    mode: "all",
    defaultValues: {
      name: "",
      description: "",
      linkWA: "",
      namaAlias: "",
    },
    resolver: zodResolver(addBagianSchema)
  });

  const onSubmit = (data: AddBagianRequest) => {
    console.log(data);
  }
  return (
    <div className="ds-modal-box">
      <h3 className="font-bold text-lg">Tambah Data Bagian</h3>
      <div className="ds-modal-action">
        <Form {...form}>
          {/* if there is a button in form, it will close the modal */}
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col w-full gap-5"
          >
            <div className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Bagian</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Masukkan nama bagian"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Deskripsi bagian</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Masukkan deskripsi bagian"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="linkWA"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Link Whatsapp</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Masukkan link whatsapp"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="namaAlias"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Alias</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Masukkan nama alias"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
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
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AddFormBagian;
