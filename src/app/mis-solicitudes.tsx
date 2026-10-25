import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

import { useSolicitudes } from "../context/SolicitudesContext";

export default function MisSolicitudes() {
  const router = useRouter();

  const { solicitudes } = useSolicitudes();

  const [mostrarAviso, setMostrarAviso] = useState(true);

  // Ocultar el aviso después de 4 segundos
  useEffect(() => {
    const temporizador = setTimeout(() => {
      setMostrarAviso(false);
    }, 4000);

    return () => clearTimeout(temporizador);
  }, []);

  return (
    <View style={styles.pantalla}>
      <FlatList
        data={solicitudes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contenido}
        ListHeaderComponent={
          <View>
            <Pressable onPress={() => router.back()}>
              <Text style={styles.volver}>← Volver</Text>
            </Pressable>

            <Text style={styles.titulo}>Mis solicitudes</Text>

            <Text style={styles.subtitulo}>
              Aquí puedes consultar las solicitudes registradas
            </Text>

            {mostrarAviso && (
              <View style={styles.aviso}>
                <Text style={styles.textoAviso}>
                  Consulta aquí tus pedidos, consultas y reclamos.
                </Text>
              </View>
            )}

            <Text style={styles.contador}>
              Total de solicitudes: {solicitudes.length}
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.tarjeta}>
            <Text style={styles.tipo}>{item.tipo}</Text>

            <Text style={styles.dato}>Cliente: {item.nombre}</Text>

            <Text style={styles.dato}>Teléfono: {item.telefono}</Text>

            <Text style={styles.descripcion}>{item.descripcion}</Text>

            <Text style={styles.fecha}>
              Registrado: {new Date(item.fecha).toLocaleString()}
            </Text>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.vacio}>
            <Text style={styles.iconoVacio}>📭</Text>

            <Text style={styles.textoVacio}>
              Todavía no tienes solicitudes registradas.
            </Text>

            <Pressable
              style={styles.boton}
              onPress={() => router.push("/solicitud")}
            >
              <Text style={styles.textoBoton}>Registrar solicitud</Text>
            </Pressable>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: "#FFF8EF",
  },
  contenido: {
    padding: 24,
    paddingTop: 55,
    paddingBottom: 50,
    flexGrow: 1,
  },
  volver: {
    color: "#B71C1C",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 25,
  },
  titulo: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#252525",
  },
  subtitulo: {
    fontSize: 14,
    color: "#777",
    lineHeight: 21,
    marginTop: 10,
    marginBottom: 20,
  },
  aviso: {
    backgroundColor: "#FDE8C7",
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
  },
  textoAviso: {
    color: "#795548",
    fontSize: 14,
  },
  contador: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 18,
  },
  tarjeta: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
  },
  tipo: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#B71C1C",
    marginBottom: 12,
  },
  dato: {
    fontSize: 14,
    color: "#444",
    marginBottom: 8,
  },
  descripcion: {
    fontSize: 14,
    color: "#555",
    lineHeight: 21,
    marginTop: 8,
  },
  fecha: {
    fontSize: 12,
    color: "#999",
    marginTop: 15,
  },
  vacio: {
    alignItems: "center",
    paddingTop: 50,
  },
  iconoVacio: {
    fontSize: 60,
    marginBottom: 15,
  },
  textoVacio: {
    fontSize: 15,
    color: "#777",
    textAlign: "center",
    marginBottom: 25,
  },
  boton: {
    backgroundColor: "#B71C1C",
    padding: 15,
    borderRadius: 12,
  },
  textoBoton: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
