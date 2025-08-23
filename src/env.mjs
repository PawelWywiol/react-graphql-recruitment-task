import { z } from 'zod';

const isServer = typeof window === 'undefined';

export const serverSideEnvSchema = z.object({
  GRAPHQL_ENDPOINT: z.url(),
});

const parsedEnv = serverSideEnvSchema.safeParse(process.env);

if (!parsedEnv.success) {
  throw new Error('Invalid environment variables');
}

export const env = new Proxy(parsedEnv.data, {
  get(target, property) {
    if (typeof property !== 'string') return;
    // Throw a descriptive error if a server-side env var is accessed on the client
    // Otherwise it would just be returning `undefined` and be annoying to debug
    if (!isServer && !property.startsWith('NEXT_PUBLIC_'))
      throw new Error(
        process.env.NODE_ENV === 'production'
          ? '❌ Attempted to access a server-side environment variable on the client'
          : `❌ Attempted to access server-side environment variable '${property}' on the client`,
      );
    return target[/** @type {keyof typeof target} */ (property)];
  },
});
