import React, {useContext} from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Input, Icon } from "@rneui/themed"
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text
        style={[styles.text, { fontSize: 30, fontWeight: "bold", marginBottom: 20 }]}
        accessibilityRole="header"
        accessibilityLabel="Game On"
      >Game On</Text>
      <Text
        style={[styles.text, { fontSize: 24, marginBottom: 20 }]}
        accessibilityRole="text"
        accessibilityLabel="Entrar na sua conta"
      >Entrar</Text>

      <Input
        placeholder="Email"
        leftIcon={<Icon name="user" type="font-awesome" />}
        containerStyle={{ width: "80%" }}
        inputStyle={{ color: "#333", borderColor: "#ccc", borderWidth: 1}}
        leftIconContainerStyle={{ marginRight: 10 }}
      />
      <Input
        placeholder="Senha"
        errorStyle={{ color: "red" }}
        errorMessage="Senha inválida"
        leftIcon={<Icon name="lock" type="font-awesome" />}
        secureTextEntry={true}
        containerStyle={{ width: "80%" }}
        inputStyle={{ color: "#333", borderColor: "#ccc", borderWidth: 1}}
        leftIconContainerStyle={{ marginRight: 10 }}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Entrar pressed")}
      >
        <Icon name="sign-in" type="font-awesome" color="#fff" />
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Link href="/forgot-password" style={{ marginTop: 20 }}>
        <Text style={[styles.text, {color: 'blue', textDecorationLine: 'underline'}]}>Esqueci minha senha</Text>
      </Link>

      <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 20, width: "80%"}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <Text style={[styles.text, {marginHorizontal: 10}]}>Ou</Text>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>

      <Link href="/create-account" style={{ marginTop: 20 }}>
        <Text style={[styles.text, {color: 'blue', textDecorationLine: 'underline'}]}>Ainda não tem uma conta? Cadastre-se</Text>
      </Link>

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Entrar pressed")}
      >
        <Icon name="logo-google" type="ionicon" color="#fff" />
        <Text style={styles.buttonText}>Entrar com Google</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Entrar pressed")}
      >
        <Icon name="logo-apple" type="ionicon" color="#fff" />
        <Text style={styles.buttonText}>Entrar com Apple</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#333",
  },
  button: { 
    backgroundColor: "black", 
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    width: "80%",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    color: "#333",
  },
  icon: {
    marginRight: 10,
    color: "#333",
  },
});