import { axiosInstance } from "@/utils/axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await axiosInstance.get("/bagian");

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.error();
  }
}
