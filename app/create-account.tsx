import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Input, Icon } from "@rneui/themed";
import { Link } from "expo-router";

export default function CreateAccount() {
    return (
        <View style={styles.container}>
            <Link href="/" style={styles.backLink} accessibilityRole="link" accessibilityLabel="Voltar para a página inicial">
                <Text style={styles.backLinkText}>Voltar</Text>
            </Link>
            <Text style={styles.header} accessibilityRole="header" accessibilityLabel="Game On">
                Game On
            </Text>
            <Text style={styles.subHeader} accessibilityRole="text" accessibilityLabel="Criar uma conta">
                Criar uma conta
            </Text>
            <Input
                placeholder="Email"
                leftIcon={<Icon name="user" type="font-awesome" />}
                containerStyle={styles.inputContainer}
                inputStyle={styles.input}
                leftIconContainerStyle={styles.iconContainer}
            />
            <Input
                placeholder="Senha"
                errorStyle={styles.errorText}
                errorMessage="Senha inválida"
                leftIcon={<Icon name="lock" type="font-awesome" />}
                secureTextEntry={true}
                containerStyle={styles.inputContainer}
                inputStyle={styles.input}
                leftIconContainerStyle={styles.iconContainer}
            />
            <TouchableOpacity style={styles.button} onPress={() => console.log("Criar conta pressed")}>
                <Icon name="user-plus" type="font-awesome" color="#fff" />
                <Text style={styles.buttonText}>Criar conta</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        padding: 20,
    },
    backLink: {
        position: "absolute",
        top: 40,
        left: 20,
        padding: 10,
        backgroundColor: "#007bff",
        borderRadius: 5,
        zIndex: 1,
    },
    backLinkText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        textDecorationLine: "none",
    },
    header: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#333",
        textAlign: "center",
    },
    subHeader: {
        fontSize: 24,
        marginBottom: 20,
        color: "#333",
        textAlign: "center",
    },
    inputContainer: {
        width: "100%",
        maxWidth: 400,
        marginBottom: 15,
    },
    input: {
        color: "#333",
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#fff",
    },
    iconContainer: {
        marginRight: 10,
    },
    errorText: {
        color: "red",
    },
    button: {
        backgroundColor: "#007bff",
        paddingVertical: 15,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        maxWidth: 400,
        marginTop: 20,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 10,
    },
});