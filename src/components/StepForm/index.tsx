"use client";

import { useStepForm } from "@/slice/stepFormSlice";
import StepOne from "./form/StepOne";
// import Clock from "react-live-clock";
import dynamic from "next/dynamic";
import { Clock } from "lucide-react";
import StepTwo from "./form/StepTwo";
import StepThree from "./form/StepThree";
import StepFour from "./form/StepFour";
const ClockTime = dynamic(() => import("react-live-clock"), { ssr: false });

const StepForm = () => {
  const { currentStep, setCurrentStep, stepOne, stepThree, stepTwo } =
    useStepForm();


  return (
    <div className="container mx-auto">
      <div className="w-full flex justify-between items-center">
        <div>
          <h1 className="font-bold">IDENTITAS TAMU</h1>
          <p className="text-sm text-neutral-500">Isi data dengan benar</p>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="text-primary" />
          <ClockTime
            className="text-primary font-bold"
            format={"HH:mm:ss"}
            ticking={true}
            timezone="Asia/Makassar"
          />
        </div>
      </div>
      <div className="flex md:justify-center mt-5">
        <ul className="ds-steps ds-steps-vertical md:ds-steps-horizontal">
          <li
            onClick={() => {
              setCurrentStep(1);
            }}
            className="ds-step cursor-pointer ds-step-primary"
          >
            Data Pribadi
          </li>
          <li
            onClick={() => {
              if (stepOne) {
                setCurrentStep(2);
              }
            }}
            className={`ds-step cursor-pointer ${
              currentStep > 1 && "ds-step-primary"
            }`}
          >
            Kontak
          </li>
          <li
            onClick={() => {
              if (stepOne && stepTwo) {
                setCurrentStep(3);
              }
            }}
            className={`ds-step cursor-pointer ${
              currentStep > 2 && "ds-step-primary"
            }`}
          >
            Ambil Gambar/Photo
          </li>
          <li
            onClick={() => {
              if (stepOne && stepTwo && stepThree) {
                setCurrentStep(4);
              }
            }}
            className={`ds-step cursor-pointer ${
              currentStep > 3 && "ds-step-primary"
            }`}
          >
            Keperluan
          </li>
        </ul>
      </div>
      <div className="ds-divider"></div>
      <div className="mt-5">
        {currentStep === 1 && <StepOne />}
        {currentStep === 2 && <StepTwo />}
        {currentStep === 3 && <StepThree />}
        {currentStep === 4 && <StepFour />}
      </div>
    </div>
  );
};

export default StepForm;
