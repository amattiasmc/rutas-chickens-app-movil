import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Home() {
  const router = useRouter();
  const { usuario } = useLocalSearchParams<{ usuario?: string }>();

  const registrarSolicitud = () => {
    router.push("/solicitud");
  };

  const cerrarSesion = () => {
    router.replace("/");
  };

  return (
    <ScrollView
      style={styles.pantalla}
      contentContainerStyle={styles.contenido}
    >
      <View style={styles.encabezado}>
        <Text style={styles.nombreEmpresa}>RUTA'S CHICKENS</Text>

        <Text style={styles.bienvenida}>¡Hola, {usuario || "cliente"}!</Text>

        <Text style={styles.subtitulo}>Bienvenido a la mejor pollería</Text>
      </View>

      <View style={styles.banner}>
        <Text style={styles.iconoBanner}>🍗</Text>

        <Text style={styles.tituloBanner}>
          ¡El mejor pollo a la brasa para ti!
        </Text>

        <Text style={styles.descripcionBanner}>
          Disfruta de tus comidas favoritas y realiza tus pedidos fácilmente.
        </Text>
      </View>

      <Text style={styles.tituloSeccion}>¿Qué deseas hacer hoy?</Text>

      <Pressable style={styles.tarjeta} onPress={registrarSolicitud}>
        <Text style={styles.iconoTarjeta}></Text>

        <View style={styles.informacion}>
          <Text style={styles.tituloTarjeta}>Registrar solicitud</Text>

          <Text style={styles.descripcionTarjeta}>
            Registra un pedido, consulta o reclamo
          </Text>
        </View>

        <Text style={styles.flecha}>›</Text>
      </Pressable>

      <Pressable
        style={styles.tarjeta}
        onPress={() => router.push("/mis-solicitudes")}
      >
        <Text style={styles.iconoTarjeta}></Text>
        <View style={styles.informacion}>
          <Text style={styles.tituloTarjeta}>Mis solicitudes</Text>

          <Text style={styles.descripcionTarjeta}>
            Consulta tus solicitudes registradas.
          </Text>
        </View>

        <Text style={styles.flecha}>›</Text>
      </Pressable>

      <Pressable style={styles.botonSalir} onPress={cerrarSesion}>
        <Text style={styles.textoSalir}>Cerrar sesión</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: "#FFF8EF",
  },
  contenido: {
    padding: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  encabezado: {
    marginBottom: 25,
  },
  nombreEmpresa: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#B71C1C",
    marginBottom: 25,
  },
  bienvenida: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#252525",
  },
  subtitulo: {
    fontSize: 15,
    color: "#777",
    marginTop: 6,
  },
  banner: {
    backgroundColor: "#B71C1C",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    marginBottom: 30,
  },
  iconoBanner: {
    fontSize: 65,
    marginBottom: 12,
  },
  tituloBanner: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  descripcionBanner: {
    color: "#FFE0B2",
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
    lineHeight: 21,
  },
  tituloSeccion: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  tarjeta: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    elevation: 2,
  },
  tarjetaInformativa: {
    backgroundColor: "#F5EEE5",
    borderRadius: 15,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    opacity: 0.8,
  },
  iconoTarjeta: {
    fontSize: 30,
    marginRight: 15,
  },
  informacion: {
    flex: 1,
  },
  tituloTarjeta: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  descripcionTarjeta: {
    color: "#777",
    fontSize: 13,
    marginTop: 5,
    lineHeight: 19,
  },
  flecha: {
    fontSize: 30,
    color: "#B71C1C",
  },
  botonSalir: {
    marginTop: 30,
    padding: 16,
    borderWidth: 1,
    borderColor: "#B71C1C",
    borderRadius: 12,
    alignItems: "center",
  },
  textoSalir: {
    color: "#B71C1C",
    fontSize: 16,
    fontWeight: "bold",
  },
});
