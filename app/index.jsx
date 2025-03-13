import { View, Text, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
    return (

        <ImageBackground
            source={{ uri: 'https://i.pinimg.com/736x/bc/fa/a3/bcfaa3d184f30a9a79debd6d40c6ebb4.jpg' }}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            imageStyle={{ opacity: 0.5 }}
        >

            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Bem-Vindo á Página Inicial</Text>
                <Text>Aperte no Perfil para ver suas informações.</Text>
                <Text>Aperte nas Notícias para ficar atualizado.</Text>
            </View>

        </ImageBackground>
    );
}

