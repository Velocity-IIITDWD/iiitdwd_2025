import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    // SANITY_TOKEN: z.string(),
    SANITY_DATASET: z.string(),
    SANITY_PROJECT_ID: z.string()
  },
  experimental__runtimeEnv: process.env
});
