import { TouchableOpacity } from "react-native";
import { ArrowLeft } from "phosphor-react-native";
import { useTheme } from "styled-components";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Container, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
  title: string;
};

export function Header({ title }: Props) {
  const { COLORS } = useTheme();
  const insets = useSafeAreaInsets();
  const { goBack } = useNavigation();

  function handelGoBack() {
    goBack();
  }

  return (
    <Container style={{ paddingTop: insets.top + 42 }}>
      <TouchableOpacity activeOpacity={0.7} onPress={handelGoBack}>
        <ArrowLeft size={24} weight="bold" color={COLORS.BRAND_LIGHT} />
      </TouchableOpacity>
      <Title>{title}</Title>
    </Container>
  );
}
