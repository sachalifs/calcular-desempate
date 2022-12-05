interface Partido {
  equipo: Equipo
  golesAFavor: number
  golesEnContra: number
}

export interface Equipo {
  id: string
  nombre: string
}

export type EquipoConPartidos = Equipo & {
  partidos: Partido[]
}
