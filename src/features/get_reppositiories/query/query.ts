import { gql } from "@apollo/client"

export const GET_REPOSITORIES = gql`
query getReppo($after: String, $before: String, $first: Int, $last: Int, $query: String!){
  search(
    after: $after,
    before: $before,
    first: $first,
    last: $last,
    query: $query,
    type: REPOSITORY,
  )
  {
  pageInfo{
    startCursor
    hasNextPage
    hasPreviousPage
    endCursor
  }
  edges {
      node {
        ... on Repository {
          id
          name
          stargazerCount
          owner {
            login
          }
          url
          defaultBranchRef {
            target {
              ... on Commit {
                committedDate
              }
            }
          }

        }
      }
    }
  repositoryCount
  }
  }
`;
