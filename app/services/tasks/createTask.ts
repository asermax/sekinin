
import { getApi } from '~/services/api';
import { taskValidator } from './taskValidator';

export const createTask = async (request: Request) => {
  const formData = await request.formData()
  const { data, error } = await taskValidator.validate(Object.fromEntries(formData.entries()));

  if (data == null) {
    throw new Error(JSON.stringify(error));
  }

  const api = await getApi(request);
  const { insert_tasks_one: task } = await api.createTask(data);

  return task;
}
