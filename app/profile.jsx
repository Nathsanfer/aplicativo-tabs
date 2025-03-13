import { View, Text, Image, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Profile() {
    return (
        <ImageBackground
            source={{ uri: 'https://i.pinimg.com/736x/82/c5/5e/82c55edf030dfafeefa935a226f669cb.jpg' }}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            imageStyle={{ opacity: 0.5 }}
        >
            <View style={{ alignItems: "center", gap: 25, padding: 20, backgroundColor: "rgba(255, 255, 255, 0.5)", borderRadius: 24 }}>
                <Image
                    source={{ uri: 'https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2025/02/16142816/GettyImages-2199338906.jpg' }}
                    style={{ width: 100, height: 100, borderRadius: 50 }}
                />
                <Text style={{ backgroundColor: "#FDFEFF", padding: 8, borderRadius: 24, width: 264 }}>Nome: Fernanda</Text>
                <Text style={{ backgroundColor: "#FDFEFF", padding: 8, borderRadius: 24, width: 264 }}>Sobrenome: Torres</Text>
                <Text style={{ backgroundColor: "#FDFEFF", padding: 8, borderRadius: 24, width: 264 }}>Data de Nascimento: 15/09/1965</Text>
                <Text style={{ backgroundColor: "#FDFEFF", padding: 8, borderRadius: 24, width: 264 }}>Email: fernanda.torres@gmail.com</Text>
            </View>
        </ImageBackground>
    );
}