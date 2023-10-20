import { ButtonProps } from "@chakra-ui/react";

interface BtnStyleType {
  primary: ButtonProps;
  outline: ButtonProps;
  secondary: ButtonProps;
}
export const btnStyle: BtnStyleType = {
  primary: {
    bgColor: "primary.100",
    color: "white",
    _hover: {bgColor: 'primary.200'},
  },
  secondary: {
    bgColor: "#EBEEED",
    color: "primary.100",
  },
  outline: {
    bg: "secondary.300",
    color: "text.100",
    border: "2px solid",
    borderColor: "black",
    _hover: {
      background: "secondary.600",
    },
  },
};