import { type SchemaTypeDefinition } from 'sanity'
import { projectType } from './projectType'
import { teamMemberType } from './teamMemberType'
import { serviceType } from './serviceType'
import { homePageType } from './homePageType'
import { aboutPageType } from './aboutPageType'
import { siteSettingsType } from './siteSettingsType'
import { testimonialType } from './testimonialType'
import { servicesPageType } from './servicesPageType'
import { contactPageType } from './contactPageType'
import { seoType } from './seoType'
import { legalPageType } from './legalPageType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    projectType, 
    teamMemberType, 
    serviceType, 
    testimonialType, 
    homePageType, 
    aboutPageType, 
    servicesPageType, 
    contactPageType, 
    siteSettingsType,
    seoType,
    legalPageType
  ],
}
