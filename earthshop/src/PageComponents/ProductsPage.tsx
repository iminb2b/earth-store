import PageContainer from "@/components/PageContent";
import { GetServerSideProps, NextPage } from "next";
import PageMeta from "@/components/PageMeta";
import { css } from "@emotion/react";
import { ProductsConnection, ProductInfo } from "./HomePage";
import PageSegment from "@/components/PageSegment";
import FilterSection from "@/components/ProductsPage/FilterSection";
import ProductsSection from "@/components/ProductsPage/ProductsSection";
import { getProductsQuery, graphQLClient } from "@/api/graphql";
import { useCallback, useState } from "react";

const container = css`
  margin-top: 5rem;
  border-top: 1px solid #d7d7d7;

  display: flex;

  padding: 5rem 0;
`;

type ProductsPageProps = {
  type: string;
  products: ProductInfo[];
  initialHasNextPage: boolean;
  endCursor: string;
};

const ProductsPage: NextPage<ProductsPageProps> = ({
  type,
  products,
  initialHasNextPage,
  endCursor,
}) => {
  const [state, setState] = useState<
    | { type: "loading" }
    | { type: "hasMore"; endCursor: string }
    | { type: "hasNoMore" }
    | { type: "hasError" }
  >(
    initialHasNextPage ? { type: "hasMore", endCursor } : { type: "hasNoMore" },
  );

  const [productList, setProductList] = useState<ProductInfo[]>(products);

  const filteredProducts = productList.filter((product) =>
    type === "all" ? true : product.type.name === type,
  );

  const loadMoreProducts = useCallback(async () => {
    try {
      setState({ type: "loading" });

      const data = (await graphQLClient.request(getProductsQuery, {
        count: 6,
        after: endCursor,
      })) as ProductsConnection;

      const moreProducts = (data.products.edges ?? []).reduce(
        (acc: any, edges: any) => (edges.node ? [...acc, edges.node] : acc),
        [],
      );

      const newList = [...moreProducts, ...productList];

      setProductList(newList);

      if (data.products.pageInfo.hasNextPage) {
        setState({
          type: "hasMore",
          endCursor: data.products.pageInfo.endCursor,
        });
      }

      setState({ type: "hasNoMore" });
    } catch {
      setState({ type: "hasError" });
    }
  }, []);
  return (
    <PageContainer>
      <PageMeta
        title="Earth Store - Products Page"
        description={"Earth Store - Products Page"}
      />
      <PageSegment>
        <div css={container}>
          <FilterSection products={productList} />
          <ProductsSection
            products={filteredProducts}
            type={type}
            state={state}
            loadMoreProducts={loadMoreProducts}
          />
        </div>
      </PageSegment>
    </PageContainer>
  );
};

export default ProductsPage;

export const getServerSideProps: GetServerSideProps<
  ProductsPageProps
> = async ({ query }) => {
  const data = (await graphQLClient.request(getProductsQuery, {
    count: 6,
  })) as ProductsConnection;

  const products = (data.products.edges ?? []).reduce(
    (acc: any, edges: any) => (edges.node ? [...acc, edges.node] : acc),
    [],
  );

  return {
    props: {
      type: query.category?.toString() ?? "all",
      products: products,
      initialHasNextPage: data.products.pageInfo.hasNextPage ?? false,
      endCursor: data.products.pageInfo.endCursor ?? "",
    },
  };
};
