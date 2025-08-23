import { beforeEach, describe, expect, it, vi } from 'vitest';

import { makeClient } from '@/lib/apollo/apollo.client';

describe('apollo.client', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    Object.defineProperty(globalThis, 'localStorage', {
      value: {
        getItem: vi.fn(),
        setItem: vi.fn(),
        removeItem: vi.fn(),
      },
      writable: true,
    });

    Object.defineProperty(globalThis, 'location', {
      value: {
        href: '',
      },
      writable: true,
    });
  });

  describe('makeClient', () => {
    it('should return an ApolloClient instance', () => {
      const client = makeClient();
      expect(client).toBeDefined();
    });

    it('should return the same client instance on multiple calls', () => {
      const client1 = makeClient();
      const client2 = makeClient();
      expect(client1).toBe(client2);
    });
  });
});
