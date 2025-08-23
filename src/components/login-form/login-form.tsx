'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { type Resolver, useForm } from 'react-hook-form';

import {
  loginUserPayloadSchema,
  type ValidLoginUserPayload,
} from '@/services/users/users-validation';

import { EmailFormField } from './form-field/email-form-field';
import { PasswordFormField } from './form-field/password-form-field';

import type { MutationLoginUserArgs } from '@/graphql/types/schema';
import { LOGGED_IN_ROUTE_PATH } from '@/config/route';
import { AUTH_TOKEN_LOCAL_STORAGE_KEY } from '@/config/storage';
import { useLoginUserMutation } from '@/graphql/types/generated';
import { Button } from '../ui/button';
import { Form } from '../ui/form';

export const LoginForm = () => {
  const router = useRouter();
  const [unknownError, setUnknownError] = useState<string | null>(null);
  const [loginUserMutation, { loading, error }] = useLoginUserMutation();

  const defaultValues: ValidLoginUserPayload = {
    email: '',
    password: '',
  };

  const resolver: Resolver<ValidLoginUserPayload> = zodResolver(
    loginUserPayloadSchema,
  ) as unknown as Resolver<ValidLoginUserPayload>;

  const form = useForm<MutationLoginUserArgs>({
    resolver,
    defaultValues,
  });

  const onSubmit = async (data: ValidLoginUserPayload) => {
    try {
      setUnknownError(null);

      const result = await loginUserMutation({
        variables: {
          email: data.email,
          password: data.password,
        },
      });

      if (result.data?.loginUser?.token) {
        globalThis?.localStorage?.setItem(
          AUTH_TOKEN_LOCAL_STORAGE_KEY,
          result.data.loginUser.token,
        );
        router.replace(LOGGED_IN_ROUTE_PATH);
      }
    } catch {
      setUnknownError('An unknown error occurred. Please try again.');
      //TODO: Implement error logging e.g. Sentry
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 m-auto max-w-md px-4"
      >
        <h2 className="text-lg font-semibold">Login</h2>
        <div className="flex flex-col gap-4 justify-center">
          <EmailFormField form={form} />
          <PasswordFormField form={form} />
        </div>
        {(unknownError || error) && (
          <div className="text-red-500 text-sm">{error?.message ?? unknownError}</div>
        )}
        <Button type="submit" className="mt-4" disabled={loading}>
          {loading ? 'Logging in...' : 'Submit'}
        </Button>
      </form>
    </Form>
  );
};
