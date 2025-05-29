import React from "react";
import { View, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import SwipeDeck from "../../components/SwipeCard";

export default function Home() {
    const exampleProfiles = [
    {
        id: "1",
        name: "Alice",
        age: 25,
        image: require("../../assets/images/icon.jpeg"),
        tags: [
            { label: "Adventurous", color: "#ff6347" },
            { label: "Traveler", color: "#4682b4" },
        ],
    },
    {
        id: "2",
        name: "Bob",
        age: 30,
        image: require("../../assets/images/icon.jpeg"),
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
        <View style={styles.container}>
            <Stack.Screen
                options={{
                headerTitle: "Game On",
                headerTitleStyle: styles.headerTitle,
                headerStyle: styles.header,
                }}
            />
            <SwipeDeck
                data={exampleProfiles}
                onSwipeLeft={handleSwipeLeft}
                onSwipeRight={handleSwipeRight}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        paddingVertical: 16,
    },
    header: {
        backgroundColor: "#007bff",
    },
    headerTitle: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
    },
});