import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Information() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Informações do Usuário</Text>
      <Text style={styles.text}>
        Aqui você pode adicionar informações adicionais sobre o usuário.
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
});