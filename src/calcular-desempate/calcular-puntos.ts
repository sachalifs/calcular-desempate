import { EquipoConPartidos } from '../types'

const calcularPuntos = (equipo: EquipoConPartidos) =>
  equipo.partidos.reduce((accum, partido) => {
    if (partido.golesAFavor > partido.golesEnContra) {
      return accum + 3
    }

    if (partido.golesAFavor === partido.golesEnContra) {
      return accum + 1
    }

    return accum + 0
  }, 0)

export default calcularPuntos
