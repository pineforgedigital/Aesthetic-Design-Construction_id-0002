import { type SchemaTypeDefinition } from 'sanity'
import { projectType } from './projectType'
import { teamMemberType } from './teamMemberType'
import { serviceType } from './serviceType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, teamMemberType, serviceType],
}
