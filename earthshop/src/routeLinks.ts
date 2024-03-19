const routeLinks = {
  home: () => `/`,
  about: () => `/about`,
  products: () => `/products/all`,
  productType: ({ type }: { type: string }) => `/products/${type}`,
  product: ({ productId, type }: { type: string; productId: string }) =>
    `/products/${type}/${productId}`,
  contact: () => `/contact`,
  checkout: () => `/checkout`,
  signIn: () => `/sign-in`,
};

export default routeLinks;
