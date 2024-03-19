import { gql, GraphQLClient } from "graphql-request";

const endpoint = `https://earth.backend.projects.iminb2b.com/graphql`;

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

export const getProductQuery = gql`
  query getProducts($id: String) {
    product(id: $id) {
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
