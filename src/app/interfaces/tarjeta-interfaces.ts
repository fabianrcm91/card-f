export interface TarjetaConsultada {
  pan: string
  titular: string
  cedula: number
  telefono: number
  estado: string
}

export interface CrearTarjeta {
  tipo: string
  pan: number
  titular: string
  cedula: number
  telefono: number
}

export interface DatosTarjeta {
  codRespuesta: string
  pan: string
  message: string
  numeroValidacion: String
}
