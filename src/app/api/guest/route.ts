import { axiosInstance } from "@/utils/axios";
import { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.formData();
  if (body) {
    try {
      const response = await axiosInstance.post("/guest", body, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return NextResponse.json(response.data);
    } catch (error) {
      return NextResponse.json(error as AxiosError);
    }
  }
}
