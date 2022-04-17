import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData, useTransition } from '@remix-run/react';
import { ValidatedForm } from 'remix-validated-form';
import { FormInput } from '~/components/common';
import { Task } from '~/components/tasks';
import { authenticator } from '~/services/auth.server';
import { createTask, getTasks, taskValidator } from '~/services/tasks';

type LoaderData = Awaited<ReturnType<typeof getLoaderData>>;

async function getLoaderData(request: Request) {
  const tasks = await getTasks(request);
  return { tasks };
}

export const loader: LoaderFunction = async ({ request }) => {
  await authenticator.isAuthenticated(request, { failureRedirect: '/auth/login' });
  return json<LoaderData>(await getLoaderData(request));
}

export const action: ActionFunction = async ({ request }) => {
  const task = await createTask(request);

  return json(task);
}

export default function Index() {
  const { tasks } = useLoaderData<LoaderData>();
  const transition = useTransition();

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <ValidatedForm
        validator={taskValidator}
        method="post"
        defaultValues={{
          text: '',
        }}
      >
        <FormInput
          name="text"
          label="Add new task: "
          clearOnSubmit
        />
      </ValidatedForm>
      <h2>
        Tasks
      </h2>
      <ul>
        {transition.submission ? (
          <li>
            <Task text={String(transition.submission.formData.get('text'))} />
          </li>
        ) : null}
        {tasks.map((task) => (
          <li key={task.id}>
            <Task {...task} />
          </li>
        ))}
      </ul>
    </div>
  );
}
