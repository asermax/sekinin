import { withZod } from '@remix-validated-form/with-zod';
import { z } from 'zod';

export const taskValidator = withZod(z.object({
  text: z
    .string()
    .nonempty('Task is required'),
}));
