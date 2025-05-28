import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Icon } from "@rneui/themed";
import { Stack } from "expo-router";

export default function Notification() {
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    headerTitle: "Notificações",
                    headerTitleStyle: styles.headerTitle,
                    headerStyle: styles.header,
                }}
            />
            <Text style={styles.subHeader} accessibilityRole="text" accessibilityLabel="Notificações">
                Notificações
            </Text>
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
});