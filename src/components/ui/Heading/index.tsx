import { Heading as BaseHeading, HeadingProps } from "@chakra-ui/layout";

type HeaderProps = {
  children: React.ReactNode;
} & HeadingProps;

export const Heading = ({ children, ...rest }: HeaderProps) => {
  return (
    <BaseHeading fontWeight={600} {...rest}>
      {children}
    </BaseHeading>
  );
};
