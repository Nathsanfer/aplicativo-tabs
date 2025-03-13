import { View, Text, Image, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function News() {
    return (

        <ImageBackground
            source={{ uri: 'https://i.pinimg.com/736x/82/c5/5e/82c55edf030dfafeefa935a226f669cb.jpg' }}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            imageStyle={{ opacity: 0.5 }}
        >

            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 30, marginRight: 30, marginBottom: 15, color: "#191414" }}>
                    Fernanda Torres se destaca no Globo de Ouro e passa a ser tão buscada quanto “Ainda Estou Aqui”
                </Text>
                <Image
                    source={{ uri: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/01/fernanda-torres-look-para-Globo-de-Ouro-e1736187428933.jpg' }}
                    style={{ width: 400, height: 200 }}
                />
                <Text style={{ fontWeight: "bold", fontSize: 12, margin: 25, color: "#474b4e", textAlign: "center" }}>
                    Conforme dados do Google Trends, tanto o filme quanto a atriz reacenderam uma esperança: trazer o Oscar para o Brasil
                </Text>

            </ View>
        </ImageBackground>
    );
}

