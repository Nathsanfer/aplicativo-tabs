import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#FB7F62",
                tabBarInactiveTintColor: "gray",
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Perfil",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" color={color} size={size} />
                    ),
                }}
            />
            <Tabs.Screen
                name="news"
                options={{
                    title: "Notícias",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="book" color={color} size={size} />
                    ),
                }}
            />
        </Tabs>
    );
}