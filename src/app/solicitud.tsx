import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import CampoFormulario from "../components/CampoFormulario";
import { useSolicitudes } from "../context/SolicitudesContext";

const tiposSolicitud = [
  "Pedido a domicilio",
  "Pedido para recoger",
  "Consulta",
  "Reclamo",
];

export default function Solicitud() {
  const router = useRouter();
  const { agregarSolicitud } = useSolicitudes();

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [errores, setErrores] = useState({
    nombre: "",
    telefono: "",
    tipo: "",
    descripcion: "",
  });

  const registrarSolicitud = () => {
    const nuevosErrores = {
      nombre: nombre.trim() ? "" : "El nombre es obligatorio.",

      telefono: !telefono.trim()
        ? "El teléfono es obligatorio."
        : !/^[0-9]{9}$/.test(telefono)
          ? "Ingresa un teléfono de 9 dígitos."
          : "",

      tipo: tipo ? "" : "Selecciona un tipo de solicitud.",

      descripcion: descripcion.trim() ? "" : "La descripción es obligatoria.",
    };

    setErrores(nuevosErrores);

    const hayErrores = Object.values(nuevosErrores).some(
      (error) => error !== "",
    );

    if (hayErrores) {
      return;
    }

    agregarSolicitud({
      nombre: nombre.trim(),
      telefono: telefono.trim(),
      tipo: tipo,
      descripcion: descripcion.trim(),
    });

    Alert.alert(
      "¡Solicitud registrada! ",
      "Tu solicitud se ha registrado correctamente.",
      [
        {
          text: "Aceptar",
          onPress: () => router.back(),
        },
      ],
    );
  };

  return (
    <ScrollView
      style={styles.pantalla}
      contentContainerStyle={styles.contenido}
      keyboardShouldPersistTaps="handled"
    >
      <Pressable onPress={() => router.back()}>
        <Text style={styles.volver}>← Volver</Text>
      </Pressable>

      <Text style={styles.titulo}>Nueva solicitud</Text>

      <Text style={styles.subtitulo}>
        Completa tus datos para registrar una solicitud
      </Text>

      <View style={styles.tarjeta}>
        <CampoFormulario
          etiqueta="Nombre del cliente"
          placeholder="Ingresa tu nombre completo"
          value={nombre}
          onChangeText={(texto) => {
            setNombre(texto);
            setErrores((anterior) => ({
              ...anterior,
              nombre: "",
            }));
          }}
          error={errores.nombre}
        />

        <CampoFormulario
          etiqueta="Teléfono"
          placeholder="Ej: 987654321"
          value={telefono}
          onChangeText={(texto) => {
            setTelefono(texto);
            setErrores((anterior) => ({
              ...anterior,
              telefono: "",
            }));
          }}
          keyboardType="phone-pad"
          maxLength={9}
          error={errores.telefono}
        />

        <Text style={styles.etiqueta}>Tipo de solicitud</Text>

        <View style={styles.opciones}>
          {tiposSolicitud.map((opcion) => (
            <Pressable
              key={opcion}
              style={[styles.opcion, tipo === opcion && styles.opcionActiva]}
              onPress={() => {
                setTipo(opcion);
                setErrores((anterior) => ({
                  ...anterior,
                  tipo: "",
                }));
              }}
            >
              <Text
                style={[
                  styles.textoOpcion,
                  tipo === opcion && styles.textoActivo,
                ]}
              >
                {opcion}
              </Text>
            </Pressable>
          ))}
        </View>

        {errores.tipo ? <Text style={styles.error}>{errores.tipo}</Text> : null}

        <CampoFormulario
          etiqueta="Descripción"
          placeholder="Describe tu pedido, consulta o reclamo..."
          value={descripcion}
          onChangeText={(texto) => {
            setDescripcion(texto);
            setErrores((anterior) => ({
              ...anterior,
              descripcion: "",
            }));
          }}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          error={errores.descripcion}
        />

        <Pressable style={styles.boton} onPress={registrarSolicitud}>
          <Text style={styles.textoBoton}>Registrar solicitud</Text>
        </Pressable>
      </View>
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
    paddingTop: 55,
    paddingBottom: 50,
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
    marginTop: 10,
    marginBottom: 25,
    lineHeight: 21,
  },
  tarjeta: {
    backgroundColor: "#FFFFFF",
    padding: 22,
    borderRadius: 20,
    elevation: 3,
  },
  etiqueta: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
    marginBottom: 10,
  },
  opciones: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 20,
  },
  opcion: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: "#FFF",
  },
  opcionActiva: {
    borderColor: "#B71C1C",
    backgroundColor: "#B71C1C",
  },
  textoOpcion: {
    fontSize: 13,
    color: "#555",
  },
  textoActivo: {
    color: "#FFF",
    fontWeight: "bold",
  },
  error: {
    color: "#D32F2F",
    fontSize: 12,
    marginBottom: 12,
  },
  boton: {
    backgroundColor: "#B71C1C",
    padding: 17,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  textoBoton: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
