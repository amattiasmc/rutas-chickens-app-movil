import { createContext, useContext, useReducer, type ReactNode } from "react";

// Estructura de una solicitud
export interface Solicitud {
  id: string;
  nombre: string;
  telefono: string;
  tipo: string;
  descripcion: string;
  fecha: string;
}

// Datos recibidos del formulario
type NuevaSolicitud = Omit<Solicitud, "id" | "fecha">;

// Acciones que puede realizar el reducer
type Accion = {
  type: "AGREGAR";
  payload: Solicitud;
};

// Información compartida entre pantallas
interface ContextoSolicitudes {
  solicitudes: Solicitud[];
  agregarSolicitud: (datos: NuevaSolicitud) => void;
}

// Creamos el contexto
const SolicitudesContext = createContext<ContextoSolicitudes | undefined>(
  undefined,
);

// Función que administra las solicitudes
function solicitudesReducer(estado: Solicitud[], accion: Accion): Solicitud[] {
  switch (accion.type) {
    case "AGREGAR":
      return [accion.payload, ...estado];

    default:
      return estado;
  }
}

// Componente que comparte los datos
export function SolicitudesProvider({ children }: { children: ReactNode }) {
  const [solicitudes, dispatch] = useReducer(solicitudesReducer, []);

  const agregarSolicitud = (datos: NuevaSolicitud) => {
    const nuevaSolicitud: Solicitud = {
      ...datos,
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      fecha: new Date().toISOString(),
    };

    dispatch({
      type: "AGREGAR",
      payload: nuevaSolicitud,
    });
  };

  return (
    <SolicitudesContext.Provider value={{ solicitudes, agregarSolicitud }}>
      {children}
    </SolicitudesContext.Provider>
  );
}

// Hook personalizado
export function useSolicitudes() {
  const contexto = useContext(SolicitudesContext);

  if (!contexto) {
    throw new Error(
      "useSolicitudes debe utilizarse dentro de SolicitudesProvider",
    );
  }

  return contexto;
}
