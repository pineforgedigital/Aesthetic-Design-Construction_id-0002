import { type SchemaTypeDefinition } from 'sanity'
import { projectType } from './projectType'
import { teamMemberType } from './teamMemberType'
import { serviceType } from './serviceType'
import { homePageType } from './homePageType'
import { aboutPageType } from './aboutPageType'
import { siteSettingsType } from './siteSettingsType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, teamMemberType, serviceType, homePageType, aboutPageType, siteSettingsType],
}
