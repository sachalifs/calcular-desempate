import { Equipo, EquipoConPartidos } from '../types'
import calcularPuntos from './calcular-puntos'

describe('calcularPuntos', () => {
  describe('cuando un equipo gana un partido', () => {
    it('suma 3 puntos', () => {
      const argentina: Equipo = {
        id: 'id-1',
        nombre: 'Argentina',
      }
      const mexico: Equipo = {
        id: 'id-2',
        nombre: 'Mexico',
      }

      const argentinaConPartidos: EquipoConPartidos = {
        ...argentina,
        partidos: [
          {
            equipo: mexico,
            golesAFavor: 1,
            golesEnContra: 0,
          },
        ],
      }

      expect(calcularPuntos(argentinaConPartidos)).toBe(3)
    })
  })

  describe('cuando un equipo empata un partido', () => {
    it('suma 1 punto', () => {
      const argentina: Equipo = {
        id: 'id-1',
        nombre: 'Argentina',
      }
      const mexico: Equipo = {
        id: 'id-2',
        nombre: 'Mexico',
      }

      const argentinaConPartidos: EquipoConPartidos = {
        ...argentina,
        partidos: [
          {
            equipo: mexico,
            golesAFavor: 1,
            golesEnContra: 1,
          },
        ],
      }

      expect(calcularPuntos(argentinaConPartidos)).toBe(1)
    })
  })

  describe('cuando un equipo pierde un partido', () => {
    it('no suma puntos', () => {
      const argentina: Equipo = {
        id: 'id-1',
        nombre: 'Argentina',
      }
      const mexico: Equipo = {
        id: 'id-2',
        nombre: 'Mexico',
      }

      const mexicoConPartidos: EquipoConPartidos = {
        ...mexico,
        partidos: [
          {
            equipo: argentina,
            golesAFavor: 0,
            golesEnContra: 2,
          },
        ],
      }

      expect(calcularPuntos(mexicoConPartidos)).toBe(0)
    })
  })

  describe('cuando un equipo jugó varios partidos', () => {
    it('acumula los puntos de cada partido', () => {
      const argentina: Equipo = {
        id: 'id-1',
        nombre: 'Argentina',
      }
      const mexico: Equipo = {
        id: 'id-2',
        nombre: 'Mexico',
      }
      const polonia: Equipo = {
        id: 'id-3',
        nombre: 'Polonia',
      }

      const argentinaConPartidos: EquipoConPartidos = {
        ...argentina,
        partidos: [
          {
            equipo: mexico,
            golesAFavor: 2,
            golesEnContra: 0,
          },
          {
            equipo: polonia,
            golesAFavor: 3,
            golesEnContra: 0,
          },
        ],
      }

      expect(calcularPuntos(argentinaConPartidos)).toBe(6)
    })
  })
})
