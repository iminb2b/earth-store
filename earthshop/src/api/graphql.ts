import { gql, GraphQLClient } from "graphql-request";

const endpoint = `https://earth.backend.projects.iminb2b.com/graphql`;
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

export const getReviewsByProductQuery = gql`
  query getReviewsByProduct($productId: String) {
    reviewsByProduct(productId: $productId) {
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

export const getCartQuery = gql`
  query getCart($username: String) {
    cart(username: $username) {
      product {
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
      count
    }
  }
`;

export const graphQLClientMutation = new GraphQLClient(endpoint, {
  method: `POST`,
});

export const createReviewMutation = gql`
  mutation createReview(
    $email: String
    $message: String
    $productSlug: String
  ) {
    createReview(email: $email, message: $message, productSlug: $productSlug) {
      success
    }
  }
`;

export const createCartMutation = gql`
  mutation createCart($username: String, $count: Int, $productSlug: String) {
    createCart(username: $username, count: $count, productSlug: $productSlug) {
      success
    }
  }
`;
