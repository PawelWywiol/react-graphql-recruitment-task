import type { useForm } from 'react-hook-form';

import type { LoginUserPayload } from '@/services/users/users-types';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

export const PasswordFormField = ({
  form,
}: {
  form: ReturnType<typeof useForm<LoginUserPayload>>;
}) => (
  <FormField
    control={form.control}
    name="password"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Password</FormLabel>
        <FormControl>
          <Input {...field} type="password" />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);
