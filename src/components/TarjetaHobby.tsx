import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  titulo: string;
  descripcion: string;
  nombreIcono: keyof typeof Ionicons.glyphMap;
  color: string;
  onPress: () => void;
}

export default function TarjetaHobby({
  titulo,
  descripcion,
  nombreIcono,
  color,
  onPress,
}: Props) {
  return (
    <Pressable style={styles.tarjeta} onPress={onPress}>
      <View style={[styles.icono, { backgroundColor: color }]}>
        <Ionicons name={nombreIcono} size={30} color="#FFFFFF" />
      </View>

      <View style={styles.contenido}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.descripcion}>{descripcion}</Text>
      </View>

      <Ionicons name="chevron-forward" size={22} color="#888888" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    marginBottom: 14,
    gap: 12,
  },
  icono: {
    width: 52,
    height: 52,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  contenido: {
    flex: 1,
  },
  titulo: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#222222",
    marginBottom: 5,
  },
  descripcion: {
    fontSize: 12,
    color: "#666666",
    lineHeight: 18,
  },
});
