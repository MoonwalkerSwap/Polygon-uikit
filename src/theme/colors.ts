import { Colors } from "./types";

export const baseColors = {
  failure: "#7027A0",
  primary: "#7027A0",
  primaryBright: "#451862",
  primaryDark: "#7027A0",
  secondary: "#F0C803",
  success: "#7027A0",
  warning: "#451862",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#C7C7C7",
  contrast: "#FFFFFF",
  invertedContrast: "#FFFFFF",
  input: "rgba(241, 241, 241, 0.4)",
  inputSecondary: "#444444",
  tertiary: "#EFF4F5",
  text: "#373737",
  textDisabled: "#777777",
  textSubtle: "#373737",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  extra: "#373737",
  button: "linear-gradient(90deg, #919191 0%, #272727 100%)",
  farming: "rgba(254, 200, 3, 0.1)",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#7027A0",
  background: "#2B2B2B",
  backgroundDisabled: "#C7C7C7",
  contrast: "#FFFFFF",
  invertedContrast: "#343434",
  input: "#444444",
  inputSecondary: "#444444",
  primaryDark: "#7027A0",
  tertiary: "#444444",
  text: "#FFFFFF",
  textDisabled: "#777777",
  textSubtle: "#FFFFFF",
  borderColor: "#C7C7C7",
  card: "#343434",
  extra: "#FAC504",
  button: "linear-gradient(90deg, #7027A0 0%, #7C6A25 100%)",
  farming: "rgba(255, 255, 255, 0.1)",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
