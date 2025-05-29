import React, { useRef } from "react";
import { View, Text, Image, Animated, PanResponder, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function SwipeCard({ profile, onSwipeRight, onSwipeLeft }) {
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
            null,
            { dx: pan.x, dy: pan.y },
        ], { useNativeDriver: false }),

        onPanResponderRelease: (e, gesture) => {
            if (gesture.dx > 120) {
            // Swipe right
            Animated.timing(pan, {
                toValue: { x: 500, y: 0 },
                duration: 300,
                useNativeDriver: false,
            }).start(() => onSwipeRight(profile));
            } else if (gesture.dx < -120) {
            // Swipe left
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

    const handleSwipe = (direction) => {
        Animated.timing(pan, {
        toValue: { x: direction === 'right' ? 500 : -500, y: 0 },
        duration: 300,
        useNativeDriver: false,
        }).start(() => {
        direction === 'right' ? onSwipeRight(profile) : onSwipeLeft(profile);
        });
    };

    return (
        <View style={styles.container}>
            <Animated.View
                style={[styles.card, { transform: pan.getTranslateTransform() }]}
                {...panResponder.panHandlers}
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
                    <TouchableOpacity style={styles.actionButton} onPress={() => handleSwipe('left')}>
                        <FontAwesome name="times-circle" size={50} color="red" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton} onPress={() => handleSwipe('right')}>
                        <FontAwesome name="check-circle" size={50} color="green" />
                    </TouchableOpacity>
                </View>
            
            </Animated.View>

        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 400,
    height: '100%',
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

// Use example profiles to test the component:
// const exampleProfiles = [
//   {
//     name: "Alice",
//     age: 25,
//     image: require('./assets/alice.jpg'),
//     tags: [
//       { label: "Adventurous", color: "#ff6347" },
//       { label: "Traveler", color: "#4682b4" },
//     ],
//   },
//   {
//     name: "Bob",
//     age: 30,
//     image: require('./assets/bob.jpg'),
//     tags: [
//       { label: "Gamer", color: "#32cd32" },
//       { label: "Tech Enthusiast", color: "#ffa500" },
//     ],
//   },
// ];
//
// function App() {
//   const handleSwipeRight = (profile) => {
//     console.log(`Swiped right on ${profile.name}`);
//   };
//   const handleSwipeLeft = (profile) => {
//     console.log(`Swiped left on ${profile.name}`);
//   };
//
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       {exampleProfiles.map((profile, index) => (
//         <SwipeCard
//           key={index}
//           profile={profile}
//           onSwipeRight={handleSwipeRight}
//           onSwipeLeft={handleSwipeLeft}
//         />
//       ))}
//     </View>
//   );
// }