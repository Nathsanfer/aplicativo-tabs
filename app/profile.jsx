import { View, Text, Image, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Profile() {
    return (
        <ImageBackground
            source={{ uri: 'https://i.pinimg.com/736x/82/c5/5e/82c55edf030dfafeefa935a226f669cb.jpg' }}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            imageStyle={{ opacity: 0.5 }}
        >
            <View style={{ alignItems: "center" }}>
                <Image
                    source={{ uri: 'https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2025/02/16142816/GettyImages-2199338906.jpg' }}
                    style={{ width: 100, height: 100, borderRadius: 50 }}
                />
                <Text>Primeiro Nome: Fernanda</Text>
                <Text>Sobrenome: Torres</Text>
                <Text>Data de Nascimento: 15 de Setembro de 1965</Text>
                <Text>Email: fernanda.torres@gmail.com</Text>
            </View>
        </ImageBackground>
    );
}