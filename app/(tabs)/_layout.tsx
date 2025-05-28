import { Tabs } from 'expo-router';
import { Icon } from '@rneui/themed';
import { StyleSheet } from 'react-native';

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#007bff',
                    height: 60,
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: '#cce4ff',
                headerShown: false,
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: 'bold',
                },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon
                            name={focused ? "home" : "home-outline"}
                            type="ionicon"
                            color={color}
                            size={size}
                            iconStyle={styles.iconStyle}
                        />
                    ),
                    headerTitle: 'Game On',
                }}
            />
            <Tabs.Screen
                name="community"
                options={{
                    tabBarLabel: 'Comunidade',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon
                            name={focused ? "people" : "people-outline"}
                            type="ionicon"
                            color={color}
                            size={size}
                            iconStyle={styles.iconStyle}
                        />
                    ),
                    headerTitle: 'Comunidade',
                }}
            />
            <Tabs.Screen
                name="events"
                options={{
                    tabBarLabel: 'Eventos',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon
                            name={focused ? "add-circle" : "add-circle-outline"}
                            type="ionicon"
                            color={color}
                            size={size}
                            iconStyle={styles.iconStyle}
                        />
                    ),
                    headerTitle: 'Eventos',
                }}
            />
            <Tabs.Screen
                name="notification"
                options={{
                    headerShown: true,
                    tabBarLabel: 'Notificações',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon
                            name={focused ? "notifications" : "notifications-outline"}
                            type="ionicon"
                            color={color}
                            size={size}
                            iconStyle={styles.iconStyle}
                        />
                    ),
                    headerTitle: 'Notificações',
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon
                            name={focused ? "person" : "person-outline"}
                            type="ionicon"
                            color={color}
                            size={size}
                            iconStyle={styles.iconStyle}
                        />
                    ),
                    headerTitle: 'Perfil',
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    iconStyle: {
        cursor: 'pointer',
    }
});