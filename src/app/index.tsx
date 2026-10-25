import { useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import CampoFormulario from "../components/CampoFormulario";

export default function Login() {
  const router = useRouter();

  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  const [errores, setErrores] = useState({
    usuario: "",
    contrasena: "",
  });

  const ingresar = () => {
    const nuevosErrores = {
      usuario: usuario.trim() ? "" : "El usuario es obligatorio.",
      contrasena: contrasena.trim() ? "" : "La contraseña es obligatoria.",
    };

    setErrores(nuevosErrores);

    if (nuevosErrores.usuario || nuevosErrores.contrasena) {
      return;
    }

    router.replace({
      pathname: "/home",
      params: {
        usuario: usuario.trim(),
      },
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.pantalla}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.contenido}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.encabezado}>
          <View style={styles.logo}>
            <Text style={styles.icono}></Text>
          </View>

          <Text style={styles.nombreEmpresa}>RUTA'S CHICKENS</Text>

          <Text style={styles.eslogan}>Tu sabor favorito, más cerca de ti</Text>
        </View>

        <View style={styles.tarjeta}>
          <Text style={styles.titulo}>Bienvenido!</Text>

          <Text style={styles.subtitulo}>
            Inicia sesión para registrar tus pedidos.
          </Text>

          <CampoFormulario
            etiqueta="Usuario"
            placeholder="Ingresa tu usuario"
            value={usuario}
            onChangeText={(texto) => {
              setUsuario(texto);
              setErrores((anterior) => ({
                ...anterior,
                usuario: "",
              }));
            }}
            autoCapitalize="none"
            autoCorrect={false}
            error={errores.usuario}
          />

          <CampoFormulario
            etiqueta="Contraseña"
            placeholder="Ingresa tu contraseña"
            value={contrasena}
            onChangeText={(texto) => {
              setContrasena(texto);
              setErrores((anterior) => ({
                ...anterior,
                contrasena: "",
              }));
            }}
            secureTextEntry
            error={errores.contrasena}
          />

          <Pressable
            style={({ pressed }) => [
              styles.boton,
              pressed && styles.botonPresionado,
            ]}
            onPress={ingresar}
            accessibilityRole="button"
          >
            <Text style={styles.textoBoton}>Ingresar</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: "#FFF8EF",
  },
  contenido: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 50,
  },
  encabezado: {
    alignItems: "center",
    marginBottom: 30,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#FDE8C7",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  icono: {
    fontSize: 50,
  },
  nombreEmpresa: {
    color: "#B71C1C",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  eslogan: {
    fontSize: 14,
    color: "#795548",
    textAlign: "center",
    marginTop: 8,
  },
  tarjeta: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 24,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#252525",
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 14,
    color: "#777777",
    lineHeight: 21,
    marginBottom: 25,
  },
  boton: {
    backgroundColor: "#B71C1C",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 12,
  },
  botonPresionado: {
    opacity: 0.8,
  },
  textoBoton: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
  },
  pie: {
    textAlign: "center",
    color: "#9E9E9E",
    fontSize: 12,
    marginTop: 35,
  },
});
