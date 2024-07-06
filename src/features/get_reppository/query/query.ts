import { gql } from "@apollo/client"

export const GET_REPPOSITORY = gql`
 query getRepositoryData($owner: String!, $name: String!) {
  repository(owner: $owner, name: $name) {
    stargazerCount
    pushedAt
    owner {
      avatarUrl
      url
    }
    languages(first: 100) {
      nodes {
        name
        color
      }
    }
    description
  }
}
`;
