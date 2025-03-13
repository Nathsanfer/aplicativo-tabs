import { Tabs } from "expo-router";
export default function Layout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: "Home" }} />
            <Tabs.Screen name="profile" options={{ title: "Perfil" }} />
            <Tabs.Screen name="news" options={{ title: "Notícias" }} />
        </Tabs>
    );
}