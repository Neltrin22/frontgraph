import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql', // Cambia esta URL por la de tu servidor GraphQL
  cache: new InMemoryCache()
});

export default client;
