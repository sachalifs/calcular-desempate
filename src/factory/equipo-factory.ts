import * as Factory from 'factory.ts'
import { Equipo } from '../types'

const equipoFactory = Factory.Sync.makeFactory<Equipo>({
  id: Factory.each(i => String(i)),
  nombre: Factory.each(i => `Equipo-${i}`),
})

export default equipoFactory
