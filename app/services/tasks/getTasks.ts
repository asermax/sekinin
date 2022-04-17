import { getApi } from "../api"

export const getTasks = async (request: Request) => {
  const api = await getApi(request);
  const { tasks } = await api.getTasks();

  return tasks;
}
