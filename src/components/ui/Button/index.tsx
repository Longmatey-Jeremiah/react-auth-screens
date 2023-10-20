import { Button as BaseButton, ButtonProps } from "@chakra-ui/react";
import { btnStyle } from "./style";

type VariantType = "outline" | "primary" | "secondary";

type Props = {
  children: React.ReactNode;
  variant?: VariantType;
} & ButtonProps;

export const Button = ({ children, variant = "primary", ...rest }: Props) => {
  return (
    <BaseButton
      borderRadius="8px"
      py={3}
      px={4}
      fontWeight="500"
      lineHeight="16px"
      {...btnStyle[variant]}
      {...rest}
    >
      {children}
    </BaseButton>
  );
};
