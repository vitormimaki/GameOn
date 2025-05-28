import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Icon } from "@rneui/themed";
import { Stack } from "expo-router";

export default function Profile() {
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    headerTitle: "Perfil",
                    headerTitleStyle: styles.headerTitle,
                    headerStyle: styles.header,
                }}
            />
            <Text style={styles.subHeader} accessibilityRole="text" accessibilityLabel="Perfil do usuário">
                Perfil do usuário
            </Text>
            {/* <Link href="/settings" style={styles.link}>
                <Icon name="cog" type="font-awesome" color="#007bff" />
                <Text style={styles.linkText}>Configurações</Text>
            </Link> */}
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
    header: {
        backgroundColor: "#007bff",
        padding: 10,
        width: "100%",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    headerTitle: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
    },
    subHeader: {
        fontSize: 24,
        marginBottom: 20,
        color: "#333",
        textAlign: "center",
    },
    link: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 5,
        borderColor: "#ccc",
        borderWidth: 1,
        width: "80%",
        justifyContent: "center",
    },
});