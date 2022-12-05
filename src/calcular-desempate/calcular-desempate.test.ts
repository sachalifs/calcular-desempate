import { equipoFactory } from '../factory'
import { EquipoConPartidos } from '../types'
import calcularDesempate from './calcular-desempate'

describe('calcularDesempate', () => {
  describe('1. cuando hay diferencia de puntos', () => {
    it('pasa el que tiene más puntos', () => {
      const argentina = equipoFactory.build()
      const mexico = equipoFactory.build()
      const arabiaSaudita = equipoFactory.build()
      const polonia = equipoFactory.build()

      const argentinaConPartidos: EquipoConPartidos = {
        ...argentina,
        partidos: [
          {
            equipo: mexico,
            golesAFavor: 3,
            golesEnContra: 0,
          },
          {
            equipo: arabiaSaudita,
            golesAFavor: 2,
            golesEnContra: 0,
          },
          {
            equipo: polonia,
            golesAFavor: 2,
            golesEnContra: 0,
          },
        ],
      }

      const mexicoConPartidos: EquipoConPartidos = {
        ...mexico,
        partidos: [
          {
            equipo: argentina,
            golesAFavor: 0,
            golesEnContra: 3,
          },
          {
            equipo: arabiaSaudita,
            golesAFavor: 1,
            golesEnContra: 2,
          },
          {
            equipo: polonia,
            golesAFavor: 0,
            golesEnContra: 1,
          },
        ],
      }

      expect(calcularDesempate(argentinaConPartidos, mexicoConPartidos)).toBe(
        argentinaConPartidos
      )
    })
  })

  describe('2. cuando hay diferencia de goles', () => {
    it.todo('pasa el que tiene más goles')
  })

  describe('3. cuando hay diferencia de goles a favor', () => {
    it.todo('pasa el que tiene más goles a favor')
  })

  describe('4. cuando hay diferencia en el partido entre los equipos involucrados', () => {
    it.todo('pasa el que ganó el partido entre los equipos involucrados')
  })

  describe('5. cuando hay diferencia por fair play', () => {
    it.todo('pasa el que acumula menos puntos por tarjetas')
  })

  describe('6. cuando hay empate por fair play', () => {
    it.todo('se realiza un sorteo')
  })
})
