import { StyleSheet, Text, View } from 'react-native';

type Props = {
  titulo: string;
  institucion: string;
  anio: number;
  enCurso: boolean;
};

const TarjetaEstudio = ({ titulo, institucion, anio, enCurso }: Props) => {
  return (
    <View
      style={[
        estilos.tarjeta,
        enCurso ? estilos.enCurso : estilos.finalizado
      ]}
    >
      <Text style={estilos.titulo}>{titulo}</Text>

      {enCurso && (
        <Text style={estilos.badge}>En Curso</Text>
      )}

      <Text style={estilos.subtitulo}>{institucion}</Text>
      <Text style={estilos.anio}>{anio}</Text>
    </View>
  );
};

export default TarjetaEstudio;

const estilos = StyleSheet.create({
  tarjeta: {
    padding: 16,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
  },
  finalizado: {
    backgroundColor: '#ffffff',
    borderColor: '#ccc',
  },
  enCurso: {
    backgroundColor: '#eef2ff',
    borderColor: '#6366f1',
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  subtitulo: {
    fontSize: 14,
    color: '#555',
  },
  anio: {
    fontSize: 12,
    color: '#888',
  },
  badge: {
    color: '#6366f1',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
