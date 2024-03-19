import { gql, GraphQLClient } from "graphql-request";

const endpoint = `https://earth-store-mril.vercel.app/graphql`;
// const endpoint = `http://127.0.0.1:8000/graphql`;

export const graphQLClient = new GraphQLClient(endpoint, {
  method: `GET`,
  jsonSerializer: {
    parse: JSON.parse,
    stringify: JSON.stringify,
  },
});

export const getProductsQuery = gql`
  query getProducts($count: Int, $after: String) {
    products(first: $count, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          name
          slug
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
  query getProducts($slug: String) {
    product(slug: $slug) {
      id
      name
      type {
        name
      }
      price
      image
      introduction
      description
      slug
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
