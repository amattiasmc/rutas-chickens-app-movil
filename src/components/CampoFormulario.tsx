import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";

interface CampoFormularioProps extends TextInputProps {
  etiqueta: string;
  error?: string;
}

export default function CampoFormulario({
  etiqueta,
  error,
  ...props
}: CampoFormularioProps) {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.etiqueta}>{etiqueta}</Text>

      <TextInput
        style={[styles.input, error ? styles.inputError : null]}
        placeholderTextColor="#999"
        {...props}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    marginBottom: 16,
  },
  etiqueta: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    backgroundColor: "#FFF",
    color: "#333",
  },
  inputError: {
    borderColor: "#D32F2F",
  },
  error: {
    color: "#D32F2F",
    fontSize: 12,
    marginTop: 5,
  },
});
