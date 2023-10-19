import { Input } from "@/components/ui/input";
import { useStepForm } from "@/slice/stepFormSlice";
import { StepFormThree, stepFormThreeSchema } from "@/types/guestbook.request";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { Form, useForm } from "react-hook-form";

import Webcam from "react-webcam";

const StepThree = () => {
  const { setData, stepThree, setCurrentStep } = useStepForm();
  const [file, setFile] = useState<File | null>(stepThree?.gambar || null);

  const form = useForm<StepFormThree>({
    resolver: zodResolver(stepFormThreeSchema),
    mode: "all",
    defaultValues: stepThree ? stepThree : {},
  });

  function onSubmit(values: StepFormThree) {
    setData({
      data: values,
      step: 3,
    });
  }

  const webcamRef = useRef<Webcam>(null);
  const capture = useCallback(async () => {
    const imageSrc = webcamRef?.current?.getScreenshot();
    const fileImage = await dataUrlToFile(imageSrc || "", "selfie.png");

    setFile(fileImage);
    form.setValue("gambar", fileImage);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [webcamRef]);

  async function dataUrlToFile(
    dataUrl: string,
    fileName: string
  ): Promise<File> {
    const res: Response = await fetch(dataUrl);
    const blob: Blob = await res.blob();
    return new File([blob], fileName, { type: "image/png" });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
      <Input
        type="hidden"
        placeholder="Masukan no. handphone"
        {...form.register("gambar")}
      />

      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col md:flex-row items-start gap-5">
          <div>
            <Webcam
              audio={false}
              height={250}
              ref={webcamRef}
              className="rounded-lg"
              screenshotFormat="image/jpeg"
              width={300}
              videoConstraints={{
                width: 300,
                height: 250,
                facingMode: "user",
              }}
            />
            <div className="flex items-center gap-3">
              <button
                className="ds-btn mt-3 text-white w-max ds-btn-sm ds-btn-success"
                onClick={capture}
                type="button"
              >
                {file ? "Re-Take" : "Take Picture"}
              </button>
              {file && (
                <button
                  className="ds-btn mt-3 text-white w-max ds-btn-sm ds-btn-error"
                  onClick={() => setFile(null)}
                  type="button"
                >
                  Remove
                </button>
              )}
            </div>
          </div>
          {file && (
            <Image
              src={URL.createObjectURL(file)}
              className="h-[250px] rounded-lg w-[300px] object-cover"
              alt="selfie"
              width={300}
              height={250}
            />
          )}
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 flex justify-end mt-5">
        <div className="flex items-center gap-2">
          <button
            className="ds-btn w-max ds-btn-sm ds-btn-secondary ds-btn-outline"
            onClick={() => setCurrentStep(2)}
            type="button"
          >
            Back
          </button>
          <button
            disabled={!file}
            type="submit"
            className="ds-btn w-max ds-btn-sm ds-btn-primary"
          >
            Next
          </button>
        </div>
      </div>
    </form>
  );
};

export default StepThree;
