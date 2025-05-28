import React, {useState} from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Input, Icon } from "@rneui/themed"
import { Link } from "expo-router";

export default function Index() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <View
        style={[styles.container, styles.form]}
        accessibilityRole="form"
        accessibilityLabel="Login Form"
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
          containerStyle={{ width: "80%"}}
          inputStyle={{ color: "#333", borderColor: "#ccc", borderWidth: 1}}
          leftIconContainerStyle={{ marginRight: 10 }}
        />
        <Input
          placeholder="Senha"
          errorStyle={{ color: "red" }}
          errorMessage="Senha inválida"
          leftIcon={<Icon name="lock" type="font-awesome" />}
          leftIconContainerStyle={{ marginRight: 10 }}
          rightIcon={
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}
              accessibilityRole="button"
              accessibilityLabel={showPassword ? "Ocultar senha" : "Mostrar senha"}
              style={{ padding: 10 }}
            >
              <Icon
                name={showPassword ? "eye" : "eye-slash"}
                type="font-awesome"
                color="#333"
              />
            </TouchableOpacity>
          }
          inputStyle={{ color: "#333", borderColor: "#ccc", borderWidth: 1}}
          autoCapitalize="none"
          autoComplete="password"
          autoCorrect={false}
          textContentType="password"
          secureTextEntry={!showPassword}
          containerStyle={{ width: "80%" }}
          inputStyle={{ color: "#333", borderColor: "#ccc", borderWidth: 1}}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Entrar pressed")}
        >
          <Icon name="sign-in" type="font-awesome" color="#fff" />
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View
          style={{flexDirection: 'column', alignItems: 'center', marginVertical: 20, width: "80%"}}>
          <Link href="/forgot-password">
            <Text style={[styles.text, {color: 'blue', textDecorationLine: 'underline'}]}>Esqueci minha senha</Text>
          </Link>
          
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.text}>Ainda não tem uma conta? </Text>
            <Link href="/create-account" asChild>
              <TouchableOpacity>
                <Text style={[styles.text, { color: 'blue', textDecorationLine: 'underline' }]}>Cadastre-se</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>


        <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 20, width: "80%"}}>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
          <Text style={[styles.text, {marginHorizontal: 10}]}>Ou</Text>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        </View>


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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "40%",
    padding: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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