import { GraphQLClient } from "graphql-request";
import { getSdk } from './generated';

if (process.env.API_URL == null) {
  throw new Error('Missing API_URL');
}

const api = getSdk(new GraphQLClient(process.env.API_URL));

export { api };
