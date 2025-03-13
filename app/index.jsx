import { View, Text, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
    return (

        <ImageBackground
            source={{ uri: 'https://i.pinimg.com/736x/bc/fa/a3/bcfaa3d184f30a9a79debd6d40c6ebb4.jpg' }}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            imageStyle={{ opacity: 0.5 }}
        >

            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 10 }}>
                <Text style={{fontWeight: "bold", fontSize: 25}}>Bem-Vindo á Página Inicial</Text>
                <Text style={{fontWeight: 400}}>Aperte no Perfil para ver suas informações.</Text>
                <Text style={{fontWeight: 400}}>Aperte nas Notícias para ficar atualizado.</Text>
            </View>

        </ImageBackground>
    );
}

