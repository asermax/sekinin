import { useFetcher } from "@remix-run/react";
import { useMemo } from "react";

interface TaskProps {
  id?: number
  text: string
  done?: boolean
}

export const Task = ({ id, text, done = false }: TaskProps) => {
  const fetcher = useFetcher();

  const actuallyDone = useMemo(() => {
    if (fetcher.submission != null) {
      return fetcher.submission.action.includes('markAsDone');
    }

    return done;
  }, [done, fetcher]);

  return (
    <fetcher.Form
      action={`/tasks/${id}/markAs${actuallyDone ? 'Not' : ''}Done`}
      method="post"
    >
      {text}
      &nbsp;
      &nbsp;
      {id != null ? (
        <button type="submit">
          {actuallyDone ? (
            'Mark as not done'
          ) : (
            'Mark as done'
          )}
        </button>
      ) : null}
    </fetcher.Form>
  );
};
