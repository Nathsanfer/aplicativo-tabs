import { View, Text, Image, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function News() {
    return (

        <ImageBackground
                    source={{ uri: 'https://i.pinimg.com/736x/82/c5/5e/82c55edf030dfafeefa935a226f669cb.jpg' }}
                    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
                    imageStyle={{ opacity: 0.5 }}
                >

        <View style={{
            flex: 1, justifyContent: "center", alignItems: "center"
        }}>
            < Text >Fernanda Torres se destaca no Globo de Ouro e passa a ser tão buscada quanto “Ainda Estou Aqui”
            </Text>
            <Image
                source={{ uri: 'https://img.band.uol.com.br/image/2025/01/06/fernanda-torres-posa-com-o-trofeu-de-melhor-atriz-de-drama-apos-vencer-o-globo-de-ouro-2025-81959_800x450.webp' }}
                style={{ width: 200, height: 100 }}
            />

        </ View>
        </ImageBackground>
    );
}

