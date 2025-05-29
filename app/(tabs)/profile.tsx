import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { Icon } from "@rneui/themed";
import { Switch } from "../../components/Switch";

export default function Profile() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"posts" | "info">("posts");

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        {/* Top Section */}
        <View style={[styles.background, styles.topSection]}>
          <TouchableOpacity onPress={() => console.log("Settings pressed")}>
            <Icon name="settings-outline" type="ionicon" color="white" size={24} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Logout pressed")}>
            <Icon name="log-out-outline" type="ionicon" color="white" size={24} />
          </TouchableOpacity>
        </View>

        {/* Profile Image */}
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/icon.jpeg")}
            style={styles.image}
          />
        </View>

        {/* Bottom Section */}
        <View style={[styles.background, styles.bottomSection]}>
          <View style={styles.actionRow}>
            <TouchableOpacity onPress={() => console.log("Add pressed")}>
              <Icon name="add" type="ionicon" color="black" size={24} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("Edit pressed")}>
              <Icon name="pencil-outline" type="ionicon" color="black" size={24} />
            </TouchableOpacity>
          </View>

          <Text style={styles.userName}>Nome do Usuário</Text>
          <Text style={styles.description}>Descrição</Text>

          <Switch activeTab={activeTab} onChangeTab={setActiveTab} />

          {/* Conteúdo */}
          <View style={{ width: "80%", marginTop: 20 }}>
            {activeTab === "posts" ? (
              <Text style={styles.contentText}>Conteúdo dos Posts</Text>
            ) : (
              <Text style={styles.contentText}>Informações do usuário</Text>
            )}
          </View>
        </View>
      </View>
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
  form: {
    flex: 1,
    width: "100%",
    maxWidth: 400,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  background: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  topSection: {
    flex: 0.3,
    backgroundColor: "#000",
    flexDirection: "row",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 20,
  },
  bottomSection: {
    flex: 0.7,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 20,
  },
  imageContainer: {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: [{ translateX: -85 }, { translateY: -75 }],
    width: 175,
    height: 175,
    borderRadius: 100,
    overflow: "hidden",
    backgroundColor: "#fff",
    borderWidth: 5,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  contentText: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
  },
});
