import { Ionicons } from "@expo/vector-icons";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";

import MiBoton from "../components/MiBoton";

//Enlaces personales
const enlaces = {
  linkedin:
    "https://www.linkedin.com/in/yerik-herrera-00ba34403?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  facebook: "https://www.facebook.com/share/1BcCpaBPVX/",
};

export default function Index() {
  const mostrarContacto = (tipo: string) => {
    switch (tipo) {
      case "correo":
        Alert.alert(
          "Contacto por correo",
          "Correo electrónico: cyerikjulian@gmail.com",
        );
        break;

      case "llamar":
        Alert.alert(
          "Contacto telefónico",
          "Número telefonico: +57 321 9858565",
        );
        break;

      case "linkedin":
        Alert.alert("Perfil de LinkedIn", enlaces.linkedin);
        break;

      case "facebook":
        Alert.alert("Perfil de Facebook", enlaces.facebook);
        break;

      case "instagram":
        Alert.alert("Perfil de Instagram", "No disponible temporalmente.");
        break;

      case "tiktok":
        Alert.alert("Perfil de TikTok", "No disponible temporalmente.");
        break;

      case "estudios":
        Alert.alert(
          "Formación Académica",
          "EDUCACIÓN\n\n" +
            "• Tecnólogo en Análisis y Desarrollo de Software (Etapa Lectiva) | SENA | 2026 - Actualidad\n\n" +
            "• Técnico en Programación de Software | SENA | 2024 - 2025\n\n" +
            "• Bachiller Académico | Colegio Arborizadora Baja | 2025\n\n" +
            "• Educación Media | Colegio Arborizadora Baja | 2024 - 2025\n\n" +
            "• Educación Básica Secundaria | Colegio Arborizadora Baja | 2020 - 2023\n\n" +
            "• Educación Básica Primaria | Colegio Arborizadora Baja | 2014 - 2019\n\n" +
            "FORMACIÓN COMPLEMENTARIA\n\n" +
            "• English Does Work, niveles 4, 5 y 6 | SENA | 2026\n\n" +
            "• Generación de Códigos de Software con Inteligencia Artificial | SENA | 2026",
        );
        break;

      case "github":
        Alert.alert(
          "Repositorio de GitHub",
          "Proyecto BUYDRAX:\nhttps://github.com/YerikHerrera/Proyecto_Buydrax",
        );
        break;
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contenido}
    >
      <Text style={styles.titulo}>Datos Personales</Text>

      <View style={styles.perfil}>
        <Ionicons name="person-circle" size={100} color="#0875DF" />

        <Text style={styles.nombre}>Yerik Julian Castañeda Herrera</Text>

        <Text style={styles.titulacion}>Tecnólogo en ADSO</Text>
      </View>

      <View style={styles.tarjeta}>
        <Text style={styles.subtitulo}>Perfil Profesional</Text>

        <Text style={styles.descripcion}>
          Aprendiz del SENA apasionado por la gestión de bases de datos
          relacionales. Con habilidades en programación, desarrollo de software
          y bases de datos PostgreSQL.
        </Text>
      </View>

      <View style={styles.contacto}>
        <Text style={styles.subtitulo}>Contacto e Intereses</Text>

        <MiBoton
          textoBoton="Enviar Correo"
          nombreIcono="mail"
          colorBoton="#E8D464"
          onPress={() => mostrarContacto("correo")}
        />

        <MiBoton
          textoBoton="Llamar"
          nombreIcono="call"
          colorBoton="#527CE0"
          onPress={() => mostrarContacto("llamar")}
        />

        <MiBoton
          textoBoton="Ver Perfil LinkedIn"
          nombreIcono="logo-linkedin"
          colorBoton="#0077B5"
          onPress={() => mostrarContacto("linkedin")}
        />

        <MiBoton
          textoBoton="Facebook"
          nombreIcono="logo-facebook"
          colorBoton="#1877F2"
          onPress={() => mostrarContacto("facebook")}
        />

        <MiBoton
          textoBoton="Instagram"
          nombreIcono="logo-instagram"
          colorBoton="#E1306C"
          onPress={() => mostrarContacto("instagram")}
        />

        <MiBoton
          textoBoton="TikTok"
          nombreIcono="musical-notes-outline"
          colorBoton="#000000"
          onPress={() => mostrarContacto("tiktok")}
        />

        <MiBoton
          textoBoton="Estudios"
          nombreIcono="school-outline"
          colorBoton="#0875DF"
          onPress={() => mostrarContacto("estudios")}
        />

        <MiBoton
          textoBoton="GitHub - Mis proyectos"
          nombreIcono="logo-github"
          colorBoton="#333333"
          onPress={() => mostrarContacto("github")}
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
  perfil: {
    alignItems: "center",
    marginTop: 18,
    marginBottom: 18,
  },
  nombre: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#222222",
    marginTop: 5,
  },
  titulacion: {
    color: "#0875DF",
    fontSize: 15,
    fontWeight: "500",
  },
  tarjeta: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 15,
    padding: 16,
    borderRadius: 12,
    marginBottom: 18,
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222222",
    marginBottom: 14,
  },
  descripcion: {
    fontSize: 13,
    color: "#555555",
    lineHeight: 20,
  },
  contacto: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 15,
    padding: 16,
    borderRadius: 12,
  },
});
