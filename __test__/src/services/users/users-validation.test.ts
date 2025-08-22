import { describe, expect, it } from 'vitest';

import {
  loginUserPayloadSchema,
  type ValidLoginUserPayload,
} from '@/services/users/users-validation';

describe('users-validation', () => {
  describe('loginUserPayloadSchema', () => {
    describe('valid inputs', () => {
      it('should validate correct email and password', () => {
        const validInput = {
          email: 'user@example.com',
          password: 'password123',
        };

        const result = loginUserPayloadSchema.safeParse(validInput);
        expect(result.success).toBe(true);
        if (result.success) {
          expect(result.data).toEqual(validInput);
        }
      });

      it('should validate email with different formats', () => {
        const testCases = [
          'user@domain.com',
          'test.email@example.org',
          'user+tag@domain.co.uk',
          'user_name@domain-name.info',
        ];

        testCases.forEach((email) => {
          const input = { email, password: 'password123' };
          const result = loginUserPayloadSchema.safeParse(input);
          expect(result.success).toBe(true);
        });
      });

      it('should validate password with minimum length', () => {
        const input = {
          email: 'user@example.com',
          password: '123456', // exactly 6 characters
        };

        const result = loginUserPayloadSchema.safeParse(input);
        expect(result.success).toBe(true);
      });

      it('should validate longer passwords', () => {
        const input = {
          email: 'user@example.com',
          password: 'very-long-password-123456789',
        };

        const result = loginUserPayloadSchema.safeParse(input);
        expect(result.success).toBe(true);
      });
    });

    describe('invalid inputs', () => {
      it('should reject invalid email formats', () => {
        const invalidEmails = [
          'invalid-email',
          '@domain.com',
          'user@',
          'user..double.dot@domain.com',
          '',
        ];

        invalidEmails.forEach((email) => {
          const input = { email, password: 'password123' };
          const result = loginUserPayloadSchema.safeParse(input);
          expect(result.success).toBe(false);
          if (!result.success) {
            expect(result.error.issues[0].message).toBe('Invalid email address');
          }
        });
      });

      it('should reject passwords shorter than 6 characters', () => {
        const shortPasswords = ['', '1', '12', '123', '1234', '12345'];

        shortPasswords.forEach((password) => {
          const input = { email: 'user@example.com', password };
          const result = loginUserPayloadSchema.safeParse(input);
          expect(result.success).toBe(false);
          if (!result.success) {
            expect(result.error.issues[0].message).toBe(
              'Password must be at least 6 characters long',
            );
          }
        });
      });

      it('should reject missing email field', () => {
        const input = { password: 'password123' };
        const result = loginUserPayloadSchema.safeParse(input);
        expect(result.success).toBe(false);
      });

      it('should reject missing password field', () => {
        const input = { email: 'user@example.com' };
        const result = loginUserPayloadSchema.safeParse(input);
        expect(result.success).toBe(false);
      });

      it('should reject empty object', () => {
        const input = {};
        const result = loginUserPayloadSchema.safeParse(input);
        expect(result.success).toBe(false);
      });

      it('should reject non-string email', () => {
        const input = { email: 123, password: 'password123' };
        const result = loginUserPayloadSchema.safeParse(input);
        expect(result.success).toBe(false);
      });

      it('should reject non-string password', () => {
        const input = { email: 'user@example.com', password: 123 };
        const result = loginUserPayloadSchema.safeParse(input);
        expect(result.success).toBe(false);
      });
    });

    describe('data transformation', () => {
      it('should strip unknown properties', () => {
        const input = {
          email: 'user@example.com',
          password: 'password123',
          extraField: 'should be removed',
        };

        const result = loginUserPayloadSchema.safeParse(input);
        expect(result.success).toBe(true);
        if (result.success) {
          expect(result.data).toEqual({
            email: 'user@example.com',
            password: 'password123',
          });
          expect(result.data).not.toHaveProperty('extraField');
        }
      });
    });
  });

  describe('ValidLoginUserPayload type', () => {
    it('should correctly infer type from schema', () => {
      const validPayload: ValidLoginUserPayload = {
        email: 'user@example.com',
        password: 'password123',
      };

      expect(typeof validPayload.email).toBe('string');
      expect(typeof validPayload.password).toBe('string');
    });
  });
});
