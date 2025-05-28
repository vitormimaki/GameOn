import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Input, Icon } from "@rneui/themed";
import { Link } from "expo-router";
export default function CreateAccount() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#f5f5f5" }}>
            <Link
                href="/"
                style={{
                    position: "absolute",
                    top: 40,
                    left: 20,
                    padding: 10,
                    backgroundColor: "#007bff",
                    borderRadius: 5,
                    color: "#fff",
                    fontSize: 16,
                    textDecorationLine: "none",
                    fontWeight: "bold",
                    zIndex: 1,
                }}
                accessibilityRole="link"
                accessibilityLabel="Voltar para a página inicial"
            >
                Voltar
            </Link>
            <Text
                style={{ fontSize: 30, fontWeight: "bold", marginBottom: 20 }}
                accessibilityRole="header"
                accessibilityLabel="Game On"
            >
                Game On
            </Text>
            <Text
                style={{ fontSize: 24, marginBottom: 20 }}
                accessibilityRole="text"
                accessibilityLabel="Criar uma conta"
            >
                Criar uma conta
            </Text>
            <Input
                placeholder="Email"
                leftIcon={<Icon name="user" type="font-awesome" />}
                containerStyle={{ width: "80%" }}
                inputStyle={{ color: "#333", borderColor: "#ccc", borderWidth: 1 }}
                leftIconContainerStyle={{ marginRight: 10 }}
            />
            <Input
                placeholder="Senha"
                errorStyle={{ color: "red" }}
                errorMessage="Senha inválida"
                leftIcon={<Icon name="lock" type="font-awesome" />}
                secureTextEntry={true}
                containerStyle={{ width: "80%" }}
                inputStyle={{ color: "#333", borderColor: "#ccc", borderWidth: 1 }}
                leftIconContainerStyle={{ marginRight: 10 }}
            />
            <TouchableOpacity
                style={{
                    backgroundColor: "#007bff",
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 5,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "80%",
                    marginTop: 20,
                }}
                onPress={() => console.log("Criar conta pressed")}
            >
                <Icon name="user-plus" type="font-awesome" color="#fff" />
                <Text style={{ color: "#fff", marginLeft: 10 }}>Criar conta</Text>
            </TouchableOpacity>
        </View>
    )
}