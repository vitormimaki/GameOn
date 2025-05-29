import React, { useEffect, useRef } from "react";
import {
  View,
  Animated,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import { Icon } from "@rneui/themed";

interface Tab {
  key: string;
  title: string;
  icon?: string; // Nome do ícone (opcional)
}

interface Props {
  tabs: Tab[];
  activeTab: string;
  onChangeTab: (key: string) => void;
}

export const Switch = ({ tabs, activeTab, onChangeTab }: Props) => {
  const tabIndex = tabs.findIndex((tab) => tab.key === activeTab);
  const animation = useRef(new Animated.Value(tabIndex)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: tabIndex,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [tabIndex]);

  const translateX = animation.interpolate({
    inputRange: tabs.map((_, i) => i),
    outputRange: tabs.map((_, i) => `${(100 / tabs.length) * i}%`),
  });

  return (
    <View style={styles.switchWrapper}>
      <Animated.View
        style={[
          styles.animatedBackground,
          {
            width: `${100 / tabs.length}%`,
            transform: [{ translateX }],
          },
        ]}
      />
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.key}
          onPress={() => onChangeTab(tab.key)}
          style={styles.switchButton}
        >
          {tab.icon && (
            <Icon
              name={tab.icon}
              type="ionicon"
              size={16}
              color={tab.key === activeTab ? "#000" : "#fff"}
              style={{ marginBottom: 2 }}
            />
          )}
          <Text style={tab.key === activeTab ? styles.activeText : styles.inactiveText}>
            {tab.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  switchWrapper: {
    width: "80%",
    height: 50,
    backgroundColor: "gray",
    borderRadius: 30,
    flexDirection: "row",
    position: "relative",
    overflow: "hidden",
    marginBottom: 20,
  },
  animatedBackground: {
    position: "absolute",
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


// Exemplo de uso do componente Switch:
// <SwitchIcon
//   tabs={[
//     { key: "posts", title: "Posts", icon: "home-outline" },
//     { key: "info", title: "Info", icon: "information-circle-outline" },
//   ]}
//   activeTab={activeTab}
//   onChangeTab={setActiveTab}
// />