import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";


export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: setContext((_, { headers }) => ({
        headers: {
          ...headers,
          Authorization: `Bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
        },
      })).concat(
        new HttpLink({
          uri: import.meta.env.VITE_APP_GITHUB_API_URL,
        })
      ),
    
})