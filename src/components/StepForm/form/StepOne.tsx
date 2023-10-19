'use client'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import { useStepForm } from "@/slice/stepFormSlice";
import { StepFormOne, stepFormOneSchema } from "@/types/guestbook.request";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const StepOne = () => {

  const {setData, stepOne} = useStepForm()

  const form = useForm<StepFormOne>({
    resolver: zodResolver(stepFormOneSchema),
    mode: 'onSubmit',
    defaultValues: stepOne ? stepOne : {
      alamat: '',
      nama: '',
      nik: '',
    }
  });

  function onSubmit(values: StepFormOne) {
    setData({
      data: values,
      step: 1
    })
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-5"
      >
        <FormField
          control={form.control}
          name="nama"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Lengkap</FormLabel>
              <FormControl>
                <Input placeholder="Masukan nama anda" {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nik"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nomor Identitas (NIK/SIM/Paspor)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Masukan nomor identitas anda" {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="alamat"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Alamat</FormLabel>
              <FormControl>
                <Textarea placeholder="Masukan alamat" {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <div className="col-span-1 md:col-span-2 flex justify-end mt-3">
          <button disabled={!form.formState.isValid} type="submit" className="ds-btn w-max ds-btn-sm ds-btn-primary">
            Next
          </button>
        </div>
      </form>
    </Form>
  );
}

export default StepOne