import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import TarjetaHobby from "../components/TarjetaHobby";

export default function Hobbies() {
  const mostrarDetalle = (hobby: string) => {
    switch (hobby) {
      case "Arte":
        Alert.alert(
          "Dibujo",
          "Me interesa lo relacionado con el dibujo, es una pasión que he tenido desde que era niño.",
        );
        break;

      case "Tecnología e IA":
        Alert.alert(
          "Tecnología e Inteligencia Artificial",
          "Me gusta conocer los avances tecnológicos y explorar cómo la inteligencia artificial puede utilizarse en diferentes campos.",
        );
        break;

      case "Entrenamiento":
        Alert.alert(
          "Ejercitarme",
          "Me gusta mucho ejercitarme todas las mañanas para cuidarme físicamente y empezar el día con energía.",
        );
        break;

      case "Lógica":
        Alert.alert(
          "Retos de lógica",
          "Disfruto analizar problemas, encontrar soluciones y desarrollar el pensamiento lógico mediante diferentes desafíos.",
        );
        break;
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contenido}
    >
      <Text style={styles.titulo}>Mis Hobbies</Text>

      <View style={styles.encabezado}>
        <Ionicons name="heart" size={85} color="#0875DF" />

        <Text style={styles.nombre}>Yerik Julian Castañeda Herrera</Text>

        <Text style={styles.subtitulo}>Intereses y pasatiempos</Text>
      </View>

      <View style={styles.seccion}>
        <Text style={styles.descripcion}>
          Estas son algunas de las actividades y temas que despiertan mi interés
          y contribuyen a mi aprendizaje personal.
        </Text>

        <TarjetaHobby
          titulo="Arte"
          descripcion="Todo lo relacionado al dibujo y sus tecnicas."
          nombreIcono="brush"
          color="#0875DF"
          onPress={() => mostrarDetalle("Arte")}
        />

        <TarjetaHobby
          titulo="Tecnología e IA"
          descripcion="Exploración de nuevas tecnologías e inteligencia artificial."
          nombreIcono="hardware-chip"
          color="#7654C8"
          onPress={() => mostrarDetalle("Tecnología e IA")}
        />

        <TarjetaHobby
          titulo="Entrenamiento"
          descripcion="Pasión por el ejercicio físico y vida saludable."
          nombreIcono="barbell-outline"
          color="#21966B"
          onPress={() => mostrarDetalle("Entrenamiento")}
        />

        <TarjetaHobby
          titulo="Retos de lógica"
          descripcion="Resolución de problemas y pensamiento analítico."
          nombreIcono="bulb"
          color="#E59B27"
          onPress={() => mostrarDetalle("Lógica")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6F8",
  },
  contenido: {
    paddingBottom: 30,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "600",
    padding: 18,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    color: "#222222",
  },
  encabezado: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 22,
  },
  nombre: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#222222",
    marginTop: 8,
  },
  subtitulo: {
    fontSize: 15,
    color: "#0875DF",
  },
  seccion: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 15,
    padding: 16,
    borderRadius: 12,
  },
  descripcion: {
    fontSize: 13,
    color: "#555555",
    lineHeight: 20,
    marginBottom: 16,
  },
});
