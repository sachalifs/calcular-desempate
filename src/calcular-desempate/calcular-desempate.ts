import { EquipoConPartidos } from '../types'
import calcularPuntos from './calcular-puntos'

const calcularDesempate = (
  equipo1: EquipoConPartidos,
  equipo2: EquipoConPartidos
) => {
  const puntosDelEquipo1 = calcularPuntos(equipo1)
  const puntosDelEquipo2 = calcularPuntos(equipo2)

  if (puntosDelEquipo1 !== puntosDelEquipo2) {
    return puntosDelEquipo1 > puntosDelEquipo2 ? equipo1 : equipo2
  }
}

export default calcularDesempate
