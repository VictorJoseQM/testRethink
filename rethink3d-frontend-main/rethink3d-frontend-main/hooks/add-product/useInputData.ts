import { useState } from "react";
import { InputData } from "@/types/inputData";

export default function useInputData() {
  const [inputData, setInputData] = useState<InputData>({
    images: [],
    name: "",
    desc: "",
    fixedDimensions: true,
    weight: 0,
    categories: [],
    price: 0,
  });

  const updateField = (field: keyof InputData, value: any) => {
    setInputData((prev) => ({ ...prev, [field]: value }));
  };

  return { inputData, updateField };
}
