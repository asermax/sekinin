import { getApi } from '~/services/api';

export const markTaskAsNotDone = async (request: Request, id: number) => {
  const api = await getApi(request);
  const { update_tasks_by_pk: task } = await api.markTaskAsNotDone({ id });

  return task;
}
