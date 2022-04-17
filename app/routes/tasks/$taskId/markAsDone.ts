import type { ActionFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import invariant from 'tiny-invariant';
import { markTaskAsDone } from '~/services/tasks';

export const action: ActionFunction = async ({ request, params }) => {
  invariant(params.taskId, 'taskId param is required');
  const task = await markTaskAsDone(request, parseInt(params.taskId, 10));

  return json(task);
}
