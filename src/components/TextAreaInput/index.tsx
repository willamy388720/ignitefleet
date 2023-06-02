import { forwardRef } from "react";
import { TextInputProps, TextInput } from "react-native";
import { useTheme } from "styled-components";

import { Container, Input, Label } from "./styles";

type Props = TextInputProps & {
  label: string;
};

export const TextAreaInput = forwardRef<TextInput, Props>(
  ({ label, ...rest }, ref) => {
    const { COLORS } = useTheme();

    return (
      <Container>
        <Label>{label}</Label>
        <Input
          ref={ref}
          placeholderTextColor={COLORS.GRAY_400}
          multiline
          autoCapitalize="sentences"
          {...rest}
        />
      </Container>
    );
  }
);
