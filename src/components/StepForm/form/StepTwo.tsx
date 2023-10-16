"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useStepForm } from "@/slice/stepFormSlice";
import { StepFormTwo, stepFormTwoSchema } from "@/types/guestbook.request";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const StepTwo = () => {
  const { setData, stepTwo, setCurrentStep } = useStepForm();

  const form = useForm<StepFormTwo>({
    resolver: zodResolver(stepFormTwoSchema),
    mode: "onSubmit",
    defaultValues: stepTwo
      ? stepTwo
      : {
          nowa: "",
          nohp: "",
          email: "",
        },
  });

  function onSubmit(values: StepFormTwo) {
    setData({
      data: values,
      step: 2,
    });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-5"
      >
        <FormField
          control={form.control}
          name="nohp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>No. Handphone</FormLabel>
              <FormControl>
                <Input placeholder="Masukan no. handphone" {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nowa"
          render={({ field }) => (
            <FormItem>
              <FormLabel>No. WhatsApp</FormLabel>
              <FormControl>
                <Input placeholder="Masukan nomor identitas anda" {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="col-span-1 md:col-span-2">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Masukan alamat email" {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <div className="col-span-1 md:col-span-2 flex justify-end mt-3">
          <div className="flex items-center gap-2">
            <button
              className="ds-btn w-max ds-btn-sm  ds-btn-secondary ds-btn-outline"
              onClick={() => setCurrentStep(1) }
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

export default StepTwo;
