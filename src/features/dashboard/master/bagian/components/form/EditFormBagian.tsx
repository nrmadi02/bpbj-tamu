import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { EditBagianRequest, editBagianSchema } from "../../types/bagian.request";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";

export interface EditFormBagianProps {
  onCloseModal: () => void;
}

const EditFormBagian = ({ onCloseModal }: EditFormBagianProps) => {
  const form = useForm<EditBagianRequest>({
    mode: "all",
    defaultValues: {
      id: 1,
      name: "",
      description: "",
      linkWA: "",
      namaAlias: "",
    },
    resolver: zodResolver(editBagianSchema),
  });

  const onSubmit = (data: EditBagianRequest) => {
    console.log(data);
  };

  return (
    <div className="ds-modal-box">
      <h3 className="font-bold text-lg">Ubah Data Bagian</h3>
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
              <button type="button" onClick={() => {
                form.reset()
                onCloseModal();
              }} className="ds-btn">
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

export default EditFormBagian;
