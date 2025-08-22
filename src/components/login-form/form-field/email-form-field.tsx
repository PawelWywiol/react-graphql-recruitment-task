import type { useForm } from 'react-hook-form';

import type { LoginUserPayload } from '@/services/users/users-types';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

export const EmailFormField = ({
  form,
}: {
  form: ReturnType<typeof useForm<LoginUserPayload>>;
}) => (
  <FormField
    control={form.control}
    name="email"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input {...field} type="email" />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);
