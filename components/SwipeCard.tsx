import React, {
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import {
  View,
  Text,
  Image,
  Animated,
  PanResponder,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type Tag = {
  label: string;
  color: string;
};

type Profile = {
  id: string;
  name: string;
  age: number;
  image: any;
  tags: Tag[];
};

export interface SwipeCardRef {
  swipeLeft: () => void;
  swipeRight: () => void;
}

interface SwipeCardProps {
  profile: Profile;
  onSwipeRight: (profile: Profile) => void;
  onSwipeLeft: (profile: Profile) => void;
  disabled?: boolean;
}

const SwipeCard = forwardRef<SwipeCardRef, SwipeCardProps>(
  ({ profile, onSwipeRight, onSwipeLeft, disabled = false }, ref) => {
      const pan = useRef(new Animated.ValueXY()).current;

      const panResponder = useRef(
          PanResponder.create({
              onStartShouldSetPanResponder: () => !disabled,
              onPanResponderMove: Animated.event(
                  [null, { dx: pan.x, dy: pan.y }],
                  { useNativeDriver: false }
              ),
              onPanResponderRelease: (_, gesture) => {
                  if (gesture.dx > 120) {
                      Animated.timing(pan, {
                          toValue: { x: 500, y: 0 },
                          duration: 300,
                          useNativeDriver: false,
                      }).start(() => onSwipeRight(profile));
                  } else if (gesture.dx < -120) {
                      Animated.timing(pan, {
                          toValue: { x: -500, y: 0 },
                          duration: 300,
                          useNativeDriver: false,
                      }).start(() => onSwipeLeft(profile));
                  } else {
                      Animated.spring(pan, {
                          toValue: { x: 0, y: 0 },
                          useNativeDriver: false,
                      }).start();
                  }
              },
          })
      ).current;

      const swipe = (direction: "left" | "right") => {
          Animated.timing(pan, {
              toValue: { x: direction === "right" ? 500 : -500, y: 0 },
              duration: 300,
              useNativeDriver: false,
          }).start(() =>
              direction === "right"
                  ? onSwipeRight(profile)
                  : onSwipeLeft(profile)
          );
      };

      useImperativeHandle(ref, () => ({
          swipeLeft: () => swipe("left"),
          swipeRight: () => swipe("right"),
      }));

      if (!profile) {
          return (
              <View style={styles.container}>
                  <Text style={{ color: "red" }}>Erro: perfil indefinido</Text>
              </View>
          );
      }

      return (
          <View style={styles.container}>
              <Animated.View
                  style={[styles.card, { transform: pan.getTranslateTransform() }]}
                  {...(!disabled ? panResponder.panHandlers : {})}
              >
                  <View style={styles.header}>
                      <Text style={styles.name}>{profile.name}, {profile.age}</Text>
                      <FontAwesome name="info-circle" size={20} color="#333" />
                  </View>

                  <View style={styles.tags}>
                      {profile.tags.map((tag, index) => (
                          <View key={index} style={[styles.tag, { backgroundColor: tag.color }]}>
                              <Text style={styles.tagText}>{tag.label}</Text>
                          </View>
                      ))}
                  </View>

                  <Image source={profile.image} style={styles.image} resizeMode="cover" />

                  <View style={styles.actions}>
                      <TouchableOpacity style={styles.actionButton} onPress={() => swipe("left")}>
                          <FontAwesome name="times-circle" size={50} color="red" />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.actionButton} onPress={() => swipe("right")}>
                          <FontAwesome name="check-circle" size={50} color="green" />
                      </TouchableOpacity>
                  </View>
              </Animated.View>
          </View>
      );
  }
);

const { width, height } = Dimensions.get("window");
const CARD_WIDTH = width - 40;
const CARD_HEIGHT = height * 0.8;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
  },
  card: {
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      backgroundColor: "#fff",
      borderRadius: 20,
      overflow: "hidden",
      elevation: 6,
  },
  header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 16,
  },
  name: {
      fontSize: 22,
      fontWeight: "bold",
  },
  tags: {
      flexDirection: "row",
      paddingHorizontal: 16,
      gap: 8,
  },
  tag: {
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 12,
      marginRight: 6,
  },
  tagText: {
      color: "#fff",
      fontWeight: "bold",
  },
  image: {
      width: "100%",
      height: 350,
      marginTop: 10,
  },
  actions: {
      flexDirection: "row",
      justifyContent: "space-around",
      width: "100%",
      marginTop: 16,
  },
  actionButton: {
      padding: 10,
  },
});

export default SwipeCard;
