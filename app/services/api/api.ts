import { authenticator } from '../auth.server';
import type { SdkFunctionWrapper } from './generated';

import { GraphQLClient } from 'graphql-request';
import { getSdk } from './generated';

const getApi = async (request?: Request) => {
  if (process.env.API_URL == null) {
    throw new Error('Missing API_URL');
  }

  let apiWrapper: SdkFunctionWrapper|undefined;

  if (request != null) {
    const user = await authenticator.isAuthenticated(request);

    if (user != null) {
      apiWrapper = async (action) => action({ Authorization: `Bearer ${user.accessToken}` });

    }
  }

  return getSdk(new GraphQLClient(process.env.API_URL), apiWrapper);
};

export { getApi };
