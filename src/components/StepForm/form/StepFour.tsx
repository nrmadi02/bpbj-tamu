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
import { addGuest, getBidangGuest } from "@/services/guest.service";
import { useStepForm } from "@/slice/stepFormSlice";
import { GuestRequest } from "@/types/guest.model";
import { StepFormFour, stepFormFourSchema } from "@/types/guestbook.request";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AES } from "crypto-js";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const StepFour = () => {
  const {
    setData,
    stepFour,
    setCurrentStep,
    stepOne,
    stepThree,
    setDataNull,
    stepTwo,
  } = useStepForm();

  const router = useRouter();

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

  async function onSubmit(values: StepFormFour) {
    setData({
      data: values,
      step: 4,
    });

    try {
      await handleAddGuest(values);
    } catch (error) {
      console.log(error);
    }
  }

  const { data, isLoading } = useQuery({
    queryKey: ["getAllBidang"],
    queryFn: () => getBidangGuest(),
  });

  const [isLoading2, setIsLoading] = useState(false);

  const { mutateAsync } = useMutation({
    mutationFn: (data: GuestRequest) => addGuest(data),
    onMutate: () => {
      setIsLoading(true);
    },
    onSuccess: (data) => {
      toast.success("Success generate qr");
      setIsLoading(false);
      setDataNull();
      const ciphertext = AES.encrypt(data.data, "12345");
      const token = encodeURIComponent(ciphertext.toString());
      router.push(`/guest/${token}`);
    },
    onError: (error) => {
      toast.error(error.message);
      setIsLoading(false);
    },
  });

  const FIleToBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = (error) => reject(error);
    });

    

  const handleAddGuest = async (values: StepFormFour) => {
    const base64 = await FIleToBase64(stepThree?.gambar || new File([], ""))
    const data: GuestRequest = {
      alamat: stepOne?.alamat || "",
      bagian_id: Number(values?.unitkerja) || 0,
      email: stepTwo?.email || "",
      hp: stepTwo?.nohp || "",
      image: base64,
      instansi: values?.instansi || "",
      nama: stepOne?.nama || "",
      nik: Number(stepOne?.nik) || 0,
      suhu: 0,
      tanggal: values?.tanggal || "",
      tujuan: values?.tujuan || "",
      whatsapp: stepTwo?.nowa || "",
    };
    await mutateAsync(data);
  };

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
              <Select
                onValueChange={field.onChange}
                defaultValue={isLoading ? "Loading... " : field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih unit kerja" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {isLoading && (
                    <SelectItem value="Loading..." disabled>
                      Loading...
                    </SelectItem>
                  )}
                  {data?.data.map((item, index) => {
                    return (
                      <SelectItem
                        key={index}
                        className="focus:!bg-primary focus:!text-white cursor-pointer"
                        value={String(item.id)}
                      >
                        {item.nama_bagian}
                      </SelectItem>
                    );
                  })}
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
              disabled={!form.formState.isValid || isLoading2}
              type="submit"
              className="ds-btn w-max ds-btn-sm ds-btn-primary"
            >
              {isLoading2 ? (
                <>
                  <span className="loading loading-spinner"></span>
                  loading...
                </>
              ) : (
                "Finish"
              )}
            </button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default StepFour;
