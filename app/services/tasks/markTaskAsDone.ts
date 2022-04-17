import { getApi } from '~/services/api';

export const markTaskAsDone = async (request: Request, id: number) => {
  const api = await getApi(request);
  const { update_tasks_by_pk: task } = await api.markTaskAsDone({ id });

  return task;
}
