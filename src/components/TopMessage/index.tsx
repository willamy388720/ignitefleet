import { useTheme } from "styled-components";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Container, Title } from "./styles";

import { IconBoxProps } from "../ButtonIcon";

type Props = {
  icon?: IconBoxProps;
  title: string;
};

export function TopMessage({ icon: Icon, title }: Props) {
  const { COLORS } = useTheme();
  const insets = useSafeAreaInsets();

  const paddingTop = insets.top + 5;

  return (
    <Container style={{ paddingTop }}>
      {Icon && <Icon size={18} color={COLORS.GRAY_100} />}
      <Title>{title}</Title>
    </Container>
  );
}
