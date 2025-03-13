import { env } from '@/env/server';
import { createClient, type QueryParams } from '@sanity/client';

export const client = createClient({
  projectId: env.SANITY_PROJECT_ID,
  dataset: env.SANITY_DATASET,
  apiVersion: '2024-11-28',
  useCdn: false
});

export const get = async <T>(
  query: string,
  params?: QueryParams
): Promise<T> => {
  try {
    const res = await client.fetch<T>(query, params ?? {});
    return res;
  } catch (err) {
    console.error('Error fetching data:', err);
    throw err;
  }
};
