import { ApolloClient, InMemoryCache, HttpLink} from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://catastro.hasura.app/v1/graphql',
    headers: {'Content-Type': 'application/json'}
  }),
  cache: new InMemoryCache()
});

export default client;