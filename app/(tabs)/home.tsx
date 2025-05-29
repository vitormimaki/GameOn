import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Icon } from "@rneui/themed";
import { Stack } from "expo-router";

export default function Home() {
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    headerTitle: "Game On",
                    headerTitleStyle: styles.headerTitle,
                    headerStyle: styles.header,
                }}
            />
            <Text style={styles.subHeader} accessibilityRole="text" accessibilityLabel="Bem-vindo ao Game On!">
                Bem-vindo ao Game On!
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
});