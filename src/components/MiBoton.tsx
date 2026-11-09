import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";

interface MiBotonProps {
  textoBoton: string;
  nombreIcono: keyof typeof Ionicons.glyphMap;
  colorBoton: string;
  onPress: () => void;
}

export default function MiBoton({
  textoBoton,
  nombreIcono,
  colorBoton,
  onPress,
}: MiBotonProps) {
  return (
    <Pressable
      style={[styles.boton, { backgroundColor: colorBoton }]}
      onPress={onPress}
    >
      <Ionicons
        name={nombreIcono}
        size={17}
        color={
          colorBoton === "#F2D66D" || colorBoton === "#E8D464"
            ? "#222222"
            : "#FFFFFF"
        }
      />

      <Text style={styles.textoBoton}>{textoBoton}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  boton: {
    height: 46,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginBottom: 10,
    borderRadius: 8,
  },
  textoBoton: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
});
