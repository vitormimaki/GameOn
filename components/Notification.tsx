import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

interface NotificationProps {
  avatar: any;
  username: string;
  time: string;
  action: string;
  thumbnail?: any;
  highlight?: boolean;
  category?: string;
}

export const Notification = ({
  avatar,
  username,
  time,
  action,
  thumbnail,
  highlight = false,
  category,
}: NotificationProps) => {
  const handleMessagePress = () => {
    console.log(`Iniciar conversa com ${username}`);
    // Navegar para o chat ou abrir modal, se desejado
  };

  return (
    <View style={[styles.container, highlight && styles.highlight]}>
      <Image source={avatar} style={styles.avatar} />

      <View style={styles.textWrapper}>
        <Text style={styles.text}>
          <Text style={styles.username}>{username}</Text> {action}
        </Text>
        <Text style={styles.time}>{time}</Text>
      </View>

      {category === "MATCH!" ? (
        <TouchableOpacity onPress={handleMessagePress} style={styles.messageButton}>
          <Text style={styles.messageButtonText}>Diga Olá!</Text>
        </TouchableOpacity>
      ) : thumbnail ? (
        <Image source={thumbnail} style={styles.thumbnail} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  highlight: {
    backgroundColor: "#f9f9f9",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  textWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "#000",
    fontSize: 14,
  },
  username: {
    fontWeight: "bold",
  },
  time: {
    color: "#666",
    fontSize: 12,
    marginTop: 2,
  },
  thumbnail: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginLeft: 12,
  },
  messageButton: {
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "#000",
    borderColor: "#000",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginLeft: 12,
  },
  messageButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13,
  },
});
