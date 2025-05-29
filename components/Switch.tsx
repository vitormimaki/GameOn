import React, { useEffect, useRef } from "react";
import {
    View,
    Animated,
    TouchableOpacity,
    StyleSheet,
    Text,
} from "react-native";

interface Props {
    activeTab: "posts" | "info";
    onChangeTab: (tab: "posts" | "info") => void;
}

export const Switch = ({ activeTab, onChangeTab }: Props) => {
    const animation = useRef(new Animated.Value(activeTab === "posts" ? 0 : 1)).current;

    useEffect(() => {
        Animated.timing(animation, {
            toValue: activeTab === "posts" ? 0 : 1,
            duration: 300,
            useNativeDriver: false,
        }).start();
    }, [activeTab]);

    const translateX = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ["0%", "100%"],
    });

    return (
        <View style={styles.switchWrapper}>
            <Animated.View
                style={[styles.animatedBackground, {transform: [{ translateX }]}]}
            />
            <TouchableOpacity
                onPress={() => onChangeTab("posts")}
                style={styles.switchButton}
            >
                <Text style={activeTab === "posts" ? styles.activeText : styles.inactiveText}>
                    Posts
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => onChangeTab("info")}
                style={styles.switchButton}
            >
                <Text style={activeTab === "info" ? styles.activeText : styles.inactiveText}>
                    Informações
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    switchWrapper: {
        width: "80%",
        height: 50,
        backgroundColor: "gray",
        borderColor: "gray",
        borderRadius: 30,
        borderWidth: 2,
        flexDirection: "row",
        position: "relative",
        overflow: "hidden",
        marginBottom: 20,
    },
    animatedBackground: {
        position: "absolute",
        width: "50%",
        height: "100%",
        backgroundColor: "white",
        borderRadius: 30,
        zIndex: 0,
    },
    switchButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
    },
    activeText: {
        color: "#000",
        fontWeight: "bold",
    },
    inactiveText: {
        color: "#fff",
        fontWeight: "bold",
    },
});