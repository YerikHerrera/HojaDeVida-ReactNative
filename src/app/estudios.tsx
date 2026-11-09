import { ScrollView, StyleSheet, Text, View } from "react-native";

import TarjetaEstudio from "../components/TarjetaEstudio";

export default function Estudios() {
  return (
    <ScrollView
      style={estilos.container}
      contentContainerStyle={estilos.contenido}
    >
      <Text style={estilos.titulo}>Formación Académica</Text>

      <View style={estilos.presentacion}>
        <Text style={estilos.subtitulo}>Mi trayectoria educativa</Text>

        <Text style={estilos.descripcion}>
          Formación académica y complementaria adquirida durante mi proceso
          educativo y de aprendizaje en el SENA.
        </Text>
      </View>

      <View style={estilos.seccion}>
        <Text style={estilos.encabezado}>Educación</Text>

        <TarjetaEstudio
          titulo="Tecnólogo en Análisis y Desarrollo de Software"
          institucion="SENA - Etapa Lectiva"
          anio={2026}
          enCurso={true}
        />

        <TarjetaEstudio
          titulo="Técnico en Programación de Software"
          institucion="SENA"
          anio={2025}
          enCurso={false}
        />

        <TarjetaEstudio
          titulo="Bachiller Académico - Educación Media"
          institucion="Colegio Arborizadora Baja"
          anio={2025}
          enCurso={false}
        />

        <TarjetaEstudio
          titulo="Educación Básica Secundaria"
          institucion="Colegio Arborizadora Baja"
          anio={2023}
          enCurso={false}
        />

        <TarjetaEstudio
          titulo="Educación Básica Primaria"
          institucion="Colegio Arborizadora Baja"
          anio={2019}
          enCurso={false}
        />
      </View>

      <View style={estilos.seccion}>
        <Text style={estilos.encabezado}>Formación Complementaria</Text>

        <TarjetaEstudio
          titulo="English Does Work - Niveles 4, 5 y 6"
          institucion="SENA"
          anio={2026}
          enCurso={false}
        />

        <TarjetaEstudio
          titulo="Generación de Códigos de Software con Inteligencia Artificial"
          institucion="SENA"
          anio={2026}
          enCurso={false}
        />
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
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
  presentacion: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 15,
    marginTop: 18,
    marginBottom: 10,
    padding: 16,
    borderRadius: 12,
  },
  subtitulo: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#222222",
    marginBottom: 8,
  },
  descripcion: {
    fontSize: 13,
    color: "#555555",
    lineHeight: 20,
  },
  seccion: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 15,
    marginTop: 12,
    padding: 16,
    borderRadius: 12,
  },
  encabezado: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#0875DF",
    marginBottom: 8,
  },
});
