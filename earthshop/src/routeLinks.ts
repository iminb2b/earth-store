const routeLinks = {
  home: () => `/`,
  about: () => `/about`,
  products: () => `/products`,
  product: ({ productId }: { productId: number }) => `/products/${productId}`,
  contact: () => `/contact`,
  checkout: () => `/checkout`,
  signIn: () => `/sign-in`,
};

export default routeLinks;
