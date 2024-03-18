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
  query getProducts {
    products {
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
