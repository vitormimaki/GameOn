import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter, Link } from "expo-router";
import { Icon } from "@rneui/themed";

export default function Profile() {
  const router = useRouter();

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
          
          <View
          style={{
            width: "80%",
            color: "#333",
            backgroundColor: "gray",
            borderWidth: 2,
            borderColor: "gray",
            borderRadius: 30,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            marginBottom: 20,
            height: 50,
          }}
          >
            <View
              style={{
                width: "50%",
                color: "#333",
                backgroundColor: "white",
                borderRadius: 30,
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Text>Posts</Text>
            </View>
            <Link
              href="/(profile_options)/information"
              asChild
            >
              <View style={{
                width: "50%",
                color: "#333",
                backgroundColor: "gray",
                borderRadius: 30,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}>
                <Text>Informações</Text>
              </View>
            </Link>
          </View>

          <View style={[styles.form, { width: "80%", padding: 20, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }]} />

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
    alignItems: "space-between",
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
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: "#333",
    fontWeight: "bold",
    marginLeft: 10,
  },
});