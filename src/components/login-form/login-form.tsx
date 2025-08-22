'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { type Resolver, useForm } from 'react-hook-form';

import type { LoginUserPayload } from '@/services/users/users-types';
import {
  loginUserPayloadSchema,
  type ValidLoginUserPayload,
} from '@/services/users/users-validation';

import { EmailFormField } from './form-field/email-form-field';
import { PasswordFormField } from './form-field/password-form-field';

import { Button } from '../ui/button';
import { Form } from '../ui/form';

export const LoginForm = () => {
  const defaultValues: ValidLoginUserPayload = {
    email: '',
    password: '',
  };

  const resolver: Resolver<ValidLoginUserPayload> = zodResolver(
    loginUserPayloadSchema,
  ) as unknown as Resolver<ValidLoginUserPayload>;

  const form = useForm<LoginUserPayload>({
    resolver,
    defaultValues,
  });

  const onSubmit = async (_: ValidLoginUserPayload) => {
    //TODO: Handle form submission
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
        <Button type="submit" className="mt-4">
          Submit
        </Button>
      </form>
    </Form>
  );
};
