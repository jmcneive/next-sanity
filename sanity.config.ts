import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
//import {googleMapsInput} from '@sanity/google-maps-input'
import {schemaTypes} from './schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;


export default defineConfig({
  basePath: "/studio",
  name: "default",
  title: "01 Sanity React",
  projectId,
  dataset,
  plugins: [
    deskTool(),
    visionTool(),
    //googleMapsInput(),
  ],
  schema: {
    types: schemaTypes,
  },
});

