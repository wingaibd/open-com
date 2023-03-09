import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 't5cih033',
  dataset: 'production',
  apiVersion: '2023-03-09',
  useCdn: true,
  token: 'skXLmLeH5YdLnQKk3J7tV8mN22suemnDiJU1O95DhuHZBEv9qo8uDTamDlybMwGmE3qxHUjL9oCGIVoX2MRSXgtF0yZvJJLvvpLm7LUbd29InWzfOL2O7T3dazMhqOXOx7Fs9qXORStXNV45U9j9L3wSNijLdnyyPpLwoK9CApt6xuBSgMMd'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);