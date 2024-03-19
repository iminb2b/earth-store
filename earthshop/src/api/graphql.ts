import { gql, GraphQLClient } from "graphql-request";

const endpoint = `http://127.0.0.1:8000/graphql`;

export const graphQLClient = new GraphQLClient(endpoint, {
  method: `GET`,
  jsonSerializer: {
    parse: JSON.parse,
    stringify: JSON.stringify,
  },
});

export const getProductsQuery = gql`
  query getProducts($count: Int) {
    products(first: $count) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          name
          type {
            name
          }
          price
          image
          introduction
          description
        }
      }
    }
  }
`;

export const getReviewsQuery = gql`
  query getReviews {
    reviews {
      id
      description
      product {
        id
      }
      user {
        username
        image
        id
      }
    }
  }
`;
