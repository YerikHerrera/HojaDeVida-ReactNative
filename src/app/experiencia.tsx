import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import TarjetaExperiencia from "../components/TarjetaExperiencia";

export default function Experiencia() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Experiencia</Text>

      <View style={styles.encabezado}>
        <Ionicons name="briefcase" size={90} color="#0875DF" />

        <Text style={styles.nombre}>Yerik Julian Castañeda Herrera</Text>

        <Text style={styles.subtitulo}>Experiencia Práctica</Text>
      </View>

      <View style={styles.contenido}>
        <TarjetaExperiencia
          cargo="Desarrollador de Aplicación Web"
          empresa="Proyecto académico - ADSO"
          periodo="2026"
          descripcion="Participación en el desarrollo de una aplicación web para la gestión de información, utilizando tecnologías como React, TypeScript y herramientas de desarrollo de software."
        />

        <TarjetaExperiencia
          cargo="Desarrollador de Base de Datos"
          empresa="Proyecto formativo - ADSO"
          periodo="2026"
          descripcion="Diseño y organización de bases de datos relacionales, elaboración de modelos entidad-relación y creación de consultas SQL para administrar la información."
        />

        <TarjetaExperiencia
          cargo="Desarrollador de Interfaces"
          empresa="Prácticas académicas"
          periodo="2026"
          descripcion="Creación de interfaces de usuario mediante HTML, CSS y JavaScript, aplicando principios de organización, diseño y funcionalidad en aplicaciones."
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
  titulo: {
    fontSize: 20,
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
  contenido: {
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
});
