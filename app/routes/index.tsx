import type { LoaderFunction } from '@remix-run/node';
import type { User } from '~/services/auth.server'
import { Form, useLoaderData } from '@remix-run/react';
import { authenticator } from '~/services/auth.server';

interface LoaderData {
  user?: User
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request);

  return { user };
}

export default function Index() {
  const { user } : LoaderData = useLoaderData()

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Welcome to Sekinin</h1>
      {user?.email != null ? (
        user.email
      ) : (
        <Form action="/auth/auth0" method="post">
          <button>Login with Auth0</button>
        </Form>
      )}

    </div>
  );
}
