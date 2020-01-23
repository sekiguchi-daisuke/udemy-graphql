import React, { Component } from 'react';
import { ApolloProvider, Mutation, Query } from 'react-apollo'
import client from './client'
import gql from 'graphql-tag'

export const ME = gql`
  query me {
    user(login: "iteachonudemy") {
      name
      avatarUrl
    }
  }
`

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>Hello, graphql</div>

        <Query query={ME}>
          {
            ({ loading, error, data }) => {
              if (loading) return 'Loading...'
              if (error) return `Error! ${error.message}`
              return <div>{data.user.name}</div>
            }
          }
        </Query>
      </ApolloProvider>
    );
  }
}

export default App
