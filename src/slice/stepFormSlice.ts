import {
  StepFormFour,
  StepFormOne,
  StepFormThree,
  StepFormTwo,
} from "@/types/guestbook.request";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const stepVariant = {
  1: "stepOne",
  2: "stepTwo",
  3: "stepThree",
  4: "stepFour",
};

type setDataType =
  | { step: 1; data: StepFormOne }
  | { step: 2; data: StepFormTwo }
  | { step: 3; data: StepFormThree }
  | { step: 4; data: StepFormFour };

export const useStepForm = create<{
  currentStep: number;
  stepOne: StepFormOne | null;
  stepTwo: StepFormTwo | null;
  stepThree: StepFormThree | null;
  stepFour: Partial<StepFormFour> | null;
  setData: (_value: setDataType) => void;
  setDataNull: () => void;
  setDataFormFour: (_name: string, _value: File | string | null) => void;
  setCurrentStep: (_value: number) => void;
}>()(
  devtools((set) => ({
    stepOne: null,
    stepTwo: null,
    stepThree: null,
    stepFour: null,
    currentStep: 1,
    setData: ({ step, data }) => {
      set((state) => ({
        ...state,
        [stepVariant[step]]: data,
      }));
      step !== 4 && set((state) => ({
        ...state,
        currentStep: step + 1,
      }));
    },
    setCurrentStep: (value) => {
      set((state) => ({
        ...state,
        currentStep: value,
      }));
    },
    setDataNull: () => {
      set((state) => ({
        ...state,
        stepOne: null,
        stepTwo: null,
        stepThree: null,
        stepFour: null,
      }));
    },
    setDataFormFour: (name, value) => {
      set((state) => ({
        ...state,
        stepFour: {
          ...state.stepFour,
          [name]: value,
        },
      }));
    },
  }))
);
