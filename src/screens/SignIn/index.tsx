import { useState, useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { Container, Slogan, Title } from "./styles";
import { Realm, useApp } from "@realm/react";

import { ANDROID_CLIENT_ID } from "@env";

import backgroundImg from "../../assets/background.png";

import { Button } from "../../components/Button";
import { Alert } from "react-native";

WebBrowser.maybeCompleteAuthSession();

export function SignIn() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [_, response, googleSignIn] = Google.useAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    scopes: ["profile", "email"],
  });

  const app = useApp();

  function handleGoogleSignIn() {
    setIsAuthenticating(true);
    googleSignIn().then((response) => {
      if (response.type === "success") {
        setIsAuthenticating(false);
      }
    });
  }

  useEffect(() => {
    if (response?.type === "success") {
      if (response.authentication?.idToken) {
        const credentials = Realm.Credentials.jwt(
          response.authentication.idToken
        );
        app.logIn(credentials).catch((error) => {
          Alert.alert(
            "Entrar",
            "Não foi possível conectar-se a sua conta Google."
          );
          setIsAuthenticating(false);
        });
      } else {
        Alert.alert(
          "Entrar",
          "Não foi possível conectar-se a sua conta Google."
        );
        setIsAuthenticating(false);
      }
    }
  }, [response]);

  return (
    <Container source={backgroundImg}>
      <Title>Ignite Fleet</Title>
      <Slogan>Gestão de uso de veículo</Slogan>
      <Button
        title="Entrar com o Google"
        onPress={handleGoogleSignIn}
        isLoading={isAuthenticating}
      />
    </Container>
  );
}
