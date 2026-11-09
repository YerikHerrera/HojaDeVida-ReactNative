import { StyleSheet, Text, View } from "react-native";

interface Props {
  cargo: string;
  empresa: string;
  periodo: string;
  descripcion: string;
}

export default function TarjetaExperiencia({
  cargo,
  empresa,
  periodo,
  descripcion,
}: Props) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.cargo}>{cargo}</Text>
      <Text style={styles.empresa}>{empresa}</Text>
      <Text style={styles.periodo}>{periodo}</Text>
      <Text style={styles.descripcion}>{descripcion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    marginBottom: 14,
  },
  cargo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222222",
    marginBottom: 5,
  },
  empresa: {
    fontSize: 14,
    color: "#0875DF",
    fontWeight: "600",
  },
  periodo: {
    fontSize: 12,
    color: "#777777",
    marginBottom: 9,
  },
  descripcion: {
    fontSize: 13,
    color: "#555555",
    lineHeight: 19,
  },
});
