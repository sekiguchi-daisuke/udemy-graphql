import gql from 'graphql-tag'

export const ME = gql`
  query me {
    user(login: "iteachonudemy") {
      name
      avatarUrl
    }
  }
`

export const SEARCH_REPOSITORIES = gql`
  query searchRepositories($first: Int, $after: String, $last: Int, $before: String, $query: String!) {
    search(first: $first, after: $after, last: $last, before: $before, query: $query, type: REPOSITORY) {
      repositoryCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          ... on Repository {
            id
            name
            url
            stargazers {
              totalCount
            }
            viewerHasStarred
          }
        }
      }
    }
  }
`