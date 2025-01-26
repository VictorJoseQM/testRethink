import { ImageProps } from "./imageProps";

export type InputData = {
  images: ImageProps[];
  name: string;
  desc: string;
  fixedDimensions: boolean;
  height?: number;
  width?: number;
  weight: number;
  categories: string[];
  price: number;
};