import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useStepForm } from "@/slice/stepFormSlice";
import { StepFormFour, stepFormFourSchema } from "@/types/guestbook.request";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const StepFour = () => {
  const { setData, stepFour, stepOne, stepThree, stepTwo, setCurrentStep } =
    useStepForm();

  const form = useForm<StepFormFour>({
    resolver: zodResolver(stepFormFourSchema),
    mode: "onSubmit",
    defaultValues: stepFour
      ? stepFour
      : {
          instansi: "",
          unitkerja: "",
          tujuan: "",
          tanggal: "",
        },
  });

  function onSubmit(values: StepFormFour) {
    setData({
      data: values,
      step: 4,
    });
    console.log({
      ...stepOne,
      ...stepTwo,
      ...stepThree,
      ...values,
    });

    toast.success("Data berhasil dikirim");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-5"
      >
        <FormField
          control={form.control}
          name="instansi"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Asal Instansi/Perusahaan/Perseorangan</FormLabel>
              <FormControl>
                <Input placeholder="Masukan instansi anda" {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tanggal"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tanggal Kunjungan</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  placeholder="Masukan tanggal kunjungan anda"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="unitkerja"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pilih Unit Kerja Tujuan</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih unit kerja" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem
                    className="focus:!bg-primary focus:!text-white cursor-pointer"
                    value="1"
                  >
                    TAMU KEPALA BIRO
                  </SelectItem>
                  <SelectItem
                    className="focus:!bg-primary focus:!text-white cursor-pointer"
                    value="2"
                  >
                    BAGIAN PENGELOLAAN LAYANAN PENGADAAN SECARA ELEKTRONIK
                  </SelectItem>
                  <SelectItem
                    className="focus:!bg-primary focus:!text-white cursor-pointer"
                    value="3"
                  >
                    BAGIAN PEMBINAAN DAN ADVOKASI PENGADAAN BARANG DAN JASA
                  </SelectItem>
                  <SelectItem
                    className="focus:!bg-primary focus:!text-white cursor-pointer"
                    value="4"
                  >
                    BAGIAN PENGELOLAAN PENGADAAN BARANG DAN JASA
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tujuan"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tujuan Bertemu</FormLabel>
              <FormControl>
                <Textarea placeholder="Masukan tujuan" {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <div className="col-span-1 md:col-span-2 flex justify-end mt-3">
          <div className="flex items-center gap-2">
            <button
              className="ds-btn w-max ds-btn-sm  ds-btn-secondary ds-btn-outline"
              onClick={() => setCurrentStep(3)}
              type="button"
            >
              Back
            </button>
            <button
              disabled={!form.formState.isValid}
              type="submit"
              className="ds-btn w-max ds-btn-sm ds-btn-primary"
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default StepFour;
