"use client";

import Navbar from "@/components/Navbar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const LoginPageContainer = () => {
  const form = useForm()
  const router = useRouter()
  return (
    <main className="min-h-screen relative">
      <Navbar title="BPBJ - LOGIN" isNavigation={false} />

      <div className="h-full w-full flex flex-col justify-center min-h-[600px] items-center">
        <h1 className="text-[30px] font-bold">Login</h1>

        <Form {...form}>
          <div className="p-5 mt-5 flex flex-col gap-2 min-w-[300px] rounded-md border border-primary">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Masukkan username"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Masukkan password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <button type="button" onClick={() => {
              router.push("/dashboard")
            }} className="btn ds-btn-primary ds-btn-md mt-3 rounded-md">Login</button>
          </div>
        </Form>
      </div>
    </main>
  );
};

export default LoginPageContainer;
