import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Icon } from "@rneui/themed";
import { Stack } from "expo-router";
import SwipeCard from "../../components/Card";

export default function Home() {

    const exampleProfiles = [
    {
        name: "Alice",
        age: 25,
        image: require('../../assets/images/icon.jpeg'),
        tags: [
        { label: "Adventurous", color: "#ff6347" },
        { label: "Traveler", color: "#4682b4" },
        ],
    },
    {
        name: "Bob",
        age: 30,
        image: require('../../assets/images/icon.jpeg'),
        tags: [
        { label: "Gamer", color: "#32cd32" },
        { label: "Tech Enthusiast", color: "#ffa500" },
        ],
    },
    ];

    const handleSwipeRight = (profile) => {
        console.log(`Swiped right on ${profile.name}`);
    };
    const handleSwipeLeft = (profile) => {
        console.log(`Swiped left on ${profile.name}`);
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Stack.Screen
                options={{
                    headerTitle: "Game On",
                    headerTitleStyle: styles.headerTitle,
                    headerStyle: styles.header,
                }}
            />
            {exampleProfiles.map((profile, index) => (
                <SwipeCard
                    key={index}
                    profile={profile}
                    onSwipeRight={handleSwipeRight}
                    onSwipeLeft={handleSwipeLeft}
                />
            ))}
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